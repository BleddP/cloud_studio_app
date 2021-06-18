import React from 'react';

// Libs
import { useInView } from 'react-intersection-observer';

const Where = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.9,
  });

  return (
    <div
      ref={ref}
      className='container-scroll'
      id='where-section'
      name='where-section'
    >
      <section className='where-section'>
        <div className='container y-container'>
          <div className='grid'>
            <div className='col'>
              <h1>Where we are</h1>
            </div>
            <div className='col'>
              <div
                className={
                  inView ? 'intersection__fade active' : 'intersection__fade'
                }
              >
                <img
                  src='https://img2.pngio.com/location-symbol-clipart-where-png-600_546.png'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Where;
