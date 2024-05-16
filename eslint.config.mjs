import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

const options = [
  {
    languageOptions: { globals: globals.browser },
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended',
    ],
    overrides: [
      {
        env: {
          node: true,
        },
        files: ['.eslintrc.js'],
        parserOptions: {
          sourceType: 'script',
        },
      },
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'modue',
    },
    plugins: ['react'],
    rules: {
      'prettier/prettier': ['warn', { endOfLine: 'auto' }],
    },
  },
  pluginJs.configs.recommended,
  pluginReactConfig,
];

export default options;
