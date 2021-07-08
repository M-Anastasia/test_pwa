module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,ico,html,png,txt,css,js,svg,ttf}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'build/sw.js',
	runtimeCaching: [{
		// Match any request that ends with .png, .jpg, .jpeg or .svg.
		urlPattern: /\.(?:chunk.js|js)$/,

		// Apply a cache-first strategy.
		handler: 'CacheFirst',

		options: {
			// Use a custom cache name.
			cacheName: 'static_js',

			// Only cache 10 images.
			expiration: {
				maxEntries: 20,
			},
		},
	},{
		urlPattern: /^.*(?:)$/,
		handler: 'NetworkFirst',
		options: {
			cacheName: `v01-main`,
		},
	}],
};