import { init } from '../utils/sentry'
import '../styles/index.css';

init()

export default function App({ Component, pageProps }) {
  // Workaround for https://github.com/vercel/next.js/issues/8592
  return <Component {...pageProps} />
}