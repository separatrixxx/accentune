module.exports = {
	i18n: {
	  locales: ['en', 'ru'],
	  defaultLocale: 'ru',
	},
	images: {
	  domains: ['accentune.vercel.app'],
	},
	webpack(config) {
	  config.module.rules.push({
		loader: '@svgr/webpack',
		issuer: /\.[jt]sx?$/,
		options: {
		  prettier: false,
		  svgo: true,
		  svgoConfig: {
			plugins: [{
			  name: 'preset-default',
			  params: {
				override: {
				  removeViewBox: false
				}
			  }
			}],
		  },
		  titleProp: true,
		},
		test: /\.svg$/,
	  });
  
	  return config;
	},
	async headers() {
	  return [
		{
		  source: '/:path*',
		  headers: [
			{
			  key: 'Content-Security-Policy',
			  value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' *.telegram.org; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' wss: https:; frame-src 'self' https://web.telegram.org;",
			},
		  ],
		},
	  ];
	},
  };
  