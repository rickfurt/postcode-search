# Postcode Search

## Getting started

After [cloning this repository](https://help.github.com/en/articles/cloning-a-repository), run:

```shell
npm install
```

## Linting

Using [Prettier](https://prettier.io/) and  [Eslint](https://eslint.org/) to format and standardise code style.

### How to run?

```shell
npm run lint
```

### How to fix?

```shell
npm run lint:fix
```

## Testing

Using [Jest](https://jestjs.io/) as testing framework.

### How to run?

```shell
npm test
```

### How to continuously run?

```shell
npm run test:watch
```
## Running application Server + Client simultaneously

For this action the application is using [concurrently](https://www.npmjs.com/package/concurrently).

Run:

```shell
npm run dev
```
This command allows the user to run server and client in one script only.

althought the same result can be expected running

(Terminal 1)
```shell
npm run server
```
(Terminal 2)
```shell
npm run client
```