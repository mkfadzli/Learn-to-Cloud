// @ts-check

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;
require('dotenv').config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Learn to Cloud',
  url: 'https://learntocloud.guide',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/favicon.ico',

  organizationName: 'learn-to-cloud',
  projectName: 'learn-to-cloud',

  customFields: {
    cloudDictionaryApiUrl: process.env.CLOUD_DICTIONARY_API_URL,
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ms'],
    localeConfigs: {
      en: { label: 'English' },
      ms: { label: 'Bahasa Malaysia' },
    },
  },

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'true',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap',
      },
    },
  ],

  scripts: [
    {
      src: 'https://static.cloudflareinsights.com/beacon.min.js',
      defer: true,
      'data-cf-beacon': `{"token": ${process.env.CLOUDFARE_ANALYTICS_TOKEN}}`,
    },
    {
      src: 'https://plausible.rishab.cloud/js/script.js',
      defer: true,
      'data-domain': 'learntocloud.guide',
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/learntocloud/learn-to-cloud/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Learn to Cloud',
        logo: {
          alt: 'LTC Logo',
          src: '/img/favicon.ico',
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/learntocloud/learn-to-cloud',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: 'Learn to Cloud · Licensed under MIT · Curated by Fadzli Abdullah · 2024',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      announcementBar: {
        id: 'Learn Cloud',
        content:
          '<b><a href="https://www.youtube.com/watch?v=88hnhRmpPZs">6 Months Following This Study Routine TRANSFORMED My Cloud Career</a></b> ☁️',
        backgroundColor: '#1e3a5f',
        textColor: '#ffffff',
        isCloseable: false,
      },
    }),

  plugins: [
    [
      '@docusaurus/plugin-google-analytics',
      {
        trackingID: 'UA-216012364-1',
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 640,
        min: 160,
        steps: 2,
        disableInDev: false,
      },
    ],
  ],
};

module.exports = config;
