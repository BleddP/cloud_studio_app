import { Fragment } from 'react';
import Head from 'next/head';

// Navigation
import SideNav from '../components/static-components/SideNav';

// Components
import Welcome from '../components/sections/home/Welcome';
import About from '../components/sections/home/About';
import Where from '../components/sections/home/Where';

const Home = () => {
  const links = [
    {
      to: 'welcome-section',
      menuLabel: 'Welcome',
    },
    {
      to: 'about-section',
      menuLabel: 'About',
    },
    {
      to: 'where-section',
      menuLabel: 'Where',
    },
    {
      to: 'who-section',
      menuLabel: 'Who',
    },
    {
      to: 'contact-section',
      menuLabel: 'Contact',
    },
  ];

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
        <SideNav links={links} />
        <Welcome />
        <About />
        <Where />
        <script src='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'></script>
      </body>
    </Fragment>
  );
};

export default Home;
