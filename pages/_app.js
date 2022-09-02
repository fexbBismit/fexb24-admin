import '../styles/globals.css'
import { useRouter } from "next/router";
import { AppWrapper } from '../util/AppContext';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default MyApp
