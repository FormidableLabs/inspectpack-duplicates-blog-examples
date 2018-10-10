Inspectpack DuplicatesPlugin Examples
=====================================

Examples for `DuplicatesPlugin` blog post.

We provide the following scenarios for bundles:

- `new-webpack`
    - `new-npm-flattened`
    - `new-npm-unflattened`: Same versions of a lib cannot be flattened
    - `old-npm`
- `old-webpack`
    - `new-npm-flattened`
    - `new-npm-unflattened`
    - `old-npm`

## Install

```sh
$ yarn
$ cd scenarios/old-webpack && yarn && cd ../..
$ cd scenarios/new-webpack && yarn && cd ../..
```

## Build

```sh
$ yarn build
```

## Quality

```sh
$ yarn lint
```
