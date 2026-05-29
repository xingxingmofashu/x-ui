import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: 'node16',
  sourcemap: false,
  outDir: 'dist',
  entries: [
    'src/unplugin',
    {
      input: 'src/runtime/',
      outDir: `dist/runtime`,
      addRelativeDeclarationExtensions: true,
      ext: 'js',
      pattern: [
        '**',
        '!**/*.stories.{js,cts,mts,ts,jsx,tsx}', // ignore storybook files
        '!**/*.{spec,test}.{js,cts,mts,ts,jsx,tsx}' // ignore tests
      ],
      esbuild: {
        jsxImportSource: 'vue',
        jsx: 'automatic',
        jsxFactory: 'h'
      }
    },
    {
      input: 'src/theme/',
      outDir: `dist/theme`,
      addRelativeDeclarationExtensions: true
    }
  ],
  rollup: {
    esbuild: {
      target: 'esnext'
    },
    emitCJS: false,
    cjsBridge: false
  },
  externals: ['vue', 'vue-demi', 'tailwindcss']
})
