// los archivos globales solo pueden ser importados desde App
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}