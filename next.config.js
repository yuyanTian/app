// next.config.js
const Dotenv = require("dotenv-webpack");

// module.exports = {
//     webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//         // Add the new plugin to the existing webpack plugins
//         config.plugins.push(new Dotenv({ silent: true }));
//         config.module.rules.push({
//             test: /\.svg$/,
//             issuer: {
//                 test: /\.(js|ts)x?$/,
//             },
//             use: ['@svgr/webpack'],
//         });

//         return config;
//     },
//     // Have to list all the environment variables used here to make it available
//     // to the client side code
//     env: {
//         AUTH_SECRET: process.env.AUTH_SECRET,
//     },
// };