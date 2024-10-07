import { defineConfig, rspack } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginEjs } from 'rsbuild-plugin-ejs';
import { pluginNodePolyfill } from '@rsbuild/plugin-node-polyfill';

export default defineConfig({
  plugins: [pluginEjs(), pluginNodePolyfill(), pluginReact()],
  output: {
    cleanDistPath: true,
    distPath: {
      root: 'build'
    }
  },
  html: {
    template: './src/targets/browser/index.ejs',
    title: 'Cozy Todos'
  },
  performance: {
    chunkSplit: {
      forceSplitting: {
        cozy: /node_modules[\\/]cozy*/,
      },
    }
  },
  source: {
    entry: {
      index: './src/targets/browser/index.tsx'
    }
  },
  tools: {
    rspack: {
      module: {
        rules: [
          { test: /\.webapp$/i, type: "json" }
        ]
      },
      plugins: [
        new rspack.CopyRspackPlugin({
          patterns: [
            {
              from: 'manifest.webapp',
            },
            {
              from: 'README.md'
            },
            {
              from: 'LICENSE'
            }
          ],
        })
      ]
    }
  }
});
