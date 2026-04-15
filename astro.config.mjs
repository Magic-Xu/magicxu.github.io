// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://magicxu.github.io'
  // 如果仓库名不是 `magicxu.github.io`（例如 `my-site`），请取消下一行注释：
  // base: '/my-site/'
});
