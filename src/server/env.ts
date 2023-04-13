import { envsafe, str, url } from 'envsafe';

export const env = envsafe({
	// APPLE_TEAM_ID: str(),
	// APPLE_KEY_ID: str(),
	// APPLE_PRIV_KEY: str(),
	DEV_ENV: str({
		default: 'localhost:3000',
	}),
	PROD_ENV: url({
		default: '"website-git-ssr-zeromero-dev.vercel.app"',
	}),
	DISCORD_WEBHOOK: url(),
	TURNSTILE_SECRET_KEY: str(),
	DEFAULT_LOCATION: str({
		default: 'Vinnytsia, UA',
	}),
});
