require('dotenv').config()
const isDev = process.env.NODE_ENV !== 'production'

export default {
	mode: 'universal',
	target: 'static',
	globalName: process.env.npm_package_name,
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},
	css: ['reset-css', 'shoelace-css/dist/shoelace.css', '~/assets/app.css'],
	plugins: [{ src: '~/plugins/persistedstate', ssr: false }, '~/plugins/filters'],
	components: false,
	telemetry: false,
	buildModules: [
		['@nuxtjs/eslint-module', { cache: true, fix: isDev }],
		['@nuxtjs/stylelint-module', { fix: true }],
	],
	modules: [
		'@nuxtjs/dotenv',
		'@nuxt/content',
		'@nuxtjs/pwa',
		!isDev ? ['@nuxtjs/google-analytics', { id: process.env.google_analytics }] : '',
		['@nuxtjs/google-adsense', { id: `ca-pub-${process.env.adsense_id}` }],
	].filter(Boolean),
	build: {
		cache: isDev,
		postcss: {
			parser: require('postcss-comment'),
			plugins: {
				'postcss-import': {},
				'postcss-nested': {},
			},
		},
	},
}
