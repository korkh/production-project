import webpack from "webpack";
import { buildBabelLoader } from "./loaders/buildBabelLoader";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;
  const babelLoader = buildBabelLoader(options);

  const cssLoader = buildCssLoader(isDev);

  // Если не используем тайпскрипт - нужен babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
    // options: { transpileOnly: true }, // ts errors will not ruin build
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  return [fileLoader, babelLoader, svgLoader, typescriptLoader, cssLoader];
}
