import React, { useState } from 'react';
import { useInterval } from '../../../scripts/useInterval';

const Welcome = () => {
  const titles = [
    {
      title: 'Hello',
      background:
        'https://media.istockphoto.com/vectors/united-kingdom-flag-background-vector-id916628668?k=6&m=916628668&s=612x612&w=0&h=5ZkVCM_8LN-GX9GtWVZGPLklQCtjT8SURDpB487AOXg=',
    },
    {
      title: 'Bonjour',
      background:
        'https://media.istockphoto.com/videos/french-flag-waving-in-wind-video-footage-full-hd-realistic-french-video-id1063022726?s=640x640',
    },
    {
      title: 'こんにちは',
      background:
        'https://img5.goodfon.com/wallpaper/nbig/b/e8/japan-flag-flag-of-japan-japanese-flag-japan-large-flag.jpg',
    },
    {
      title: 'Hola',
      background:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png',
    },
    {
      title: 'Hallo',
      background:
        'https://t4.ftcdn.net/jpg/01/16/24/15/360_F_116241515_2Gq7EBxGr73TbSqrFb2bJnAYhI7SJ3dB.jpg',
    },
    {
      title: '你好',
      background:
        'https://i2.wp.com/coininfo.news/wp-content/uploads/2018/02/taiwan-flag-coin-info-news.png?fit=%2C&ssl=1',
    },
    {
      title: 'Bongiorno',
      background:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBAw8aKRyacQFixgIPUnRo9IUpUVTCU3qd1Q&usqp=CAU',
    },
    {
      title: 'مرحبا',
      background:
        'https://images-na.ssl-images-amazon.com/images/I/118Fdd2hRoL._AC_.jpg',
    },
    {
      title: 'Gutentag',
      background:
        'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg',
    },
  ];

  const [index, setIndex] = useState(0);
  const [hello, setHello] = useState(titles[index]);

  useInterval(() => {
    if (index === titles.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    setHello(titles[index]);
  }, 1500);

  return (
    <div className='container-scroll'>
      <section className='welcome-section'>
        <div className='container'>
          <div className='container__center-all flex-center-all'>
            <h1
              style={{
                background: `url(${hello.background})`,
              }}
              className='hello-title'
            >
              {hello.title},
            </h1>

            <h2>
              Are you looking for a short term{' '}
              <span className='hover-zoom'>Front End</span> developer?
            </h2>
            <h3>
              Cloud Studio Ltd specializes in short-term projects. Our
              developers specialize in React, Next.JS, Vue, NodeJS and of course
              the good old Vanilla Javascript Latte. &#x1F964;
            </h3>
            <p>So let's get started</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
