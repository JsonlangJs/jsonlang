// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'JsonLang',
  url: 'https://jsonlang.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',


  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ahmed-medhat-tawfiq', // Usually your GitHub org/user name.
  projectName: 'JsonLang', // Usually your repo name.
  deploymentBranch: 'website',
  

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".

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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      image: 'img/default-monochrome.svg',
      navbar: {
        logo: {
          alt: 'JsonLang',
          src: 'img/default-monochrome.svg',
          srcDark: 'img/default-monochrome-white.svg',
          href: 'http://jsonlang.dev/',
          target: '_self',
          className: 'custom-navbar-logo-class',
        },
        items: [
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'right',
          // },
          {
            href: 'https://github.com/sponsors/ahmed-medhat-tawfiq',
            position: 'right',
            label: 'Sponsor',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Tutorial',
          },
          {
            to: '/playground',
            label: 'Playground',
            position: 'right'
          },
          {
            href: 'https://github.com/ahmed-medhat-tawfiq/jsonlang-js',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
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
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/jsonlang',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ahmed-medhat-tawfiq/jsonlang-js',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
