import { zhCN } from "./locales/zh-CN";
import type { LocaleContent } from "./types";

const localeContentMap: Record<string, LocaleContent> = {
	"zh-CN": zhCN
};

const defaultLocale = "zh-CN";

export const getLocaleContent = (locale = defaultLocale): LocaleContent => {
	return localeContentMap[locale] ?? localeContentMap[defaultLocale];
};
