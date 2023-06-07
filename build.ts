import { parse } from "https://deno.land/std@0.185.0/yaml/mod.ts";

interface Document {
  header: string;
  extensions: Extension[];
  footer: string;
}
interface Extension {
  repo: string;
  language: string;
  platforms: string[];
  no_datasette?: boolean;
  short: string;
  long: string;
}

function printExtensions(extensions: Extension[]): string {
  return `


${extensions
  .map(
    (extension) => `

### [\`${extension.repo}\`](https://github.com/asg017/${extension.repo})

${extension.long}

${printExtensionDistribution(extension)}

${printExtensionPlatforms(extension)}


`
  )
  .join("\n\n")}

  `;
}
function printExtensionDistribution({ repo, no_datasette }: Extension): string {
  const repoSnake = repo.replaceAll("-", "_");
  return `

 | Language/Platform | Install                                    |                                                                                                                                                                                      |
| ----------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Python            | \`pip install ${repo}\`                 | [![PyPI](https://img.shields.io/pypi/v/${repo}.svg?color=blue&logo=python&logoColor=white)](https://pypi.org/project/${repo}/)                                             |
| Node.js           | \`npm install ${repo}\`                 | [![npm](https://img.shields.io/npm/v/${repo}.svg?color=green&logo=nodedotjs&logoColor=white)](https://www.npmjs.com/package/${repo})                                       |
| Deno              | [\`deno.land/x/${repoSnake}\`](https://deno.land/x/${repoSnake})           | [![deno.land/x release](https://img.shields.io/github/v/release/asg017/${repo}?color=fef8d2&include_prereleases&label=deno.land%2Fx&logo=deno)](https://deno.land/x/${repoSnake})                                                                       |${
    no_datasette
      ? ``
      : `\n| Datasette         | \`datasette install datasette-${repo}\` | [![PyPI](https://img.shields.io/pypi/v/datasette-${repo}.svg?color=B6B6D9&label=Datasette+plugin&logoColor=white&logo=python)](https://pypi.org/project/datasette-${repo}) |`
  }
| Ruby              | \`gem install ${repo}\`                 | ![Gem](https://img.shields.io/gem/v/${repo}?color=red&logo=rubygems&logoColor=white)                                                                                                  |
| Github Release    |                                            | ![GitHub tag (latest SemVer pre-release)](https://img.shields.io/github/v/tag/asg017/${repo}?color=lightgrey&include_prereleases&label=Github+release&logo=github)

`;
}

function printExtensionPlatforms({ platforms }: Extension) {
  return platforms
    .map((p) => {
      const [os, cpu] = p.split("-");
      let label;
      if (os === "macos" && cpu === "x86_64") label = "MacOS x86_64";
      else if (os === "macos" && cpu === "aarch64")
        label = "MacOS M1 and M2 chips";
      else {
        label = `${os[0].toUpperCase()}${os.substring(1)} ${cpu}`;
      }
      return `- \`${p}\` (${label})`;
    })
    .join("\n");
}
function main() {
  const source = Deno.readTextFileSync("data.yaml");

  const document: Document = parse(source) as Document;

  Deno.writeTextFileSync(
    "README.md",
    `

${document.header}

## Extensions

${printExtensions(document.extensions)}

${document.footer}
`
  );
}

main();
