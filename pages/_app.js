import '../styles/globals.css'
import { useRouter } from "next/router";
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const showNavbar = router.pathname === '/login' ? false : true;

  return (
    <>
    {showNavbar && <Navbar />}
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
