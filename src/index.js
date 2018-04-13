import PropTypes from 'prop-types';
import createClass from './create-class';
import sanitize from './sanitize';

export const ESI = createClass(
  'ESI',
  { src: PropTypes.string.isRequired },
  'src',
  ({ src }) => `<esi:include src="${sanitize(src)}" />`,
);

export const SSI = createClass(
  'SSI',
  { virtual: PropTypes.string.isRequired },
  'virtual',
  ({ virtual }) => `<!--# include virtual="${sanitize(virtual)}" -->`,
);
