// rollup.config.js
import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import sveld from "sveld";
import copy from "rollup-plugin-copy";

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
    copy({
      targets: [{ src: "types/**", dest: "dist/types/types" }],
    }),
  ],
};
