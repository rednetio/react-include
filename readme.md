# react-include

[Server Side Include][SSI] / [Edge Side Include][ESI] components for isomorphic
rendering with React.

[SSI]: https://en.wikipedia.org/wiki/Server_Side_Includes
[ESI]: https://en.wikipedia.org/wiki/Edge_Side_Includes


![](https://img.shields.io/travis/rednetio/react-include.svg)
![](https://img.shields.io/coveralls/github/rednetio/react-include.svg)

![](https://img.shields.io/npm/l/@rednetio/react-include.svg)
![](https://img.shields.io/npm/v/@rednetio/react-include.svg)
![](https://img.shields.io/npm/dt/@rednetio/react-include.svg)

![](https://img.shields.io/github/issues-raw/rednetio/react-include.svg)
![](https://img.shields.io/github/issues-pr-raw/rednetio/react-include.svg)
![](https://img.shields.io/github/contributors/rednetio/react-include.svg)
![](https://img.shields.io/github/commit-activity/y/rednetio/react-include.svg)

## Why?

You may want to pre-render HTML pages to serve them / store on your CDN, but
need some dynamic content anyway. Time to use some Server Side Includes / Edge
Side Includes! This library enables you to use them from React.

On the client (in your browser), an AJAX call will be made to emulate the
inclusion.

## Install

Using yarn:

```
yarn add @rednetio/react-include
```

Using npm:

```
npm intsall @rednetio/react-include
```

## Server Side Include

Server Side Include are supported by Apache, LiteSpeed, nginx, lighttpd and IIS.
They render as an HTML comment which take this form: `<!--# include ... -->`.

### Usage

```js
import { SSI } from 'react-include';

export default () => (
  <main>
    <h1>A random quote</h1>
    <SSI virtual="/random/quote" />
  </main>
);
```

## Edge Side Include

Edge Side Include are implemented by Akamai, Fastly, Varnish, Squid and Mongrel
ESI. They render as an HTML tag which takes this form: `<esi:include ... />`.

### Usage

```js
import { ESI } from 'react-include';

export default () => (
  <main>
    <h1>A random quote</h1>
    <ESI src="/random/quote" />
  </main>
);
```

## Properties

| `virtual` | `string` | _(required)_ SSI: the URL you want to include |
| `src` | `string` | _(required)_ ESI: the URL you want to include |
| `component` | `string` | The wrapper component. Defaults to `'div'` |
| _any other_ | _any_ | Any other prop will be passed to the wrapper |
