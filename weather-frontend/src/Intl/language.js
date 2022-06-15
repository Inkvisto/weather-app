import * as uk from './uk.json'
import * as eng from './eng.json'

const locale = window.navigator.userLanguage || window.navigator.language;

export default locale
export const language = locale.slice(0, 2)




export const languageChange = () => {
  switch (language) {
    case 'uk':
      return uk.default
    default:
      return eng.default
  }
}
