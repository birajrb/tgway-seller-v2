module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
      globalReturn: false,
    },
    project: ["./tsconfig.json"],
    sourceType: "module",
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    // "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: [
    // "prettier",
    "simple-import-sort",
    // "import-newlines",
    "@typescript-eslint",
  ],
  rules: {
    strict: 1,

    "no-console": 0,

    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": 1,

    "no-use-before-define": 0,
    "@typescript-eslint/no-use-before-define": 1,

    // note you must disable the base rule as it can report incorrect errors
    "no-shadow": 0,
    "@typescript-eslint/no-shadow": ["error"],

    "prefer-destructuring": "warn",
    "function-paren-newline": ["warn", "consistent"],
    "object-curly-newline": [
      2,
      {
        ObjectExpression: { consistent: true },
        ObjectPattern: { consistent: true },
        ImportDeclaration: { consistent: true },
        ExportDeclaration: { consistent: true },
      },
    ],

    "import/extensions": ["off", "never"],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],

    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-explicit-any": "warn",

    /*
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        components: ["Link"],
        specialLink: ["to"],
      },
    ],
    */
    "jsx-a11y/label-has-for": "warn",

    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      "error",
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "react/prop-types": [
      1,
      { ignore: [], customValidators: [], skipUndeclared: false },
    ],
    "react/forbid-prop-types": [1],
    "react/destructuring-assignment": [
      1,
      "always",
      { ignoreClassFields: true },
    ],
    "react/sort-comp": [
      1,
      {
        order: [
          "static-methods",
          "constructor",
          "lifecycle",
          "everything-else",
          "render",
        ],
      },
    ],
    "react/no-unused-state": "warn",
    "react/jsx-props-no-spreading": 0,
    "react/require-default-props": [
      "warn",
      { ignoreFunctionalComponents: true },
    ],
    "react/default-props-match-prop-types": [
      "warn",
      {
        allowRequiredDefaults: true,
      },
    ],

    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",

    // "import-newlines/enforce": ["warn", 1],

    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // FIXME: Remove these later
    camelcase: "warn",
    "react/jsx-pascal-case": "warn",
    "react/button-has-type": "warn",
    "react/jsx-no-useless-fragment": "warn",
    "react/no-unescaped-entities": "warn",
    "jsx-a11y/click-events-have-key-events": "warn",
    "jsx-a11y/no-noninteractive-element-interactions": "warn",
    "jsx-a11y/no-static-element-interactions": "warn",
    "jsx-a11y/anchor-is-valid": "warn",
    "import/order": "warn",
    "import/prefer-default-export": "warn",
    "import/newline-after-import": "warn",
    "react/function-component-definition": "warn",
    "jsx-a11y/alt-text": "warn",
    "jsx-a11y/heading-has-content": "warn",
    "import/no-extraneous-dependencies": "warn",
    "import/no-absolute-path": "warn",
    "import/no-unresolved": "warn"
  },
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
      rules: {
        "simple-import-sort/imports": [
          "warn",
          {
            groups: [
              // side effect imports
              ["^\\u0000"],
              // packages `react` related packages come first
              ["^react", "^@?\\w"],
              // internal packages
              ["^#.+$"],
              // parent imports. Put `..` last
              // other relative imports. Put same-folder imports and `.` last
              [
                "^\\.\\.(?!/?$)",
                "^\\.\\./?$",
                "^\\./(?=.*/)(?!/?$)",
                "^\\.(?!/?$)",
                "^\\./?$",
              ],
              // style imports
              ["^.+\\.json$", "^.+\\.module.css$"],
            ],
          },
        ],
        "linebreak-style": ["off"], // Ignores line ending issues
        // Or make it platform-specific:
        "linebreak-style": ["error", process.platform === "win32" ? "windows" : "unix"],
        "import/prefer-default-export": "off",
      },
    },
  ],
  env: {
    es6: true,
    jest: true,
    browser: true,
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {},
    },
  },
};
