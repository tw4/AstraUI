import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        sourcemap: false, // fix: Failed to parse source map warnings
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        sourcemap: false, // fix: Failed to parse source map warnings
      },
    ],
    plugins: [
      resolve({
        browser: true, // fix: Module not found: Error: Can't resolve 'stream'
      }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
