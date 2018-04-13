import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';

const createClass = (name, props, hrefProp, renderString) =>
  polyfill(
    class extends PureComponent {
      static displayName = name;

      static propTypes = {
        ...props,
        component: PropTypes.string.isRequired,
      };

      static defaultProps = {
        component: 'div',
      };

      state = {};

      componentDidMount() {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', this.props[hrefProp]);
        xhr.onload = () => this.setState({ text: xhr.responseText });
        this.setState({ xhr });
      }

      componentWillUnmount() {
        const { xhr } = this.state;

        if (XMLHttpRequest.DONE !== xhr.readyState) {
          xhr.abort();
        }
      }

      render() {
        const { text } = this.state;
        const {
          component: Component,
          /* eslint-disable-next-line no-unused-vars */
          [hrefProp]: href,
          ...props
        } = this.props;

        return (
          <Component
            {...props}
            dangerouslySetInnerHTML={{
              __html:
                'string' === typeof text ? text : renderString(this.props),
            }}
          />
        );
      }
    },
  );

export default createClass;
