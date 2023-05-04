watch:
	deno run --allow-read=data.yaml --allow-write=README.md --watch=data.yaml build.ts

build: README.md build.ts data.yaml
	deno run --allow-read=data.yaml --allow-write=README.md build.ts

all: build

.PHONY: watch build all