import { Fragment } from 'react';
import Head from 'next/head';

// Libs
import Scroll from 'react-scroll';

// Components
import Welcome from '../components/sections/home/Welcome';
import About from '../components/sections/home/About';
import Where from '../components/sections/home/Where';

const Home = () => {
  const Link = Scroll.Link;

  return (
    <Fragment>
      <Head>
        <title>Cloud Studio Ltd</title>
        <meta name='description' content='Cloud Studio Ltd' />
        <meta charSet='UTF-8' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Kanit:wght@500&display=swap'
          rel='stylesheet'
        ></link>
        {/* Materialize css */}
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css'
        />
      </Head>
      <body>
        <div id='scroll-menu' className='scroll-menu'>
          <Link
            activeClass='active'
            spy={true}
            smooth={true}
            to='welcome-section'
          >
            <span className='scroll-menu__item'>Welcome</span>
          </Link>
          <Link
            activeClass='active'
            spy={true}
            smooth={true}
            to='about-section'
          >
            <span className='scroll-menu__item'>About</span>
          </Link>
          <Link
            activeClass='active'
            spy={true}
            smooth={true}
            to='where-section'
          >
            <span className='scroll-menu__item'>Where</span>
          </Link>
          <Link activeClass='active' spy={true} smooth={true} to='who-section'>
            <span className='scroll-menu__item'>Who</span>
          </Link>
          <Link
            activeClass='active'
            spy={true}
            smooth={true}
            to='contact-section'
          >
            <span className='scroll-menu__item'>Contact</span>
          </Link>
        </div>
        <Welcome />
        <About />
        <Where />

        <script src='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'></script>
      </body>
    </Fragment>
  );
};

export default Home;
