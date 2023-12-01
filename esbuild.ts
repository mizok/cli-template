// esbuild.config.ts
import { BuildOptions, build } from 'esbuild'
import copyfiles from 'copyfiles'
import { rimraf } from 'rimraf'

const config: BuildOptions = {
  entryPoints: ['src/main.ts'],
  bundle: true,
  minify: true,
  outfile: 'dist/main.js',
  platform: 'node',
  tsconfig: './tsconfig.json',
}

build(config)
  .then(() => {
    return rimraf('./dist/locales')
  })
  .then(() => {
    copyfiles(['locales/*', 'dist'], { all: false }, () => {
      console.log('Locales files copied successfully!')
    })
  })
