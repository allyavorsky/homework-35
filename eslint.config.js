// eslint.config.js

import globals from "globals";
import tseslint from "typescript-eslint";
import eslintRecommended from "@eslint/js";

export default [
  // Базові рекомендовані правила Eslint
  eslintRecommended.configs.recommended,

  // Рекомендовані правила для TypeScript
  ...tseslint.configs.recommended,

  // Наші власні налаштування
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Додаємо глобальні змінні браузера
      },
    },
    rules: {
      // Тут ми можемо перевизначати або додавати правила
      "@typescript-eslint/no-unused-vars": "warn", // Попередження про невикористані змінні
      "no-console": "warn", // Попередження про використання console.log
    },
  },
];
