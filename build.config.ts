import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    {
      builder: 'mkdist',
      input: './src/',
      outDir: './dist/esm',
      declaration: true,
      pattern: ['**/*.ts', '!type_generators/**'],
    },
    {
      builder: 'mkdist',
      input: './src/',
      outDir: './dist/cjs',
      format: 'cjs',
      pattern: ['**/*.ts', '!type_generators/**']
    }
  ],
  clean: true,
  failOnWarn: false,
  externals: ['bs58', '@noble/curves', '@noble/hashes', '@noble/ciphers']
})
