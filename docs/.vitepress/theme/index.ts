import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './custom.css' // tu peux créer ce fichier pour gérer tes styles

const myTheme: Theme = {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // Tu peux enregistrer ici des composants globaux si besoin
  }
}

export default myTheme
