import { config as dotenv } from 'dotenv';

// @ts-check

/** @type {import("next").NextConfig} */
const config = {
	env: dotenv(),
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.wasm$/,
			use: ['url-loader'],
		});

		return config;
	},

	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.scdn.co',
				pathname: '/image/*',
			},
		],
	},

	async redirects() {
		return [
			{
				source: '/hello',
				destination: 'https://www.youtube.com/watch?v=pCKDrDvaOKE&ab_channel=Slyfer2812',
				permanent: true,
			},
			{
				source: '/28:06:42:12',
				destination: 'https://youtu.be/hnd-9ZfEmes?t=136',
				permanent: true,
			},
			{
				source: '/rickets',
				destination: 'https://www.youtube.com/watch?v=5WC_tw2q7C8&pp=ygUQcmlja2V0cyBkZWZ0b25lcw%3D%3D',
				permanent: true,
			},
			{
				source: '/tape',
				destination: 'https://www.youtube.com/watch?v=f0pdwd0miqs&pp=ygUHc2V4dGFwZQ%3D%3D',
				permanent: true,
			},
		];
	},
};

export default config;
