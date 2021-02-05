import { init } from '../utils/sentry'
import '../styles/index.css';

init()

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}