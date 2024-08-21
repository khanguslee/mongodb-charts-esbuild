const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["src/index.tsx"],
    bundle: true,
    outfile: "dist/bundle.js",
    minify: true,
    sourcemap: true,
    loader: { ".tsx": "tsx" },
    define: { "process.env.NODE_ENV": '"production"' },
  })
  .catch(() => process.exit(1));
