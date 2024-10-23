import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import tseslint_plugin from '@typescript-eslint/eslint-plugin';
import stylistic from '@stylistic/eslint-plugin';
import svelte from 'eslint-plugin-svelte';
import svelteConfig from './svelte.config.js';
import svelteParser from 'svelte-eslint-parser';

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...tseslint.configs.strict,
	...svelte.configs['flat/base'],
	...svelte.configs['flat/recommended'],
	{
		plugins: {
			'stylistic': stylistic,
			'ts': tseslint_plugin,
		},
		rules: {
			'stylistic/array-bracket-spacing': [ 'error', 'always' ],
			'stylistic/object-curly-spacing': [ 'error', 'always' ],
			'stylistic/indent': [ 'error', 'tab' ],
			'stylistic/quotes': [ 'error', 'single' ],
			'stylistic/semi': [ 'error', 'always' ],
			'stylistic/spaced-comment': [ 'error', 'always' ],
			'stylistic/no-extra-semi': [ 'error' ],
			'stylistic/no-trailing-spaces': [ 'error' ],
		},
	},
	{
		files: [ '**/*.svelte', '*.svelte' ],
		plugins: {
			'svelte': svelte,
		},
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: {
					ts: '@typescript-eslint/parser',
				},
				extraFileExtensions: [ '.svelte' ],
				svelteConfig
			},
		},
		rules: {
			'svelte/indent': [ 'error', { 'indent': 'tab' } ],
			'svelte/block-lang': [ 'error', { 'script': [ 'ts' ] } ],
			'svelte/valid-compile': [ 'error' ],
			'svelte/no-immutable-reactive-statements': [ 'error' ],
			'svelte/no-reactive-literals': [ 'error' ],
			'svelte/require-each-key': [ 'error' ],
			'svelte/valid-each-key': [ 'error' ],
			'svelte/html-quotes': [ 'error', { 'prefer': 'single' } ],
			'svelte/prefer-class-directive': [ 'error' ],
			'svelte/shorthand-attribute': [ 'error' ],
			'svelte/shorthand-directive': [ 'error' ],
			'svelte/sort-attributes': [ 'error' ],
		}
	},
);