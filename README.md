# NestJs default app with Vitest and PactumJS
Standard Nest project created with the CLI, where default packages: Jest and supertest are replaced respectively by [Vitest](https://vitest.dev/) and [Pactum](https://pactumjs.github.io/).

## Description

Replacing Jest by Vitest is a workaround for solving the issue [Jest is 3x slower on all windows machines](https://github.com/facebook/jest/issues/7631)

This code is inspired from this blog post: <https://blog.logrocket.com/getting-started-with-nestjs-vite-esbuild/>

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# unit tests with watch mode enabled
$ npm run test:watch

# unit tests with watch mode and Vitest UI enabled 
$ npm run test:watch:ui

# e2e tests
$ npm run test:e2e

# e2e tests
$ npm run test:e2e:ui

# test coverage
$ npm run test:cov
```
> More info about VitestUI [here](https://vitest.dev/guide/ui.html)

