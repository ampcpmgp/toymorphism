// rollup.config.js
import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import sveld from "sveld";

export default {
  input: "index.js",
  output: {
    format: "es",
    file: "dist/index.mjs",
  },
  plugins: [
    svelte({ emitCss: false }),
    resolve(),
    commonjs(),
    sveld({
      typesOptions: {
        outDir: "dist/types",
      },
    }),
  ],
};
