import React from 'react';

// Libs
import { useInView } from 'react-intersection-observer';

const AboutUs = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.9,
  });
  return (
    <div className='container-scroll' id='about-section' name='about-section'>
      <section className='about-section'>
        <div ref={ref} className='container y-container'>
          <div className='grid'>
            <div className='grid__col full-page'>
              <div
                className={
                  inView
                    ? 'flex-center-all intersection__fade active'
                    : 'flex-center-all intersection__fade'
                }
              >
                <img
                  src='https://cdn3d.iconscout.com/3d/premium/thumb/qr-code-scanner-2872384-2389561.png'
                  alt=''
                />
              </div>
            </div>
            <div
              className={
                inView
                  ? 'flex-center-all intersection__slide--right active'
                  : 'flex-center-all intersection__slide--right'
              }
            >
              <h1>About Us</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officiis sunt perferendis rem eos, minima, dolorem sequi aut
                totam et illo culpa explicabo quo maxime, quisquam veritatis
                neque consequuntur voluptatibus animi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
