const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["src/index.tsx"],
    bundle: true,
    // Compile to CJS
    // outfile: "dist/bundle.cjs.js",
    // format: "cjs",
    // Compile to ESM
    outfile: "dist/bundle.esm.js",
    format: "esm",
    minify: true,
    sourcemap: true,
    loader: { ".tsx": "tsx" },
    define: { "process.env.NODE_ENV": '"production"' },
  })
  .catch(() => process.exit(1));
