module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "plugin:storybook/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "react/no-unescaped-entities": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "import/extensions": "off",
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "import/no-extraneous-dependencies": "off",
    "import/no-import-module-exports": "off",
    "import/no-unresolved": "off",
    "jsx-a11y/anchor-has-content": "off",
    "react/button-has-type": "off",
    "no-shadow": "off",
    "arrow-body-style": "off",
    "no-undef": "off",
    "no-unused-vars": "warn",
    "spaced-comment": "off",
    "react/jsx-no-useless-fragment": "off",
    "prefer-destructuring": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
  },
}
