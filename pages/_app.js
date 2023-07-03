import '../styles/globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <div>
      <ToastContainer theme='dark' />
      {getLayout(<Component {...pageProps} />)}
    </div>)
}

export default MyApp
