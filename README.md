# ember-octane-test

This repo contains an example which shows two issues with Ember Octane. 

1) Properties on nested objects don't update in the template when they are updated
2) Updating a value that is passed as an argument to a glimmer component results in an error except with exactly the right versions 
   of `@glimmer/component` and `ember-source`:

```
component-manager.js:41 Uncaught (in promise) TypeError: 'ownKeys' on proxy: trap returned extra keys but proxy target is non-extensible
    at Function.freeze (<anonymous>)
    at GlimmerComponentManager.updateComponent (component-manager.js:41)
    at CustomComponentManager.update (index.js:6148)
    at UpdateComponentOpcode.evaluate (runtime.js:1859)
    at UpdatingVM.execute (runtime.js:4045)
    at RenderResult.rerender (runtime.js:4342)
    at RootState.render (index.js:5208)
    at TransactionRunner.runInTransaction (index.js:721)
    at runInTransaction (index.js:856)
    at InteractiveRenderer._renderRoots (index.js:5499)
```


The regression in `ember source happened in [this range](https://github.com/emberjs/ember.js/compare/755ea5dbe65d91e0d650707da740aa6900d0a755...eb5226a230b7066608e3cd1c0045917453ec9572)
of commits (as you can see if you look through the commit history on this repo).

------

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-octane-test`
* `yarn install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `yarn lint:hbs`
* `yarn lint:js`
* `yarn lint:js --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
