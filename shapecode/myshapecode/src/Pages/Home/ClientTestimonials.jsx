import React, { useState } from 'react';
import data from "../../data/index.json";

export default function MySkills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeDot, setActiveDot] = useState(null);

  return (
    <section className="client--section" id="mySkills">
      <div className="portfolio-client-container">
      <p className="client-upper-p">Client Testimonials</p>
      <br />
        <h2 className="client-title">Check out the &nbsp;<span className='client-text'>Feedback</span>
      <br />
       from People I've worked with
      </h2>
        <p className="client--section--para">I work very hard to please my client here is just a few of the nice things
          <br />
          people say about me and my work
        </p>
      </div>

      <div className="client--section--container">
        <div className="elementor-carousel">
          {data?.client?.map((item, index) => (
            <div
              key={index}
              className={`client--section--card ${hoveredIndex === index ? 'hovered' : ''}`}
              onMouseEnter={() => {
                setHoveredIndex(index);
                setActiveDot(index);
              }}
              onMouseLeave={() => setHoveredIndex(null)}
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
            className={`dot ${activeDot === index ? 'active' : ''}`}
            onMouseEnter={() => {
              setHoveredIndex(index);
              setActiveDot(index);
            }}
            onMouseLeave={() => setHoveredIndex(null)}
          ></div>
        ))}
      </div>
    </section>
  );
}
