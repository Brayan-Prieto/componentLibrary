import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts"
import postcss from "rollup-plugin-postcss"

import packageJson from "./package.json" assert { type: "json" };

export default [{
    input:"src/index.ts",
    output: [
        {
            file:packageJson.module,
            format:"esm",
            sourcemap:true
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        typescript({tsconfig:"./tsconfig.json",  compilerOptions: { declaration: true, declarationDir:'dist/esm/types'  }}),
        postcss(),
    ]},
    {
    input:"src/index.ts",
    output: [
        {
            file:packageJson.main,
            format:"cjs",
            sourcemap:true
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        typescript({tsconfig:"./tsconfig.json",  compilerOptions: { declaration: true, declarationDir:'dist/cjs/types'  }}),    
        postcss(),
    ]},
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file:"dist/index.d.ts", format:"esm"}],
        plugins:[dts()],
        external:[/\.css$/],
    }
]