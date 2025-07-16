import globals from "globals";
import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      "react-refresh/only-export-components": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "no-unsafe-finally": "off",
      "no-unused-vars": "off",
      "react/jsx-key": "off",
      "react-hooks/rules-of-hooks": "error", // ativando regra de hooks
      "react-hooks/exhaustive-deps": "warn", // ativando aviso de deps no useEffect
      "no-undef": "error",
    },
  },
];
