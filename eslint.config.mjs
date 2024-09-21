import globals from "globals";
import pluginJs from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin"; // Default import
import parser from "@typescript-eslint/parser"; // Correct import for the TypeScript parser
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: {
        AudioWorkletGlobalScope: 'readonly', // Ensure no leading/trailing whitespace
        ...globals.browser,
        ...globals.jest, // Add Jest globals
      },
      parser: parser, // Use the correct parser from typescript-eslint
      parserOptions: {
        ecmaVersion: 2020, // Specify the ECMAScript version
        sourceType: "module", // Allow the use of imports
        ecmaFeatures: {
          jsx: true, // Enable JSX support
        },
      },
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      '@typescript-eslint': tsPlugin, // Specify the plugin
    },
    rules: {
      // Add recommended TypeScript rules
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Turn off React in scope rule if using React 17+
      "no-undef": "error", // Ensure undefined variables are flagged
    },
  },
];
