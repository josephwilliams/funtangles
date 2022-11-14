import { ColorProvider } from '../contexts/color-context'
import { RectanglesProvider } from '../contexts/rectangles-context'
import { AuthProvider } from '../contexts/auth-context'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ColorProvider>
        <RectanglesProvider>
          <Component {...pageProps} />
        </RectanglesProvider>
      </ColorProvider>
    </AuthProvider>
  )
}


export default MyApp
