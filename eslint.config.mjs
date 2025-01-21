import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
	{
		files: ['**/*.js', '**/*.ts', '**/*.tsx'], // 규칙이 적용될 파일 패턴
		rules: {
			'no-console': 'warn',
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'react/display-name': 'off',
			'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
			'@typescript-eslint/no-unused-vars': 'off',
			'unused-imports/no-unused-imports': 'warn',
			'unused-imports/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_',
				},
			],
			'simple-import-sort/exports': 'warn',
		},
		globals: {
			React: true,
			JSX: true,
		},
	},
];

export default eslintConfig;
