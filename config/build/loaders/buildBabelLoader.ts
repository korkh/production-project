import babelRemovePropsPlugin from "../../babel/babelRemovePropsPlugin";
import { BuildOptions } from "../types/config";

interface BuilDBabelLoaderProps extends BuildOptions {
  isTSX?: boolean; //will divide logic when working with tsx or ts files
}

export function buildBabelLoader({ isDev, isTSX }: BuilDBabelLoaderProps) {
  return {
    test: isTSX ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: [
          // [
          //   "i18next-extract",
          //   {
          //     locales: ["en", "no"],
          //     keyAsDefaultValue: true,
          //   },
          // ],
          [
            "@babel/plugin-transform-typescript",
            {
              isTSX,
            },
          ],
          "@babel/plugin-transform-runtime",
          //our own plugin
          isTSX && [babelRemovePropsPlugin, { props: ["data-testid"] }],
          isDev && require.resolve("react-refresh/babel"),
        ].filter(Boolean),
      },
    },
  };
}
