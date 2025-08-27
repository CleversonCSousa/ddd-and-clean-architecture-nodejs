import js from "@eslint/js";
import globals from "globals";
import tseslint, { Config } from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.node },
    rules: {
      "prefer-const": ["error"],
      "semi": ["error"],
      "quotes": ["error", "double"]
    }

  },
  tseslint.configs.recommended, {}
]) satisfies Config;
