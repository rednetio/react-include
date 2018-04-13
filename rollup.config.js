import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

const env = process.env.NODE_ENV;

const config = {
  input: 'src/index.js',
  external: ['prop-types', 'react-lifecycles-compat', 'react'],
  plugins: [],
};

if ('es' === env || 'cjs' === env) {
  config.output = { format: env };

  config.plugins.push(
    babel({
      include: 'src/*',
      plugins: ['external-helpers'],
    }),
  );
}

if ('development' === env || 'production' === env) {
  config.output = {
    format: 'umd',
    name: 'ReactInclude',
    globals: {
      'react': 'React',
      'prop-types': 'PropTypes',
      'react-lifecycles-compat': 'reactLifecyclesCompat',
    }
  };

  config.plugins.push(
    babel({
      include: 'src/*',
      plugins: ['external-helpers'],
    }),
    commonjs(),
  );
}

if ('production' === env) {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
        unsafe_proto: true,
        pure_funcs: ['classCallCheck', 'Object.defineProperty'],
      },
    }),
  );
}

export default config;
