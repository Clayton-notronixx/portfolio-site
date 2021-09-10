import '@fortawesome/fontawesome-pro/css/all.min.css'
import '../styles/globals.scss'
import {Header} from "../components/Header";

function MyApp({ Component, pageProps }) {
  return <div>
    <Header/>
    <Component {...pageProps} />
  </div>
}

export default MyApp
