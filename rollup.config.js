import { terser } from 'rollup-plugin-terser'
import typescript from '@rollup/plugin-typescript'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

const input = ['src/index.ts']
const fileName = 'yiu'
const iifeName = 'Yiu'

export default [
    {
        input,
        plugins: [
            commonjs(),
            nodeResolve({ browser: true }),
            typescript(),
        ],
        output: [
            // ↓浏览器
            {
                file: `dist/${fileName}.iife.js`,
                format: 'iife',
                name: iifeName,
                esModule: false,
                exports: 'named',
            },
            // ↓浏览器压缩版
            {
                file: `dist/${fileName}.iife.min.js`,
                format: 'iife',
                name: iifeName,
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
            nodeResolve({ browser: true }),
            typescript(),
        ],
        external: ['moment'],
        output: [
            // ↓浏览器无lib
            {
                file: `dist/${fileName}.onlib.iife.js`,
                format: 'iife',
                name: iifeName,
                esModule: false,
                exports: 'named',
                globals: {
                    'moment': 'moment',
                },
            },
            // ↓浏览器无lib压缩版
            {
                file: `dist/${fileName}.onlib.iife.min.js`,
                format: 'iife',
                name: iifeName,
                esModule: false,
                exports: 'named',
                globals: {
                    'moment': 'moment',
                },
                sourcemap: true,
                plugins: [terser()],
            },
        ],
    },
    {
        input,
        plugins: [
            commonjs(),
            nodeResolve({ browser: true }),
            typescript(),
        ],
        external: ['moment'],
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
                plugins: [terser()],
            },
            {
                file: `dist/${fileName}.cjs`,
                format: 'cjs',
                exports: 'named',
            },
            // Node压缩版
            {
                file: `dist/${fileName}.min.cjs`,
                format: 'cjs',
                exports: 'named',
                plugins: [terser()],
            },
        ],
    },
]
