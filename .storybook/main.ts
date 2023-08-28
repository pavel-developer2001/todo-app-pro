import path from "path"
import type { StorybookConfig } from "@storybook/react-webpack5"
import MiniCssExtractPlugin from "mini-css-extract-plugin"

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    config.plugins?.push(new MiniCssExtractPlugin())
    config.module?.rules?.push({
      test: /\.(s[ac]|c)ss$/i,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader",
        "postcss-loader",
      ],
    })
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@": path.resolve(__dirname, "../src"),
      }
    }
    return config
  },
}
export default config
