---
id: getting-started-overview
title: Getting Started with single-spa
sidebar_label: Overview
---

## A javascript metaframework

Build micro frontends that coexist and can each be written with their own framework. This allows you to:

- [Use multiple frameworks](ecosystem.md#help-for-frameworks) on the same page [without refreshing the page](building-applications.md)
  ([React](ecosystem-react.md), [AngularJS](ecosystem-angularjs.md), [Angular](ecosystem-angular.md), [Ember](ecosystem-ember.md), or whatever you're using)
- Write code using a new framework, without rewriting your existing app
- Lazy load code for improved initial load time.

## Demo and examples

A [live demo](https://single-spa.surge.sh) is available and the source code for that demo is available in the [single-spa-examples](https://github.com/CanopyTax/single-spa-examples) repository.

Also, you can check out [a simple webpack starter project](https://github.com/joeldenning/simple-single-spa-webpack-example) which is simpler and hopefully easier to get started with.

## Architectural Overview

Single-spa takes inspiration from React component lifecycles by applying lifecycles to entire applications.
It started out of a desire to use React + react-router instead of being forever stuck with our AngularJS + ui-router application, but now single-spa supports almost any framework coexisting with any other. Since Javascript is notorious for the short-life of its many frameworks, we decided to make it easy to use whichever frameworks you want.

Apps built with single-spa are made up of the following pieces:

1. Many [applications](building-applications.md), each of which is sort of like an entire SPA itself. Applications respond to url routing events and must know how to bootstrap, mount, and unmount themselves from the DOM. The main difference between a SPA and an application is that applications must coexist together and do not each have their own html page.
  For example, your React or Angular applications are applications which are either active or dormant. When active, they listen to url routing events and put content on the DOM. When dormant, they do not listen to url routing events and are totally removed from the DOM.
2. A [single-spa-config](single-spa-config.md). The single-spa-config is the html page, plus the javascript that registers applications with single-spa. Each application is registered with three things:
    1. A name
    2. A function to load the application's code
    3. A function that determines when the application is active/dormant.

## How hard will it be to use single-spa?

single-spa works with es5, es6+, typescript, webpack, systemjs, gulp, grunt, bower, ember-cli, or really any build system you can think of. You can npm install it, jspm install it, or even just use a `<script>` tag if you prefer. If you're not starting your application from scratch, you'll have to [migrate your SPA](migrating-existing-spas.md) to become a single-spa application.

* [React - Migrating to single-spa](migrating-react-tutorial.md)
* [AngularJS - Migrating to single-spa](migrating-angularJS-tutorial.md)

single-spa works in Chrome, Firefox, Safari, IE11, and Edge.

## Isn't single-spa sort of a redundant name?

Yep

## Documentation

The documentation is divided into several sections:

* [Getting Started](getting-started-overview.md)
* [Single-spa Applications](building-applications.md)
* [Single-spa Parcels](parcels-overview.md)
* [Examples](examples.md)
* [Ecosystem](ecosystem.md)
* [Contributing Guide](contributing-overview.md)
* [Blog](https://single-spa.js.org/blog/)
* [Where to Get Support](https://single-spa.js.org/en/help.html)

You can help improve the single-spa website by sending pull requests to [this repository](https://github.com/CanopyTax/single-spa.js.org).

## Simple Usage

For a full example, check out [this simple webpack example](https://github.com/joeldenning/simple-single-spa-webpack-example) or [this starting from scratch tutorial](starting-from-scratch.md).

To create a single-spa application, you will need to do three things:

1. Create an html file:

```html
<html>
<body>
	<script src="single-spa-config.js"></script>
</body>
</html>
```

2. Create a single-spa-config. Check out the [docs](single-spa-config.md) for more detail.

```js
// single-spa-config.js
import * as singleSpa from 'single-spa';

const appName = 'app1';

/* The loading function is a function that returns a promise that resolves with the javascript application module.
 * The purpose of it is to facilitate lazy loading -- single-spa will not download the code for a application until it needs to.
 * In this example, import() is supported in webpack and returns a Promise, but single-spa works with any loading function that returns a Promise.
 */
const loadingFunction = () => import('./app1/app1.js');

/* Single-spa does some top-level routing to determine which application is active for any url. You can implement this routing any way you'd like.
 * One useful convention might be to prefix the url with the name of the app that is active, to keep your top-level routing simple.
 */
const activityFunction = location => location.pathname.startsWith('/app1');

singleSpa.registerApplication(appName, loadingFunction, activityFunction);
singleSpa.start();
```

3. Create an application. Check out the [docs](building-applications.md) for more detail.

```js
//app1.js

let domEl;

export function bootstrap(props) {
	return Promise
		.resolve()
		.then(() => {
			domEl = document.createElement('div');
			domEl.id = 'app1';
			document.body.appendChild(domEl);
		});
}

export function mount(props) {
	return Promise
		.resolve()
		.then(() => {
			// This is where you would normally use a framework to mount some ui to the dom. See https://single-spa.js.org/docs/ecosystem.html.
			domEl.textContent = 'App 1 is mounted!'
		});
}

export function unmount(props) {
	return Promise
		.resolve()
		.then(() => {
			// This is normally where you would tell the framework to unmount the ui from the dom. See https://single-spa.js.org/docs/ecosystem.html
			domEl.textContent = '';
		})
}
```

## Project roadmap

We're trying out github's Projects feature ([here](https://github.com/CanopyTax/single-spa/projects)) and are keeping it up-to-date with the fancy things in the works for single-spa.

## API

See [single-spa api](api.md) and [application api](building-applications.md#application-lifecycle).

## Contributing

The main purpose of this repository is to continue to evolve single-spa, making it better and easier to use. Development of single-spa, and the [single-spa ecosystem](ecosystem.md) happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving single-spa.

### [Code of Conduct](CODE_OF_CONDUCT.md)

Single-spa has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

### [Contributing Guide](contributing-overview.md)

Read our [contributing guide](https://reactjs.org/contributing/how-to-contribute.html) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to single-spa.

## Who's Using This?

Please submit a P.R. to [this section](https://github.com/CanopyTax/single-spa.js.org/blob/master/docs/getting-started-overview.md) if you start using single-spa.

- [CanopyTax](https://www.canopytax.com)
- [Dealer Socket](https://dealersocket.com/)
- [Beamery](https://beamery.com/)
