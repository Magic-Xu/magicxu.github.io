export interface SiteConfig {
	title: string;
	description: string;
	slogan: string;
	url: string;
	author: string;
	github: string;
	email: string;
}

export const siteConfig: SiteConfig = {
	title: "MagicXu",
	description: "Android 工程师 / AI 探索者 / 独立开发者",
	slogan: "Having witnessed the industry's tides, I still weave code into my life.",
	url: "https://magic-xu.github.io",
	author: "MagicXu",
	github: "https://github.com/Magic-Xu",
	email: "magicalxu666@gmail.com"
};

// 预留：未来可扩展为多语言站点配置（例如 zh / en）
export const siteConfigs = {
	zh: siteConfig
} as const;

export type SiteLocale = keyof typeof siteConfigs;

export const getSiteConfig = (locale: SiteLocale = "zh") => siteConfigs[locale];
