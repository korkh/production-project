import webpack, { DefinePlugin, RuleSetRule } from "webpack";
import path from "path";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { BuildPaths } from "../build/types/config";

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src"), // for absolute path
  };
  if (config.resolve && config.resolve.extensions) {
    config.resolve.modules = [paths.src, "node_modules"];
    config.resolve.extensions.push(".ts", ".tsx");
  }

  if (config.module && Array.isArray(config.module.rules)) {
    config.module.rules = (config.module.rules as RuleSetRule[]).map((rule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
    });

    // no need import React from 'react'
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        babelrc: false,
        presets: [
          "@babel/preset-typescript",
          [
            "@babel/preset-react",
            {
              runtime: "automatic",
            },
          ],
        ],
        plugins: [],
      },
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    // Check analogy in buildWebpackConfig.ts module: {
    //    rules: buildLoaders(options),
    // },  => module.rules
    config.module.rules.push(buildCssLoader(true)); // isDev: true (story book just in dev mode)
  }

  if (config.plugins) {
    config.plugins.push(
      new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(""),
        __PROJECT__: JSON.stringify("storybook"),
      })
    ); // Here we can use global field, __IS__DEV__ using during store creation do define dev mode
  }

  return config;
};

// https://www.codecada.com/react/16/how-to-set-up-storybook-v6-with-react-17
