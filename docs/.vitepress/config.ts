import { defineConfig } from 'vitepress'
import { version } from '../../package.json'
import {
  font,
  github,
  ogImage,
  ogUrl,
  releases,
  DataViewDescription,
  DataViewName
} from './meta'

export default defineConfig({
  lang: 'en-US',
  title: DataViewName,
  description: DataViewDescription,
  head: [
    ['meta', { name: 'theme-color', content: '#729b1a' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    [
      'link',
      {
        rel: 'alternate icon',
        href: '/favicon.ico',
        type: 'image/png',
        sizes: '16x16'
      }
    ],

    [
      'meta',
      {
        name: 'keywords',
        content:
          'DataView, vite, test, coverage, snapshot, react, vue, preact, svelte, solid, lit, ruby, cypress, puppeteer, jsdom, happy-dom, test-runner, jest, typescript, esm, tinypool, tinyspy, c8, node'
      }
    ],
    ['meta', { property: 'og:title', content: DataViewName }],
    ['meta', { property: 'og:description', content: DataViewDescription }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { name: 'twitter:title', content: DataViewName }],
    ['meta', { name: 'twitter:description', content: DataViewDescription }],
    ['meta', { name: 'twitter:image', content: ogImage }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    [
      'link',
      {
        rel: 'preload',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'",
        href: font
      }
    ],
    [
      'noscript',
      {},
      `<link rel="stylesheet" crossorigin="anonymous" href="${font}" />`
    ],
    ['link', { rel: 'mask-icon', href: '/logo.svg', color: '#ffffff' }],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
        sizes: '180x180'
      }
    ]
  ],
  lastUpdated: true,
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    }
  },
  themeConfig: {
    logo: '/logo.svg',

    socialLinks: [{ icon: 'github', link: github }],

    footer: {
      message: 'Released under the MIT License.',
      copyright:
        'Copyright © 2021-PRESENT Anthony Fu, Matías Capeletto and DataView contributors'
    },

    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Components', link: '/components/scroll-table' },
      { text: 'Config', link: '/config/' },
      { text: 'Advanced', link: '/advanced/index' },
      {
        text: `v${version}`,
        items: [
          {
            text: 'Release Notes ',
            link: releases
          }
        ]
      }
    ],

    sidebar: {
      '/advanced': [
        {
          text: 'Advanced',
          items: [
            {
              text: 'DataView Node API',
              link: '/advanced/index'
            }
          ]
        }
      ],
      '/': [
        {
          text: 'Guide',
          items: [
            {
              text: 'Getting Started',
              link: '/guide/'
            }
          ]
        },
        {
          text: 'Components',
          items: [
            {
              text: 'ScrollTable',
              link: '/components/scroll-table'
            },
            {
              text: 'CountUp',
              link: '/components/count-up'
            },
            {
              text: 'BorderBox',
              link: '/components/border-box'
            }
          ]
        },
        {
          text: 'Config',
          items: [
            {
              text: 'Config Reference',
              link: '/config/'
            }
          ]
        }
      ]
    }
  }
})
