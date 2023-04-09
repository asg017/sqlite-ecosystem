# sqlite-ecosystem

All the SQLite extensions, tools, and guides that I (Alex Garcia 👋🏼) have written and open sourced.

Feel free to start a discussion in this repo about meta-level SQLite extension and tooling talk! Though if you're having a specific issue with a particular extension or tool, then file an issue in that project's repository.

## Overview

These are all the loadable SQLite extensions I have built, along with which programming language they are written in and where they are distributed.

| Extension                                 | Description                            | Language | Pre-compiled extensions? | pip? | npm? | Deno? | Datasette plugin? |
| ----------------------------------------- | -------------------------------------- | -------- | :----------------------: | :--: | :--: | :---: | :---------------: |
| [`sqlite-http`](#sqlite-http)             | Make HTTP requests                     | Go       |            ✅            |  ✅  |  ✅  |  ✅   |        ✅         |
| [`sqlite-html`](#sqlite-html)             | parse HTML documents                   | Go       |            ✅            |  ✅  |  ✅  |  ✅   |        ✅         |
| [`sqlite-lines`](#sqlite-lines)           | Read files/blob line-by-line           | C        |            ✅            |  ✅  |  ✅  |  ✅   |        ✅         |
| [`sqlite-path`](#sqlite-path)             | Parse and generate filepaths           | C        |            ✅            |  ✅  |  ✅  |  ✅   |        ✅         |
| [`sqlite-url`](#sqlite-url)               | Parse and generate URLs                | C        |            ✅            |  ✅  |  ✅  |  ✅   |        ✅         |
| [`sqlite-xsv`](#sqlite-xsv)               | Query CSVs                             | Rust     |            ✅            |  ✅  |  ✅  |  ✅   |        🚧         |
| [`sqlite-regex`](#sqlite-regex)           | Regular expression functions           | Rust     |            ✅            |  ✅  |  ✅  |  ✅   |        ✅         |
| [`sqlite-ulid`](#sqlite-ulid)             | Work with ULIDs                        | Rust     |            ✅            |  ✅  |  ✅  |  ✅   |        ✅         |
| [`sqlite-jsonschema`](#sqlite-jsonschema) | Validate JSON objects with JSON Schema | Rust     |            ✅            |  ✅  |  ✅  |  ✅   |        ✅         |
| [`sqlite-fastrand`](#sqlite-fastrand)     | Generate fast numbers/blobs quickly    | Rust     |            ✅            |  ✅  |  ✅  |  ✅   |        ✅         |
| [`sqlite-vss`](#sqlite-vss)               | Vector search in SQLite                | C++      |            ✅            |  🚧  |  🚧  |  🚧   |        🚧         |

## Extensions

### [`sqlite-lines`](https://github.com/asg017/sqlite-lines)

A SQLite extension for efficiently reading large files or blobs line-by-line.

```sql
select line from lines_read('logs.txt');
```

Prebuilt loadable extensions available for:

- `darwin-x64` (MacOS x86_64)
- `linux-x64` (Linux x86_64)

| Language/Platform | Install                                    |                                                                                                                       |
| ----------------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| Python            | `pip install sqlite-lines`                 | [![PyPI](https://img.shields.io/pypi/v/sqlite-lines.svg)](https://pypi.org/project/sqlite-lines/)                     |
| Node.js           | `npm install sqlite-lines`                 | [![npm](https://img.shields.io/npm/v/sqlite-lines.svg)](https://www.npmjs.com/package/sqlite-lines)                   |
| Deno              | https://deno.land/x/sqlite_lines           | [![deno version](https://deno.land/badge/sqlite_lines/version)](https://deno.land/x/sqlite_lines)                     |
| Datasette         | `datasette install datasette-sqlite-lines` | [![PyPI](https://img.shields.io/pypi/v/datasette-sqlite-lines.svg)](https://pypi.org/project/datasette-sqlite-lines/) |

### [`sqlite-path`](https://github.com/asg017/sqlite-path)

A SQLite extension for parsing, generating, and querying paths.

```sql
select path_dirname('foo/bar.txt'); -- 'foo/'
select path_basename('foo/bar.txt'); -- 'bar.txt'
select path_extension('foo/bar.txt'); -- '.txt'
```

Prebuilt loadable extensions available for:

- `darwin-x64` (MacOS x86_64)
- `win32-x64` (Windows x86_64)
- `linux-x64` (Linux x86_64)

| Language/Platform | Install                                   |                                                                                                                     |
| ----------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Python            | `pip install sqlite-path`                 | [![PyPI](https://img.shields.io/pypi/v/sqlite-path.svg)](https://pypi.org/project/sqlite-path/)                     |
| Node.js           | `npm install sqlite-path`                 | [![npm](https://img.shields.io/npm/v/sqlite-path.svg)](https://www.npmjs.com/package/sqlite-path)                   |
| Deno              | https://deno.land/x/sqlite_path           | [![deno version](https://deno.land/badge/sqlite_path/version)](https://deno.land/x/sqlite_path)                     |
| Datasette         | `datasette install datasette-sqlite-path` | [![PyPI](https://img.shields.io/pypi/v/datasette-sqlite-path.svg)](https://pypi.org/project/datasette-sqlite-path/) |

### [`sqlite-url`](https://github.com/asg017/sqlite-url)

A SQLite extension for parsing, generating, and querying URLs and query strings

- Extract specific parts of a URL, like schemes, hostnames, and paths
- Generate URLs with parts safely
- Iterate through all key and values in a query string

```sql
select url_valid('https://sqlite.org'); -- 1
select url_scheme('https://www.sqlite.org/vtab.html#usage'); -- 'https'
select url_host('https://www.sqlite.org/vtab.html#usage'); -- 'www.sqlite.org'
```

Prebuilt loadable extensions available for:

- `darwin-x64` (MacOS x86_64)
- `linux-x64` (Linux x86_64)

| Language/Platform | Install                                  |                                                                                                                   |
| ----------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Python            | `pip install sqlite-url`                 | [![PyPI](https://img.shields.io/pypi/v/sqlite-url.svg)](https://pypi.org/project/sqlite-url/)                     |
| Node.js           | `npm install sqlite-url`                 | [![npm](https://img.shields.io/npm/v/sqlite-url.svg)](https://www.npmjs.com/package/sqlite-url)                   |
| Deno              | https://deno.land/x/sqlite_url           | [![deno version](https://deno.land/badge/sqlite_url/version)](https://deno.land/x/sqlite_url)                     |
| Datasette         | `datasette install datasette-sqlite-url` | [![PyPI](https://img.shields.io/pypi/v/datasette-sqlite-url.svg)](https://pypi.org/project/datasette-sqlite-url/) |

### [`sqlite-html`](https://github.com/asg017/sqlite-html)

A SQLite extension for querying, manipulating, and creating HTML elements.

- Extract HTML or text from HTML with CSS selectors, like `.querySelector()`, `.innerHTML`, and `.innerText`
- Generate a table of matching elements from a CSS selector, like `.querySelectorAll()`
- Safely create HTML elements in a query, like .createElement() and `.appendChild()`

```sql
select html_extract('<p> Anakin <b>Skywalker</b> </p>', 'b'); -- "<b>Skywalker</b>"

```

Prebuilt loadable extensions available for:

- `darwin-x64` (MacOS x86_64)
- `win32-x64` (Windows x86_64)
- `linux-x64` (Linux x86_64)

| Language/Platform | Install                                   |                                                                                                                     |
| ----------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Python            | `pip install sqlite-html`                 | [![PyPI](https://img.shields.io/pypi/v/sqlite-html.svg)](https://pypi.org/project/sqlite-html/)                     |
| Node.js           | `npm install sqlite-html`                 | [![npm](https://img.shields.io/npm/v/sqlite-html.svg)](https://www.npmjs.com/package/sqlite-html)                   |
| Deno              | https://deno.land/x/sqlite_html           | [![deno version](https://deno.land/badge/sqlite_html/version)](https://deno.land/x/sqlite_html)                     |
| Datasette         | `datasette install datasette-sqlite-html` | [![PyPI](https://img.shields.io/pypi/v/datasette-sqlite-html.svg)](https://pypi.org/project/datasette-sqlite-html/) |

### [`sqlite-http`](https://github.com/asg017/sqlite-http)

A SQLite extension for making HTTP requests purely in SQL.

- Create GET, POST, and other HTTP requests, like curl, wget, and fetch
- Download response bodies, header, status codes, timing info
- Set rate limits, timeouts

```sql
select http_get_body('https://text.npr.org/');
select
  http_get_body('https://api.github.com/repos/sqlite/sqlite') ->> '$.description';
```

Prebuilt loadable extensions available for:

- `darwin-x64` (MacOS x86_64)
- `win32-x64` (Windows x86_64)
- `linux-x64` (Linux x86_64)

| Language/Platform | Install                                   |                                                                                                                     |
| ----------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Python            | `pip install sqlite-http`                 | [![PyPI](https://img.shields.io/pypi/v/sqlite-http.svg)](https://pypi.org/project/sqlite-http/)                     |
| Node.js           | `npm install sqlite-http`                 | [![npm](https://img.shields.io/npm/v/sqlite-http.svg)](https://www.npmjs.com/package/sqlite-http)                   |
| Deno              | https://deno.land/x/sqlite_http           | [![deno version](https://deno.land/badge/sqlite_http/version)](https://deno.land/x/sqlite_http)                     |
| Datasette         | `datasette install datasette-sqlite-http` | [![PyPI](https://img.shields.io/pypi/v/datasette-sqlite-http.svg)](https://pypi.org/project/datasette-sqlite-http/) |

### [`sqlite-regex`](https://github.com/asg017/sqlite-regex)

A fast SQLite extension for regular expressions.

```sql
select regex_find(
  '[0-9]{3}-[0-9]{3}-[0-9]{4}',
  'phone: 111-222-3333'
);

select rowid, *
from regex_find_all(
  '\b\w{13}\b',
  'Retroactively relinquishing remunerations is reprehensible.'
);
/*
┌───────┬───────┬─────┬───────────────┐
│ rowid │ start │ end │     match     │
├───────┼───────┼─────┼───────────────┤
│ 0     │ 0     │ 13  │ Retroactively │
│ 1     │ 14    │ 27  │ relinquishing │
│ 2     │ 28    │ 41  │ remunerations │
│ 3     │ 45    │ 58  │ reprehensible │
└───────┴───────┴─────┴───────────────┘
*/
```

Prebuilt loadable extensions available for:

- `darwin-x64` (MacOS x86_64)
- `darwin-arm64` (MacOS M1 and M2 chips)
- `win32-x64` (Windows x86_64)
- `linux-x64` (Linux x86_64)

| Language/Platform | Install                                    |                                                                                                                       |
| ----------------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| Python            | `pip install sqlite-regex`                 | [![PyPI](https://img.shields.io/pypi/v/sqlite-regex.svg)](https://pypi.org/project/sqlite-regex/)                     |
| Node.js           | `npm install sqlite-regex`                 | [![npm](https://img.shields.io/npm/v/sqlite-regex.svg)](https://www.npmjs.com/package/sqlite-regex)                   |
| Deno              | https://deno.land/x/sqlite_regex           | [![deno version](https://deno.land/badge/sqlite_regex/version)](https://deno.land/x/sqlite_regex)                     |
| Datasette         | `datasette install datasette-sqlite-regex` | [![PyPI](https://img.shields.io/pypi/v/datasette-sqlite-regex.svg)](https://pypi.org/project/datasette-sqlite-regex/) |

### [`sqlite-jsonschema`](https://github.com/asg017/sqlite-jsonschema)

A SQLite extension for validating JSON objects with [JSON Schema](https://json-schema.org/).

```sql
select jsonschema_matches('{"maxLength": 5}', json_quote('alex')); -- 1
```

Prebuilt loadable extensions available for:

- `darwin-x64` (MacOS x86_64)
- `darwin-arm64` (MacOS M1 and M2 chips)
- `win32-x64` (Windows x86_64)
- `linux-x64` (Linux x86_64)

| Language/Platform | Install                                         |                                                                                                                                 |
| ----------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Python            | `pip install sqlite-jsonschema`                 | [![PyPI](https://img.shields.io/pypi/v/sqlite-jsonschema.svg)](https://pypi.org/project/sqlite-jsonschema/)                     |
| Node.js           | `npm install sqlite-jsonschema`                 | [![npm](https://img.shields.io/npm/v/sqlite-jsonschema.svg)](https://www.npmjs.com/package/sqlite-jsonschema)                   |
| Deno              | https://deno.land/x/sqlite_jsonschema           | [![deno version](https://deno.land/badge/sqlite_jsonschema/version)](https://deno.land/x/sqlite_jsonschema)                     |
| Datasette         | `datasette install datasette-sqlite-jsonschema` | [![PyPI](https://img.shields.io/pypi/v/datasette-sqlite-jsonschema.svg)](https://pypi.org/project/datasette-sqlite-jsonschema/) |

### [`sqlite-fastrand`](https://github.com/asg017/sqlite-fastrand)

A SQLite extension for quickly generating random numbers, booleans, characters, and blobs

```sql
select fastrand_int(); -- 556823563
select fastrand_alphabetic(); -- 's'
select fastrand_uppercase();-- 'M'
select fastrand_double(); -- 0.740834390248454
```

Prebuilt loadable extensions available for:

- `darwin-x64` (MacOS x86_64)
- `darwin-arm64` (MacOS M1 and M2 chips)
- `win32-x64` (Windows x86_64)
- `linux-x64` (Linux x86_64)

| Language/Platform | Install                                       |                                                                                                                             |
| ----------------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Python            | `pip install sqlite-fastrand`                 | [![PyPI](https://img.shields.io/pypi/v/sqlite-fastrand.svg)](https://pypi.org/project/sqlite-fastrand/)                     |
| Node.js           | `npm install sqlite-fastrand`                 | [![npm](https://img.shields.io/npm/v/sqlite-fastrand.svg)](https://www.npmjs.com/package/sqlite-fastrand)                   |
| Deno              | https://deno.land/x/sqlite_fastrand           | [![deno version](https://deno.land/badge/sqlite_fastrand/version)](https://deno.land/x/sqlite_fastrand)                     |
| Datasette         | `datasette install datasette-sqlite-fastrand` | [![PyPI](https://img.shields.io/pypi/v/datasette-sqlite-fastrand.svg)](https://pypi.org/project/datasette-sqlite-fastrand/) |

### [`sqlite-ulid`](https://github.com/asg017/sqlite-ulid)

A SQLite extension for generating and working with [ULIDs](https://github.com/ulid/spec).

```sql
select ulid(); -- '01gqr4j69cc7w1xdbarkcbpq17'
select ulid_bytes(); -- X'0185310899dd7662b8f1e5adf9a5e7c0'
select ulid_with_prefix('invoice'); -- 'invoice_01gqr4jmhxhc92x1kqkpxb8j16'
select ulid_datetime('01gqr4j69cc7w1xdbarkcbpq17') -- '2023-01-26 22:53:20.556'
```

Prebuilt loadable extensions available for:

- `darwin-x64` (MacOS x86_64)
- `darwin-arm64` (MacOS M1 and M2 chips)
- `win32-x64` (Windows x86_64)
- `linux-x64` (Linux x86_64)

| Language/Platform | Install                                   |                                                                                                                     |
| ----------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Python            | `pip install sqlite-ulid`                 | [![PyPI](https://img.shields.io/pypi/v/sqlite-ulid.svg)](https://pypi.org/project/sqlite-ulid/)                     |
| Node.js           | `npm install sqlite-ulid`                 | [![npm](https://img.shields.io/npm/v/sqlite-ulid.svg)](https://www.npmjs.com/package/sqlite-ulid)                   |
| Deno              | https://deno.land/x/sqlite_ulid           | [![deno version](https://deno.land/badge/sqlite_ulid/version)](https://deno.land/x/sqlite_ulid)                     |
| Datasette         | `datasette install datasette-sqlite-ulid` | [![PyPI](https://img.shields.io/pypi/v/datasette-sqlite-ulid.svg)](https://pypi.org/project/datasette-sqlite-ulid/) |

### [`sqlite-xsv`](https://github.com/asg017/sqlite-xsv)

A fast and performant SQLite extension for CSV files, written in Rust!

- Query CSVs, TSVs, and other-SVs as SQLite virtual tables
- The "reader" interface lets you query CSVs from other data sources, such as [`sqlite-http`](#sqlite-http)
- Builtin support for querying CSVs with gzip or zstd compression

```sql
create virtual table temp.students using csv(
  filename="students.csv"
);

select * from temp.students;

create virtual table temp.students_gz using csv(
  filename="students.csv.gz"
);

create virtual table temp.students_reader using csv_reader(
  id integer,
  name text,
  age integer,
  progess real
);
select * from temp.students_reader("./target/students.csv");
```

Prebuilt loadable extensions available for:

- `darwin-x64` (MacOS x86_64)
- `darwin-arm64` (MacOS M1 and M2 chips)
- `win32-x64` (Windows x86_64)
- `linux-x64` (Linux x86_64)

| Language/Platform | Install                        |                                                                                                 |
| ----------------- | ------------------------------ | ----------------------------------------------------------------------------------------------- |
| Python            | `pip install sqlite-xsv`       | [![PyPI](https://img.shields.io/pypi/v/sqlite-xsv.svg)](https://pypi.org/project/sqlite-xsv/)   |
| Node.js           | `npm install sqlite-xsv`       | [![npm](https://img.shields.io/npm/v/sqlite-xsv.svg)](https://www.npmjs.com/package/sqlite-xsv) |
| Deno              | https://deno.land/x/sqlite_xsv | [![deno version](https://deno.land/badge/sqlite_xsv/version)](https://deno.land/x/sqlite_xsv)   |
| Datasette         | Not available yet              |                                                                                                 |

### [`sqlite-vss`](https://github.com/asg017/sqlite-vss)

A SQLite extension for efficient vector search, based on Faiss!

```sql
create virtual table vss_articles using vss0(
  headline_embedding(384),
  description_embedding(384),
);

insert into vss_articles(rowid, headline_embedding)
  select rowid, headline_embedding from articles;

select rowid, distance
from vss_articles
where vss_search(
  headline_embedding,
  (select headline_embedding from articles where rowid = 123)
)
limit 100;
```

Prebuilt loadable extensions available for:

- `darwin-x64` (MacOS x86_64)
- `linux-x64` (Linux x86_64)

| Language/Platform | Install           |     |
| ----------------- | ----------------- | --- |
| Python            | Not available yet |     |
| Node.js           | Not available yet |     |
| Deno              | Not available yet |     |
| Datasette         | Not available yet |     |

### Distribution

SQLite extensions have historically been hard to shared with other people. Installing and using them can be tricky and confusing, but these are some strategies I've used to make that easier!

### `pip` for Python Developers

Most of my SQLite extensions are additional placed in a small Python library and distributed on [PyPi](https://pypi.org/). Python developers can then install these extensions with a `pip install` command like so:

```bash
pip install sqlite-regex
```

The actual Python library is small and meant to be used with the builtin `sqlite3` Python module, like so:

```python
import sqlite3
import sqlite_regex

db = sqlite3.connect(':memory:')

db.enable_load_extension(True)
sqlite_regex.load(db)

db.execute("select regex_version(), '[abc]' regexp 'a';").fetchone()
# ('v0.1.0', 1)
```

See [_Making SQLite extensions pip install-able
_](https://observablehq.com/@asg017/making-sqlite-extensions-pip-install-able) (February 2023) for more details.

### `npm` for Node.js Developers

These extensions are also distributed on [`npm`](https://npmjs.com/) for use in Node.js. they can be install with a `npm install` command like so:

```bash
npm install sqlite-regex
```

And then used in Node.js programs with [`better-sqlite3`](https://github.com/WiseLibs/better-sqlite3) or [`node-sqlite3`](https://github.com/TryGhost/node-sqlite3) like so:

```js
import Database from "better-sqlite3";
import * as sqlite_regex from "sqlite-regex";

const db = new Database(":memory:");

db.loadExtension(sqlite_regex.getLoadablePath());

const version = db.prepare("select regex_version()").pluck().get();
console.log(version); // "v0.2.0"
```

See [_Making SQLite extensions npm install'able for Node.js, and on deno.land/x for Deno_](https://observablehq.com/@asg017/making-sqlite-extensions-npm-installable-and-deno) (March 2023) for more details.

### `deno.land/x` for Deno Developers

These extensions are also distributed on [`deno.land/x`](https://deno.land/x) for use in [Deno](https://deno.land/) programs. It's meant to work with the [`x/sqlite3`](https://deno.land/x/sqlite3) client like so:

```ts
import { Database } from "https://deno.land/x/sqlite3@0.8.0/mod.ts";
import * as sqlite_regex from "https://deno.land/x/sqlite_regex@v0.2.3-alpha.2/mod.ts";

const db = new Database(":memory:");

db.enableLoadExtension = true;
sqlite_regex.load(db);

const [version] = db.prepare("select regex_version()").value<[string]>()!;

console.log(version);
```

See [the "Deno" section of _Making SQLite extensions npm install'able for Node.js, and on deno.land/x for Deno_](https://observablehq.com/@asg017/making-sqlite-extensions-npm-installable-and-deno#cell-13) (March 2023) for more details.

### As Datasette Plugins

Most of these SQLite extensions are also distributed as [Datasette Plugins](https://datasette.io/plugins). They are small wrappers around their cooresponding [pip packages](#pip-for-python-developers).

They can be installed like so:

```bash
datasette install datasette-sqlite-regex
```

Now all future Datasette instances will include `sqlite-regex` functions. Here we test it using [`datasette --get`](https://docs.datasette.io/en/stable/cli-reference.html#datasette-get).

```
$ datasette --get '/_memory.csv?sql=select+regex_version()'
regex_version()
v0.1.0
```

## Roadmap

Various extensions and tools that I plan to build and open source in the future! Most of the development of these happen in private repos, to make my life easier.

If you're interested in any of these, just send me a message!

### Future SQLite Extensions

- `sqlite-img`: Query and manipulate images (cropping, thumbnails, rotation, etc.)
- `sqlite-xml`: Query XML documents with XPath strings
- `sqlite-assert`: Make assertions of your data at query-time
- `sqlite-parquet`: Query Parquet files from SQLite
- `sqlite-md`: Query Markdown documents as their AST
- `sqlite-geo`: A GIS extension, a slimmed-down alternative to spatialite
- `sqlite-python`: Write loadable SQLite extensions in pure Python
- `sqlite-qjs`: Create custom scalar, aggregate, and table functions in JavaScript with [QuickJS](https://bellard.org/quickjs/)
- `sqlite-duckdb`: Query and insert data in DuckDB tables, query CSVs/Parquet/JSON with DuckDB
- `sqlite-pg`: Query and insert data into Postgres tables
- `sqlite-notion`: Query and insert data into Notion databases
- `sqlite-google-sheets`: query and insert data into Google Sheet

### Future Tooling

- `sqlite-package-manager`: A command-line tool for manage SQLite extensions for your project, similar to npm/pip/brew
- `sqlite-docs`: Document SQLite tables and columns with in-line comments on `CREATE TABLE` statements, like JSDoc/rustdoc/docstrings
- `sqlitex`: A modern `sqlite3` alternative, a new CLI with Parquet/S3 support, a bigger stdlib, syntax highlighting, and more
