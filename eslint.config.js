import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import globals from 'globals'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      // Allow console.log/error for server logging
      'no-console': 'off',

      // Warn on unused variables, but ignore parameters or variables starting with '_' (like _next in Express error middleware)
      'no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],

      // Keep undefined variables as errors to prevent runtime ReferenceError crashes
      'no-undef': 'error',

      // Forces to use strict equality
      eqeqeq: 'error',

      // Flags 'let' variables if they're never reassigned
      'prefer-const': 'warn',

      // Bans old 'var' keyword
      'no-var': 'error',
    },
  },
])
