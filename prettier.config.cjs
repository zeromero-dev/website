module.exports = {
	$schema: 'http://json.schemastore.org/prettierrc',
	singleQuote: true,
	semi: true,
	printWidth: 120,
	trailingComma: 'all',
	arrowParens: 'avoid',
	bracketSpacing: true,
	useTabs: true,
	quoteProps: 'consistent',
	plugins: [require('prettier-plugin-tailwindcss'), require('prettier-plugin-organize-imports')],
};
