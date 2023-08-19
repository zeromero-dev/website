const prettierPluginTailwindcss = require('prettier-plugin-tailwindcss');
const prettierPluginOrganizeImports = require('prettier-plugin-organize-imports');

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
  plugins: [prettierPluginTailwindcss, prettierPluginOrganizeImports],
};
