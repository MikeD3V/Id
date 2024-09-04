module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,html,js,png}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};