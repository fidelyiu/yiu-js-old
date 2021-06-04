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
                sourcemap: true,
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
            nodeResolve(),
            typescript(),
            babel({ babelHelpers: 'bundled' }),
        ],
        output: [
            // 打包器
            {
                file: `dist/${fileName}.esm.js`,
                format: 'esm',
                exports: 'named',
            },
            // Node
            {
                file: `dist/${fileName}.cjs.js`,
                format: 'cjs',
                exports: 'named',
            },
        ],
    },
]
