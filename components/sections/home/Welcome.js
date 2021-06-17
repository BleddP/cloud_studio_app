import React, { useState } from 'react';
import { useInterval } from '../../../scripts/useInterval';

const Welcome = () => {
  const titles = ['Hello', 'Bonjour', 'Hola', 'Bongiorno'];

  const [index, setIndex] = useState(0);
  const [hello, setHello] = useState(titles[index]);

  useInterval(() => {
    if (index === titles.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    setHello(titles[index]);
  }, 3000);

  return (
    <div className='container-scroll'>
      <section className='welcome-section'>
        <div className='container'>
          <div className='container__center-all'>
            <h1>{hello},</h1>

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
