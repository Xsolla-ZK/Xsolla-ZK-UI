import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';

export default tseslint.config(
  {
    // config with just ignores is the replacement for `.eslintignore`
    ignores: [
      `**/node_modules`,
      '.swc',
      '**/.*',
      '**/build',
      '**/dist',
      '**/*.(s[ac]ss|css)',
      'raw-icons',
      // 'tools',
      '**/tokens',
    ],
  },
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  {
    settings: {
      'import/resolver-next': createTypeScriptImportResolver({
        alwaysTryTypes: true,
        project: 'packages/*/tsconfig.json',
      }),
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        // allowDefaultProject: true,
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    extends: [prettierConfig],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      import: importPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
      '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
      '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_', ignoreRestSiblings: true },
      ],
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      '@typescript-eslint/restrict-template-expressions': 'off',
      // 'array-callback-return': 'error',
      'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: false }],
      // curly: ['error', 'multi-line'],
      // eqeqeq: ['error', 'always', { null: 'ignore' }],
      'import/first': 'error',
      'import/no-cycle': 'error',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'max-lines': ['error', 300],
      'no-console': ['warn', { allow: ['error', 'warn', 'info', 'table'] }],
      'no-extra-boolean-cast': ['error', { enforceForLogicalOperands: true }],
      'no-param-reassign': [
        'error',
        {
          props: true,
          ignorePropertyModificationsFor: ['acc'], // ignore acc for reduce
        },
      ],
      'no-restricted-globals': ['error', 'event', 'React'],
      'no-unneeded-ternary': ['error', { defaultAssignment: false }],
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': [
        'error',
        {
          functions: false,
          classes: true,
          variables: true,
          typedefs: false,
        },
      ],
      'no-useless-computed-key': 'error',
      'one-var': ['error', 'never'],
    },
  },
  {
    // disable type-aware linting on JS files
    files: ['**/*.?(m)js'],
    extends: [tseslint.configs.disableTypeChecked],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      '@typescript-eslint/no-unnecessary-type-assertion': 'off',
      '@typescript-eslint/prefer-optional-chain': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/consistent-type-exports': 'off',
      '@typescript-eslint/consistent-type-imports': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      'import/order': 'off',
    },
  },
);
