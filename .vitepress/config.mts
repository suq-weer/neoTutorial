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
  description: "一个提供简单详细的 Neoforge 模组教程文档",
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
    },
    footer: {
      message: '使用 CC BY-NC-SA 4.0 许可证进行分享',
      copyright: 'Copyright © 2026 Xiaosu'
    },
    lastUpdated: {
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
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
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    useTitleFromFrontmatter: true,
    sortMenusByName: true
  },
  {
    documentRootPath: 'docs',
    scanStartPath: 'api',
    resolvePath: '/api/',
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    useTitleFromFrontmatter: true,
    sortMenusByName: true
  }
];

const i18nConfig: Partial<VitePressI18nOptions> = {
  locales: ['zhHans'],
  rootLocale: 'zhHans',
  searchProvider: 'local' as const
}

// 添加 editLink 配置到最终配置中
const finalConfig = withSidebar(withI18n(config, i18nConfig), sidebarConfig);
finalConfig.themeConfig = {
  ...finalConfig.themeConfig,
  editLink: {
    pattern: 'https://github.com/suq-weer/neoTutorial/edit/master/docs/:path',
    text: '在 GitHub 上编辑此页'
  }
};

// https://vitepress.dev/reference/site-config
export default defineConfig(finalConfig)