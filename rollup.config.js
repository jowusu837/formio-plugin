import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'default'
    },
    {
      file: 'dist/index.esm.js',
      format: 'es',
      sourcemap: true
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'FormioPlugin',
      sourcemap: true,
      globals: {
        'formiojs': 'Formio'
      }
    }
  ],
  plugins: [
    resolve({
      preferBuiltins: true
    }),
    commonjs()
  ],
  external: ['formiojs']
}; 