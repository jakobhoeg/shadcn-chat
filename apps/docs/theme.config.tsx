import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Logo from './components/logo'

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: 'https://github.com/jakobhoeg/shadcn-chat',
  },
  docsRepositoryBase: 'https://github.com/jakobhoeg/shadcn-chat',
  footer: {
    text: 'shadcn-chat documentation',
  },
  nextThemes: {
    defaultTheme: 'light',
  },
}

export default config
