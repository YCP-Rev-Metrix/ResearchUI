<h1 align="center">RevMetrix Research Database UI</h1>

<p align="center">
    <img width="200" src="https://github.com/YCP-Rev-Metrix/Wiki/blob/main/static/images/logo.png">
</p>

## Purpose
This site is being developed in order to provide an easy-to-access collection of research data for Professor Hake's PhD research.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and run as Production build

```sh
npm install -g http-server # install server for Vue app to run on

npm run build # build the project for production

http-server dist --cors -p 8081 # run the server on port 8081 and allow CORS
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Nightwatch](https://nightwatchjs.org/)

```sh
# When using CI, the project must be built first.
npm run build

# Runs the end-to-end tests
npm run test:e2e

# Runs the tests only on Chrome
npm run test:e2e -- --env chrome

# Runs the tests of a specific file
npm run test:e2e -- tests/e2e/example.js

# Runs the tests in debug mode
npm run test:e2e -- --debug

```
    
### Run Headed Component Tests with [Nightwatch Component Testing](https://nightwatchjs.org/guide/component-testing/introduction.html)
  
```sh
npm run test:unit
npm run test:unit -- --headless # for headless testing
```
