// @ts-nocheck
import AuthLogo from './extensions/county-logo.png';
import Favicon from './extensions/favicon.ico';
import SquareLogo from './extensions/SquareLogo.svg';

export default {
	config: {
		notifications: false,
		tutorials: false,
		auth: {
			logo: AuthLogo,
		},
		menu: {
			logo: SquareLogo,
		},
		head: {
			favicon: Favicon,
		},
		theme: {
			light: {
				colors: {
					secondary100: '#d2d4d8',
					secondary200: '#a5a9b1',
					secondary500: '#626976',
					secondary600: '#4b5462',
					secondary700: '#1e293b',
					primary100: '#9fbbd6',
					primary200: '#87abcc',
					primary500: '#3f78ad',
					primary600: '#2767a2',
					primary700: '#0f5698',
					danger100: '#fcecea',
					danger200: '#f5c0b8',
					danger500: '#ee5e52',
					danger600: '#d02b20',
					danger700: '#b72b1a',
					active: '#FF7A00',
					neutral0: '#f6f6f9',
					neutral100: '#ECEEF1',
					neutral1000: '#181826',
					neutral150: '#F9F9F9',
					alternative100: '#cee4f8',
					alternative200: '#add2f4',
					alternative500: '#7bb7ed',
					alternative600: '#6baeeb',
					alternative700: '#5aa5e9',
					buttonNeutral0: '#ffffff',
					buttonPrimary500: '#7bb7ed',
					buttonPrimary600: '#5aa5e9',
					neutral200: '#dcdce4',
					neutral300: '#c0c0cf',
					neutral400: '#a5a5ba',
					neutral500: '#8e8ea9',
					neutral600: '#666687',
					neutral700: '#4a4a6a',
					neutral800: '#32324d',
					neutral900: '#212134',
					success100: '#eafbe7',
					success200: '#c6f0c2',
					success500: '#5cb176',
					success600: '#328048',
					success700: '#2f6846',
					warning100: '#fdf4dc',
					warning200: '#fae7b9',
					warning500: '#f29d41',
					warning600: '#d9822f',
					warning700: '#be5d01',
				},
			},
		},
		locales: ['en'],
		translations: {
			en: {
				'app.components.LeftMenu.navbrand.title': 'Utah County Government',
				'app.components.LeftMenu.navbrand.workplace': 'Content Manager',
				'Auth.form.email.label': 'Utah County Email',
				"Auth.form.welcome.title": "Utah County Content Management System",
			},
		},
	},
	bootstrap() {},
};
