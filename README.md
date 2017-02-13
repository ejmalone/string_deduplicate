String Deduplicator

See the live code at http://code.ericmalone.net/string\_deduplicate/


# Overview

This is an example of progress I've made in Node.js development with 
modern packaging, testing, and data flow.
   
This JavaScript project in Node.js uses React to build the web interface, 
utilizing Redux to manage state of the application. The Redux Thunk
middleware is used in conjunction with Redux to allow asynchronous execution,
namely to asynchronously generate the list of 100,000 emails.

The code is written in ES6 syntax via Babel, and packaged with the webpack 
module bundler.

Tests are written in the Mocha framework with Chai assertions.


## Organization

Relevant files and directories, not a complete list.

    .babelrc                used by mocha to determine Babel configuration
    build/                  compiled package for the web, via webpack
    index.html              web ux for the algorithm
    package.json            configuration for dependencies, running tests, etc.
    src/     
       actions.js           Redux actions used by containers
       components/          React components to build the UX
       containers/          Redux containers built from components
       lib/
          deduplicate.js    our actual algorithm
          generate.js       generates a list of emails with 50% duplicates
          index.js          React application entry point
       reducers.js          Redux action reducers used by the store 
    test/                   Mocha tests
    webpack.config.js       instructs webpack on how to build the bundle


# Execution

## Building the Application

1. enter the directory
   `cd string_deduplicate`
1. bring in the npm packages, check for errors before proceeding
   `npm install`
1. build the webpack bundle either from globally installed webpack
   `webpack`
   or from the node\_modules directory
   `node_modules/.bin/webpack`
1. open the index.html file in your web browser


## Running Tests

All tests can be run at once, or individual test sets can be selected via
package.json and Mocha config. Execution:

* all tests
   `npm test`
* algorithm validation
   `npm run test-deduplicate-validation`
* algorithm duration
   `npm run test-deduplicate-runtime`
