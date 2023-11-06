import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    outDir: "out",
    format: ["cjs", "esm"],
    splitting: false,
    sourcemap: true,
    clean: true,
    treeshake: true,
    dts: true,
    minify: false,
});
