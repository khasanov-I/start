module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: ['xo', 'plugin:react/recommended', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
	overrides: [
		{
			files: ['**/src/**/*.test.{ts,tsx}'],
			rules: {
				'i18next/no-literal-string': 'off',
			},
		},
		{
			files: ['**/src/**/*.{ts,tsx}'],
			rules: {
				'kh-i-start-plugin/path-checker': ['error', {
					alias: '@',
				}],
				'kh-i-start-plugin/public-api-imports': ['error', {
					alias: '@',
					testFilesPatterns: ['**/*.test.*', '**/*.stories.*', '**/ReduxDecorator.tsx'],
				}],
				'kh-i-start-plugin/layer-imports': ['error', {
					alias: '@',
					ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
				}],
			},
		},
		{
			env: {
				node: true,
			},
			files: [
				'.eslintrc.{js,cjs}',
			],
			parserOptions: {
				sourceType: 'script',
			},

		},
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
			rules: {
				indent: ['error', 4, {SwitchCase: 1}],
				'@typescript-eslint/indent': [2, 4],
				'@typescript-eslint/naming-convention': 'warn',
				'react/react-in-jsx-scope': 'off',
				// 'i18next/no-literal-string': ['warn', {markupOnly: true, ignoreAttribute: ['data-testid']}],
				'i18next/no-literal-string': 'off',
				'react-hooks/rules-of-hooks': 'error',
				'react-hooks/exhaustive-deps': 'error',
				'react/display-name': 'off',
				'no-unsafe-optional-chaining': 'off',
				'unused-imports/no-unused-imports': 'error',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'i18next',
		'react-hooks',
		'kh-i-start-plugin',
		'unused-imports',
	],
	rules: {
	},
	globals: {
		__IS_DEV__: true,
		__API__: true,
		__PROJECT__: true,
	},
};
