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

### Before run the server there's a prerequirement

* In order to be able to use the AusPostAPI is need to setup the AUTH_KEY as an enviroment variable.

To do that simply add a file called .env to the root's project and set the key to the variable.

Example: AUTH_KEY='Here goes your api key'

### Now we can run the application

For this action the application is using [concurrently](https://www.npmjs.com/package/concurrently).

Run:

```shell
npm run dev
```
This command allows the user to run the server and client in one script only.

After this command simply open your browser on [this path](http://localhost/1234)
