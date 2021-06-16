import '../styles/css/globals.css';

// Components
import Navbar from '../components/static-components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
