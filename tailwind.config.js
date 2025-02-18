// @ts-check
/* eslint-disable unicorn/prefer-module */

const defaultTheme = require('tailwindcss/defaultTheme');
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./{src,app}/**/*.{ts,tsx}'],
	theme: {
		fontFamily: {
			sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
			title: ['var(--font-title)', ...defaultTheme.fontFamily.serif],
		},
		extend: {
			colors: {
				mainblack: '#191825',
				mainblue: '#865DFF',
				pinker: '#E384FF',
				blurple: '#5865F2',
				darkpurple: '#b569cc',
				darkpink: '#69335f',
				blacks: '#202830',
			},
		},
	},
	plugins: [
		require('tailwind-scrollbar-hide'),
		require('@tailwindcss/forms'),
		{
			handler: tw => {
				tw.matchComponents(
					{
						'bg-grid': value => ({
							backgroundSize: '90px 90px',
							backgroundImage: `
								linear-gradient(to right, ${value} 1px, transparent 1px),
								linear-gradient(to bottom, ${value} 1px, transparent 1px)
							`,
						}),
					},
					{
						values: flattenColorPalette(tw.theme('colors')),
						type: 'color',
					},
				);

				tw.matchUtilities(
					{
						'text-glow': value => ({
							'text-shadow': `0 0 10px ${value}, 0 0 150px ${value}`,
						}),
						'glow': value => ({
							filter: `drop-shadow(0px 0px 7px ${value})`,
						}),
					},
					{
						values: flattenColorPalette(tw.theme('colors')),
						type: 'color',
					},
				);
			},
		},
	],
};
