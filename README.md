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

## How to reproduce this repo from scratch

### Install NestJs and create an new project

```bash
npm i -g @nestjs/cli
nest new project-name
```

### Clean up

1. Remove dependencies:

    ```bash
    npm uninstall jest @types/jest ts-jest ts-loader ts-node
    ```

2. Clean up Jest config, in the `package.json` file. Delete ./test/jest.e2e.json

### Install Vitest

1. Install dependencies

    ```bash
    npm i vitest @vitest/ui  @swc/core unplugin-swc @vitest/coverage-c8-D
    ```

2. Create vite.config.ts at root
3. Create vitest.config.ts in ./test/ (this file depends on `vite.config.ts` file)

### Update tests

1. Add import statement in test files i.e. `import { describe, beforeAll, afterAll, it } from 'vitest';`
2. Update scripts in `package.json`

    ```json
    "test": "vitest run",
    "test:watch": "vitest",
    "test:watch:ui": "vitest --ui --api 5000",
    "test:cov": "vitest --coverage",
    "test:e2e": "vitest --config ./test/vitest.config.ts",
    "test:e2e:ui": "vitest --config ./test/vitest.config.ts --ui"
    ```

### For VsCode users

1. Install the extension: [Vitest](https://marketplace.visualstudio.com/items?itemName=ZixuanChen.vitest-explorer)
2. For debuging with breakpoints add this launch config:

    ```json
    {
    "version": "0.2.0",
    "configurations": [
        {
        "type": "node",
        "request": "launch",
        "name": "Debug Current Test File",
        "autoAttachChildProcesses": true,
        "skipFiles": ["<node_internals>/**", "**/node_modules/**"],
        "program": "${workspaceRoot}/node_modules/vitest/vitest.mjs",
        "args": ["run", "${relativeFile}"],
        "smartStep": true,
        "console": "integratedTerminal"
        }
    ]
    }
    ```

    >As mentionned in the configuration, it debugs the active test file.

### Running tests
1. With `npm` like `npm run test`
2. Using the VsCode `Vitest` extension

>Give a try to Vitest UI, with `npm run test:ui`
