import 'cozy-ui/transpiled/react/stylesheet.css'
import 'cozy-ui/dist/cozy-ui.utils.min.css'
import 'cozy-bar/dist/stylesheet.css'

import React from 'react'
import { createRoot } from 'react-dom/client'

import setupApp from 'src/targets/browser/setupApp'
import AppRouter from 'src/components/AppRouter'
import { AppProviders } from '../../components/AppProviders'

const init = () => {
  const { container, client, lang, polyglot } = setupApp()
  const root = createRoot(container)

  root.render(
    <AppProviders client={client} lang={lang} polyglot={polyglot}>
      <AppRouter />
    </AppProviders>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  init()
})

if (module.hot) {
  init()
  module.hot.accept()
}
