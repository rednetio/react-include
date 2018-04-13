# Contributing

We are open to any contributions made by the community. Here’s how you can help
us while developping on `react-include`.

## Reporting issues

Don’t forget to search the [issue tracker][tracker] before opening up an issue.

[tracker]: https://github.com/rednetio/react-include/issues

### Bugs and improvement

We use the issue tracker to keep track of bugs and improvements, including the
source code, the tests and the documentation. We encourage you to open issues
to discuss bugs and improvements before creating a pull request. Other
contributors might work on the same subject at the same time which would lead to
duplicate work.

### Getting help

If you cannot achieve what you want using `react-include`, we encourage you to
provide a [minimal, complete and verifiable example][mcve] in the form of a
public repository. Don’t forget to include a `package.json` file describing your
dependencies.

[mcve]: https://stackoverflow.com/help/mcve

## Development

Once you’ve found a bug or an improvement worth working on and you’ve expressed
your interest in working on it, fork then clone the repository.

```sh
git clone git@github.com:rednetio/react-include.git
```

### Code style

Code style is checked using [ESLint][eslint] and [Prettier][prettier]. General
guidelines:

* lines are limited to 80 characters,
* use `camelCase` for identifiers,
* use single quotes,
* use yoda conditions wherever you can.

You can use `yarn lint` or `npm run lint` to check code style.

[eslint]: https://eslint.org
[prettier]: https://prettier.io

### Testing

We strive for 100% coverage. We use [Mocha][mocha] and [Istanbul][istanbul] for
testing and coverage. Additionally, we import [Chai][chai]’s `expect` and
[Sinon][sinon] at a global level in tests. [Enzyme][enzyme] and [JSDOM][jsdom]
are used to test the components.

Use `yarn test` or `npm test` to run tests, and `yarn coverage` or
`npm run coverage` to see code coverage.

[mocha]: https://mochajs.org
[istanbul]: https://istanbul.js.org
[chai]: http://www.chaijs.com
[sinon]: http://sinonjs.org
[enzyme]: http://airbnb.io/enzyme/
[jsdom]: https://github.com/jsdom/jsdom

### Open a pull request

Once your bug fix or improvement is ready, open a pull request against `master`
and we will review it as soon as possible.

Thank you for contributing!
