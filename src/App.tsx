import '@fontsource/barlow'
import '@fontsource/outfit'
import '@fontsource/roboto-condensed'
import '@fortawesome/fontawesome-free/css/all.css'
import './styles/index.css'

import './api/soundcloudWidget'

import { GridBody } from './components/GridBody'
import { Header } from './components/Header'

export const App = () => {
  return (
    <>
      {<Header />}
      {<GridBody />}
    </>
  )
}
