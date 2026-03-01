import { defineConfig, UserConfig } from 'vitepress'
// @ts-ignore
import mdItObsidianCallouts from 'markdown-it-obsidian-callouts'
import { withSidebar } from 'vitepress-sidebar';
import { withI18n } from 'vitepress-i18n';
import { VitePressI18nOptions } from 'vitepress-i18n/dist/types';
import { VitePressSidebarOptions } from 'vitepress-sidebar/dist/types';

const config: Partial<UserConfig> = {
  srcDir: "docs",

  title: "Neoforge 模组教程文档",
  description: "一个专门提供简单详细的 Neoforge 模组教程文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
    ],
    externalLinkIcon: true,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    outline: {
      level: 'deep'
    }
  },
  markdown: {
    config: (md: { use: (arg0: any) => void; }) => {
      md.use(mdItObsidianCallouts)
    }
  }
}

const sidebarConfig: VitePressSidebarOptions[] = [
  {
    documentRootPath: 'docs',
    scanStartPath: 'tutorials',
    basePath: '/tutorials/',
    resolvePath: '/tutorials/',
    useTitleFromFrontmatter: true,
    sortMenusByName: true
  },
  {
    documentRootPath: 'docs',
    scanStartPath: 'api',
    resolvePath: '/api/',
    useTitleFromFrontmatter: true,
    sortMenusByName: true
  }
];

const i18nConfig: Partial<VitePressI18nOptions> = {
  locales: ['zhHans'],
  rootLocale: 'zhHans',
  searchProvider: 'local' as const
}

// https://vitepress.dev/reference/site-config
export default defineConfig(withSidebar(withI18n(config, i18nConfig), sidebarConfig))
