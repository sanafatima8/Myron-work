import React, { useState, useEffect } from 'react';
import data from "../../data/index.json";
import './client.css'; // Import a separate CSS file for styling

export default function MySkills() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (activeIndex + 1) % data?.client?.length;
      setActiveIndex(nextIndex);
    }, 5000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section className="client--section" id="mySkills">
      <div className="portfolio-client-container">
        <p className="client-upper-p">Client Testimonials</p>
        <br />
        <h2 className="client-title">
          Check out the &nbsp;<span className='client-text'>Feedback</span>
          <br />
          from People I've worked with
        </h2>
        <p className="client--section--para">
          I work very hard to please my client here is just a few of the nice things
          <br />
          people say about me and my work
        </p>
      </div>

      <div className="client--section--container">
        <div className="elementor-carousel">
          {data?.client?.map((item, index) => (
            <div
              key={index}
              className={`client--section--card ${activeIndex === index ? 'active' : 'inactive'}`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="client--section--img">
                <img src={item.src} alt="Product Chain" />
              </div>
              <div className="client--section--card--content">
                <h3 className="client-title">{item.title}</h3>
                <p className='client-position'>{item.position}</p>
                <p className='client-company'>{item.company}</p>
                <p className="client-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="dots-container">
        {data?.portfolio?.map((_, index) => (
          <div
            key={index}
            className={`dot ${activeIndex === index ? 'active' : ''}`}
            onMouseEnter={() => setActiveIndex(index)}
          ></div>
        ))}
      </div>
    </section>
  );
}
