import { terser } from 'rollup-plugin-terser'
import typescript from '@rollup/plugin-typescript'
import nodeResolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'

const input = ['src/index.ts']
const fileName = 'yiu'

export default [
    {
        input,
        plugins: [
            nodeResolve(),
            commonjs(),
            typescript(),
            babel({ babelHelpers: 'bundled' }),
        ],
        output: [
            // ↓浏览器
            {
                file: `dist/${fileName}.iife.js`,
                format: 'iife',
                name: 'Yiu',
                esModule: false,
                exports: 'named',
            },
            // ↓浏览器压缩版
            {
                file: `dist/${fileName}.iife.min.js`,
                format: 'iife',
                name: 'Yiu',
                esModule: false,
                exports: 'named',
                sourcemap: true,
                plugins: [terser()],
            },
        ],
    },
    {
        input,
        plugins: [
            commonjs(),
            typescript(),
            babel({ babelHelpers: 'bundled' }),
        ],
        // ES和Node直接在依赖中，不用重复打包了
        // external: ['lodash-es'],
        output: [
            // 打包器
            {
                file: `dist/${fileName}.esm.js`,
                format: 'esm',
                exports: 'named',
            },
            // 打包器压缩版
            {
                file: `dist/${fileName}.esm.min.js`,
                format: 'esm',
                exports: 'named',
                sourcemap: true,
                plugins: [terser()],
            },
            // Node
            {
                file: `dist/${fileName}.cjs.js`,
                format: 'cjs',
                exports: 'named',
            },
            // Node压缩版
            {
                file: `dist/${fileName}.cjs.min.js`,
                format: 'cjs',
                exports: 'named',
                sourcemap: true,
                plugins: [terser()],
            },
        ],
    },
]
