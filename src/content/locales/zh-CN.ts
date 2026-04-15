import type { LocaleContent } from "../types";
import { siteConfig } from "../../data/site";

export const zhCN: LocaleContent = {
	navigation: [
		{ href: "/projects", label: "Projects" },
		{ href: "/writing", label: "Writing" },
		{ href: "/about", label: "About" }
	],
	home: {
		metaTitle: "首页",
		metaDescription: "轻量、克制、偏工程师气质的个人站首页",
		title: siteConfig.title,
		subtitle: "Android 工程师 / AI 探索者 / 独立开发者",
		slogan: siteConfig.slogan,
		intro:
			"我长期专注 Android 工程实践，也持续在 AI 产品方向做实验。相比追逐概念，我更在意问题边界是否清晰、方案是否可维护，以及结果能否被真实使用。对我来说，工程的价值在于把想法打磨成稳定、可交付的产品。",
		actions: [
			{ href: siteConfig.github, label: "GitHub", external: true, variant: "primary" },
			{ href: "/projects", label: "Projects", variant: "secondary" },
			{ href: "/writing", label: "Writing", variant: "secondary" },
			{ href: "/about", label: "About", variant: "secondary" }
		]
	},
	about: {
		metaTitle: "About",
		metaDescription: "关于 MagicXu 的工作方向与技术关注",
		title: "About",
		description:
			"我是 MagicXu，长期专注 Android 工程实践，同时在 AI 产品方向持续探索。偏好用工程方法解决真实问题，并把结果打磨成可交付的产品。",
		summaryTitle: "简介",
		keywordsTitle: "技术关键词",
		focusTitle: "当前关注",
		keywords: [
			"Android 原生开发",
			"Kotlin / Java",
			"架构设计与工程化",
			"AI 应用落地",
			"产品原型与独立开发"
		],
		focuses: [
			"移动端与 AI 能力结合的真实场景",
			"可维护、可演进的小型工程体系",
			"从想法到上线的快速闭环"
		]
	},
	projects: {
		metaTitle: "Projects",
		metaDescription: "进行中的项目与工程实践",
		title: "Projects",
		description: "进行中的项目、实验和长期迭代方向。",
		items: [
			{
				name: "Pulse",
				status: "进行中",
				description:
					"一个面向 Android 的轻量 MVI 架构实践，强调状态流可读、模块边界清晰和工程落地成本可控。",
				stack: ["Kotlin", "Android", "MVI", "Jetpack"],
				linkHref: "https://github.com/Magic-Xu/pulse",
				linkLabel: "查看项目"
			},
			{
				name: "Personal Site",
				status: "进行中",
				description:
					"一个基于 Astro 搭建的轻量个人站，用于沉淀项目、写作与长期个人表达。",
				stack: ["Astro", "GitHub Pages", "CSS"],
				linkHref: "#",
				linkLabel: "查看站点"
			},
			{
				name: "AI Pet Mood",
				status: "探索中",
				description:
					"一个面向宠物场景的 AI 趣味产品尝试，关注图像理解、情绪表达与轻量交互体验。",
				stack: ["Android", "AI", "Product Design"],
				linkHref: "#",
				linkLabel: "了解项目"
			}
		]
	},
	writing: {
		metaTitle: "Writing",
		metaDescription: "工程实践、AI 产品与独立开发写作",
		title: "Writing",
		description: "记录 Android 工程、AI 实践与产品思考。",
		hint: "",
		emptyMessage: "暂时还没有可展示的文章。"
	},
	footer: {
		note: "保持热忱，持续交付。",
		githubLabel: "GitHub",
		emailLabel: "邮箱"
	}
};
