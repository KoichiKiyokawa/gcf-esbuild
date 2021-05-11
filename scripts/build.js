const esbuild = require('esbuild')
const pkg = require('../package.json')
const glob = require('tiny-glob/sync')

esbuild.build({
  entryPoints: ['src/index.ts', ...glob('./src/controllers/**/*.ts')],
  bundle: true,
  platform: 'node',
  outdir: 'lib',
  target: 'node12',
  sourcemap: true,
  watch: process.argv[2] === '-watch',
  external: Object.keys(pkg.dependencies),
})
