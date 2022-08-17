import '../styles/globals.css'
import { useRouter } from "next/router";
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
