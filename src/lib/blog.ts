import { getCollection } from "astro:content";

export const DEFAULT_BLOG_LOCALE = "zh-CN";

export const getPublishedPosts = async (locale = DEFAULT_BLOG_LOCALE) => {
	const posts = await getCollection("blog", ({ data }) => !data.draft && data.lang === locale);

	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
};

const padZero = (value: number) => value.toString().padStart(2, "0");

export const formatPubDate = (date: Date) => {
	const year = date.getUTCFullYear();
	const month = padZero(date.getUTCMonth() + 1);
	const day = padZero(date.getUTCDate());

	return `${year}-${month}-${day}`;
};
