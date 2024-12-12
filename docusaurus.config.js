// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bagpipes',
  staticDirectories: ['public', 'static'],
  tagline: 'A powerful drag and drop platform for Web3',
  favicon: 'img/favicon.ico',

  url: 'https://docs.bagpipes.io',
  baseUrl: '/',

  organizationName: 'xcmsend',
  projectName: 'docusaurus',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          editUrl:
            'https://github.com/xcmsend/docusaurus/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/xcmsend/docusaurus/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // Add Algolia theme plugin
  themes: [
    [
      '@docusaurus/theme-search-algolia',
      {
        id: 'search',
      }
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Algolia search configuration
      algolia: {
        // The application ID provided by Algolia
        appId: 'A3DGNU6I8C',
        // Public API key: it is safe to commit it
        apiKey: '645632a2a57995df6b6a60cc193db059',
        indexName: 'bagpipes',
        // Optional: see doc section below
        contextualSearch: false,
        searchPagePath: 'search',
        placeholder: 'testing',
        //... other Algolia params
      },
      
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
          {label: "Try Bagpipes", position: 'right', href: "https://app.xcmsend.com"},
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
