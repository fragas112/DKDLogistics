const path = require('path');
// const withSass = require('@zeit/next-sass');
// const withCSS = require('@zeit/next-css');
// const withOffline = require('next-offline');
module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
};

const withImages = require('next-images');
module.exports = withImages();
const exposedConfigs = withImages({
	trailingSlash: true,
	cssModule: true,
	i18n: {
		locales: ['en-US', 'ru'],
		defaultLocale: 'en-US',
	},
});
const configuration = Object.assign(exposedConfigs);
module.exports = configuration;

