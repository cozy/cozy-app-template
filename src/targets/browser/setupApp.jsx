import memoize from 'lodash/memoize'

import { initTranslation } from 'cozy-ui/transpiled/react/providers/I18n'

import { makeClient } from 'src/targets/browser/makeClient'

const getDataOrDefault = (data, defaultData) =>
  /^\{\{\..*\}\}$/.test(data) ? defaultData : data

/**
 * Memoize this function in its own file so that it is correctly memoized
 */
const setupApp = memoize(() => {
  const container = document.querySelector('[role=application]')
  const locale = JSON.parse(container.dataset.cozy)?.locale
  const lang = getDataOrDefault(locale, 'en')
  const polyglot = initTranslation(lang, lang => require(`src/locales/${lang}`))
  const client = makeClient()

  return { container, client, lang, polyglot }
})

export default setupApp
