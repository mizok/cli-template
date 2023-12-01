// esbuild.config.ts
import { BuildOptions, build } from 'esbuild'

const config: BuildOptions = {
  entryPoints: ['src/main.ts'],
  bundle: true,
  minify: true,
  outfile: 'dist/main.js',
  tsconfig: './tsconfig.json',
}

build(config)
