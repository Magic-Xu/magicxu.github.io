import { siteConfig } from "../config/site";
import { zhCN } from "./locales/zh-CN";
import type { LocaleContent } from "./types";

const localeContentMap: Record<string, LocaleContent> = {
	"zh-CN": zhCN
};

export const getLocaleContent = (locale = siteConfig.defaultLocale): LocaleContent => {
	return localeContentMap[locale] ?? localeContentMap[siteConfig.defaultLocale];
};
