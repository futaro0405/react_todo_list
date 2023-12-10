module.exports = {
  env: {
    browser: true
  },
  extends: [
    "react-app",
    "react-app/jest",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier"
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  ignorePatterns: ["dist"],
  plugins: ["@typescript-eslint", "react"],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "no-var": "error",
    "no-console": "error",
    "camelcase": ["error", { properties: "never" }],
    "semi": ["error", "always"],
    "import/prefer-default-export": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-vars": "warn",
    "react/jsx-uses-react": "warn"
  }
};
