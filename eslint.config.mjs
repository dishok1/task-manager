import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
// 1. Імпортуємо сторонні конфіги (наприклад, для вимкнення конфліктів з Prettier)
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  // Замість extends: ["eslint:recommended"]
  js.configs.recommended,

  // Замість extends: ["prettier"] (просто додаємо наступним елементом у масив)
  eslintConfigPrettier,

  // Ваші власні налаштування проєкту
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': 'error',
      'no-console': 'off', // Ваші правила
    },
  },
]);
