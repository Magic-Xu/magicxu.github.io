export const siteConfig = {
	name: "MagicXu",
	description: "Android 工程师 / AI 探索者 / 独立开发者",
	defaultLocale: "zh-CN",
	locales: ["zh-CN"],
	links: {
		github: "https://github.com/Magic-Xu",
		email: "magicalxu666@gmail.com"
	}
} as const;

export const buildPageTitle = (pageTitle?: string) => {
	if (!pageTitle) return siteConfig.name;
	return `${pageTitle} | ${siteConfig.name}`;
};
