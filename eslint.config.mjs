import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import unusedImports from 'eslint-plugin-unused-imports';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
	{
		files: ['**/*.js', '**/*.ts', '**/*.tsx'], // 규칙이 적용될 파일 패턴
		plugins: {
			'unused-imports': unusedImports,
			'simple-import-sort': simpleImportSort,
		},
		rules: {
			'no-console': 'warn',
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'react/display-name': 'off',
			'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
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
			'simple-import-sort/imports': 'error',

			'import/no-restricted-paths': [
				'error',
				{
					zones: [
						// 단방향 코드베이스
						{
							target: './src/modules',
							from: './src/app',
						},
						// src/modules와 src/app는 다음 공유 모듈에서 가져올 수 있지만 그 반대는 불가능
						{
							target: ['./src/components', './src/hooks', './src/lib', './src/types', './src/utils'],
							from: ['./src/modules', './src/app'],
						},
					],
				},
			],
		},
	},
];

export default eslintConfig;
