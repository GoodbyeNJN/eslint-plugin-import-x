import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['src/index.ts'],
    outDir: 'lib',
    format: ['cjs'],
    // dts: true,
    shims: true,
    sourcemap: false,
    splitting: true,
    clean: true,
    treeshake: true,
    bundle: true,
  }
]);
