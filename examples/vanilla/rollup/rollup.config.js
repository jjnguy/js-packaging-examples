import nodeResolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/main.js',
  output: {
    file: '../../../public/out.js',
    format: 'iife',
    sourcemap: 'inline'
  },
  plugins: [nodeResolve()]
};