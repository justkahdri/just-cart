module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
	plugins: ["svelte3", "@typescript-eslint"],
  overrides: [
    { files: ["*.svelte"], processor: "svelte3/svelte3",
    rules: {
      "no-undef": "off"
  } }
  ],
	settings: {
		"svelte3/typescript": () => require("typescript")
	},
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
  rules: {
    semi: [2, "always"],
    quotes: [2, "double"],
    "comma-dangle": [2, "never"],
    "max-len": [2, { "code": 120 }],
    "array-element-newline": [2, "consistent"],
    "object-curly-spacing": [2, "always"],
    "no-multi-spaces": 2,
    "no-trailing-spaces": 2
  }
};
