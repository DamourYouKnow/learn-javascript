import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import {uglify} from 'rollup-plugin-uglify';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default function(config) {
    const prod = config.prod ? true : false;
    console.log(`Building ${prod ? 'prod' : 'dev'}`);

    return {
        input: './src/client/app.ts',
        plugins: [
            resolve({extensions}),
            typescript({
                tsconfigOverride: {
                    compilerOptions: {
                        sourceMap: prod ? false : true,
                        module: 'es6'
                    }
                }
            }),
            commonjs(),
            ...(prod ? [uglify()] : [])
        ],
        output: {
            input: 'src/client/app.ts',
            file: 'public/scripts/app.js',
            format: 'iife',
            sourcemap: prod ? undefined : 'inline'
        },
    }
};