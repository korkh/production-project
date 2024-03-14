import babelRemovePropsPlugin from "../../babel/babelRemovePropsPlugin";
import { BuildOptions } from "../types/config";

interface BuilDBabelLoaderProps extends BuildOptions {
  isTSX?: boolean; //will divide logic when working with tsx or ts files
}

export function buildBabelLoader({ isDev, isTSX }: BuilDBabelLoaderProps) {
  const isProd = !isDev;
  return {
    test: isTSX ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        cacheDirectory: true,
        presets: ["@babel/preset-env"],
        plugins: [
          [
            "@babel/plugin-transform-typescript",
            {
              isTSX,
            },
          ],
          "@babel/plugin-transform-runtime",
          //our own plugin
          isTSX &&
            isProd && [babelRemovePropsPlugin, { props: ["data-testid"] }],
          isDev && require.resolve("react-refresh/babel"),
        ].filter(Boolean),
      },
    },
  };
}
