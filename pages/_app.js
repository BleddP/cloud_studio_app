import '../styles/css/globals.css';

// Components
import Navbar from '../components/static-components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <div className='scroll-snap-wrapper'>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
