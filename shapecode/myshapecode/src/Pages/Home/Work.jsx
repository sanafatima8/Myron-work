import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Work() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: '0px 0px -50% 0px',
  });

  useEffect(() => {
    if (inView) {
      // Add any additional logic or side effects you need
    }
  }, [inView]);

  return (
    <section id="workSection" className="work--section">
        <div className="work--section--content--box">
          <div className="work--section--content">
            <p className="work--title">What drives me</p>
            <h1 className="work--section--title">
               Crafting stories through
              <br />
               Development and Design
            </h1>
           

          
            <div className='am-icon'>
      <lord-icon
        src="https://cdn.lordicon.com/nchegqgo.json"
        trigger="hover"
        colors="primary:#fff,secondary:#c79816"
        style={{ width: '100px', height: '100px' }}
      />
    </div>


            <p className="work--Ambition">My Ambition</p>
            <p className="work--ambition-description">
             My ambition is to offer the pinnacle of perfect user centered design
             and development to my clients. I aim to offer the best services and 
             an outstanding experience to anyone who works with me. I have 
             spent many years offering world class customer service in retail 
              work environments, I know how to satisfy my clients, 
             and I'll get to know what is best for yours.
            </p>

 <div className="pur-icon">   
<lord-icon
    src="https://cdn.lordicon.com/wdwmyold.json"
    trigger="hover"
    colors="primary:#c79816,secondary:#ffffff"
    style={{ width: '100px', height: '100px' }}
/>
</div>
            

            <p className="work--Purpose">My Purpose</p>
            <p className="work--purpose-description">
             My purpose is to impact as many people as possible in a 
             positive way, through my faith, interactions, and work.
            </p>
          </div>
        </div>




<div className="work--section--img">
<img src={process.env.PUBLIC_URL + '/img/first.png'} alt=""    className="small-image"/>

          {/* <img src="./img/image.jpg" alt="work Section"  className="small-image"/> */}
          <div className={`horizontal--banner ${inView ? 'animate' : ''}`} ref={ref}>
            <h1 className="three-plus"> Frontend developer <br />
           and designer</h1>
         
          </div>
        </div>
      </section>
    );
  }



  {/*       

  <div class='hori-con'>
  <div class="hori-dots">
    <div class="dot-row">
      <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
      
    </div>
    <div class="dot-row">
    <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
     
    </div>
  </div>
</div>




     
<div class='v-con'>
  <div class="vertical-dots-two">
    <div class="dot-container">
    <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
    
    </div>
    <div class="dot-container">
        <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
      <span class="dot-w"></span>
    </div>
   </div>
</div> */}