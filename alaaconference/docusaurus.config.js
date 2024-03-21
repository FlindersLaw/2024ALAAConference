// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Freedoms + Futures: Challenges for Legal Academic Scholarship',
  tagline: '3 - 5 July 2024',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

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
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '2024 ALAA Conference',
        logo: {
          alt: 'My Site Logo',
          src: 'img/alaa_logo.webp',
        },
        items: [
          {
            label: 'Registration',
            to: '/tbc',
            position: 'left'
          },
          {
            label: 'Submissions',
            to: '/tbc',
            position: 'left'
          },
          {
            label: 'Program',
            to: '/tbc',
            position: 'left'
          },
          {
            label: 'Conference Material',
            to: '/tbc',
            position: 'left'
          },
          {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Registration',
            items: [
              {
                label: 'Register here',
                href: 'https://tbc.com'
              },
            ],
          },
          {
            title: 'Conference Information',
            items: [
              {
                label: 'Program',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Conference',
                href: 'https://discordapp.com/invite/docusaurus',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Contact ALAA',
                to: '/blog',
              },
              {
                label: 'Contact Flinders Law',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: 'ALAA Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Flinders University. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
