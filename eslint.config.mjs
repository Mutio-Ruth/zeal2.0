//B:\mytestProjects\PatriciaConstructions\v2\panframltdv2\eslint.config.mjs
// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript"),
// ];

// export default eslintConfig;

// simplified eslint.config.mjs
import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";

export default [
  js.configs.recommended, // Use ESLint's recommended rules
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      // Add custom rules here
      "react/no-unescaped-entities": "off", // Example: Disable the unescaped entities rule
      "no-console": "warn",
      quotes: ["error", "single"],
      semi: ["error", "always"],
      indent: ["error", 2],
      "max-len": ["error", { code: 80 }],
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"], // Apply TypeScript-specific rules
    extends: ["plugin:@typescript-eslint/recommended"],
  },
];
