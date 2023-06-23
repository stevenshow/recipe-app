module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
		keys: env.array(
			'APP_KEYS',
			['8GESVDUJyGSB4s8bhD3oUA==','qkKQp0uDR0k4eQc6RJgVUg==','rhiBsliA9PkMCqoiYCuatA==','bYt/ullz8+O0xys1SjqCsw==']
		),
	},
  emitErrors: false,
  url: env('PUBLIC_URL', 'http://localhost:1337'),
  proxy: env.bool('IS_PROXIED', true),
  cron: {
    enabled: env.bool('CRON_ENABLED', false),
  },
	webhooks: {
		populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
	},
});