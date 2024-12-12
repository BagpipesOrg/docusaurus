// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bagpipes',
  staticDirectories: ['public', 'static'],
  tagline: 'A powerful drag and drop platform for Web3',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://xcmsend.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xcmsend', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/xcmsend/docusaurus/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/xcmsend/docusaurus/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
   algolia: {
      // The application ID provided by Algolia
      appId: 'A3DGNU6I8C',

      // Public API key: it is safe to commit it
      apiKey: '645632a2a57995df6b6a60cc193db059',

      indexName: 'bagpipesdocs',

      // Optional: see doc section below
      contextualSearch: true,

      externalUrlRegex: 'external\\.com|domain\\.com',

      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      searchPagePath: 'search',

      insights: false,

      //... other Algolia params
    },	
},
{
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Bagpipes',
        logo: {
          alt: 'Bagpipes Logo',
          src: 'img/bagpipes-bigger.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Wiki',
          },
          {
            type: 'docSidebar',
            sidebarId: 'sdkSidebar',
            position: 'left',
            label: 'SDK',
          },
	 
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/xcmsend',
            label: 'GitHub',
            position: 'right',
          },
          {label: "Start Building", position: 'right', href: "https://app.xcmsend.com"},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro/concepts',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              {
                label: 'Discord',
                href: 'https://discord.gg/37xpKPjdug',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/BagpipesOrg',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/xcmsend',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bagpipes Org.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
