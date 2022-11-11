import { ColorProvider } from '../contexts/color-context'
import { RectanglesProvider } from '../contexts/rectangles-context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ColorProvider>
      <RectanglesProvider>
        <Component {...pageProps} />
      </RectanglesProvider>
    </ColorProvider>
  )
}

export default MyApp
