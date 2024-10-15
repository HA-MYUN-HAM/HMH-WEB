import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  {
    extends: [
      ...tseslint.configs.recommended,
      react.configs.flat.recommended,
    ],
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    settings: {
      react:{
        version: 'detect',
      }
    },
    plugins: {
      'react': react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'import': importPlugin,
      'stylistic': stylistic
    },
    rules: {
      ...react.configs.flat.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope':'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-var':'error',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'never',
        },
      ],
      'stylistic/semi': ['error', 'always'],
      'stylistic/quotes': ['error', 'single'],
      'stylistic/eol-last': ['error', 'always'],
      'stylistic/no-multi-spaces': 'error',
      'stylistic/indent': ['error', 2, { 'SwitchCase': 1 }],
      'stylistic/jsx-curly-spacing': [1, { 'when': 'never' }],
      'stylistic/object-curly-spacing': ['error', 'always'],
      'stylistic/comma-spacing': ['error', { 'before': false, 'after': true }],
      'stylistic/max-len': ['warn', 
        { 'code': 100, 'tabWidth': 2, 'ignoreUrls': true, 'ignoreTemplateLiterals': true }],
      'stylistic/padding-line-between-statements': ['error', 
        { 'blankLine': 'always', 'prev': '*', 'next': 'return' }],
    },
  },
);
