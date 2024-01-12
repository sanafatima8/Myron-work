import data from "../../data/index.json";
import { useEffect } from 'react';

export default function MySkills() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust the threshold as needed
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  };

  return (
<section className="study--section" id="study">
      <div className="portfolio-study-container">
        <h2 className="study-title">Education and Professional&nbsp;<span className='study-text'>Timeline</span></h2>
        <p className="study--section--para">I have been writing code for longer than I have been designing, but here is a visual
          <br />
          representation of my educational and professional story. I hit a few road blocks, but with
          <br />perseverance, I made it.
        </p>

        {/* Horizontal line separating the timeline */}
        <div className="timeline"></div>

        {/* Study section content box on the left side */}
        <div className="study-section-content-box left ">
          <dir className='study--section--content'>
            <p className="study-year">June 2014</p>
            <h2 className="study-place">Graduated from High school</h2>
            <p className="study-result">GPA 4.3</p>
            <p className="study--detail">
              Participated in music program and engineering program. Was
              <br />introduced to electronics through Vex Robotic competitions. I 
              <br />sold candy in the school the first couple of years and when I 
              <br />turned 16 picked up jobs at Togos and Baskin Robbins. Also 
              <br />attended the local community college using concurrent
              <br />enrollment while in high school and I learned more about coding,
              <br />design, and different things, but I did not follow any degree
              <br />path.
            </p>
          </dir>
        </div>

        {/* Study section content box on the right side */}
        <div className="study-section-content-box right ">
          <dir className='study--section--content'>
            <p className="study-year">2014-2015</p>
            <h2 className="study-place">Worked and Attended Community College</h2>
            <p className="study-result">GPA 3.7</p>
            <p className="study--detail">
              Attended a community college with the intent to transfer to Purdue
              <br />University and worked as a barista at Starbucks. Completed only the 
            <br />necessary requirements for late admission to Purdue University. All I 
            <br />had left was Spanish 2, I took it in Spring 2015.
            </p>
          </dir>
        </div>


        










        {/* Study section content box on the left side */}
        <div className="study-section-content-box left">
          <dir className='study--section--content'>
            <p className="study-year">August 2015</p>
            <h2 className="study-place">Accepted into Purdue University</h2>
            <p className="study-result">Major: Computer Engineering, GPA: 3.6</p>
            <p className="study--detail">
             Accepted into Purdue University with a partial scholarship.
            </p>
          </dir>
        </div>

        {/* Study section content box on the right side */}
        <div className="study-section-content-box right">
          <dir className='study--section--content'>
            <p className="study-year">May 2016</p>
            <h2 className="study-place">Accepted into Engineering College</h2>
            <p className="study-result">Major: Computer Engineering, GPA: 3.4</p>
            <p className="study--detail">
             Accepted into the Engineering college within Purdue University.I
             <br /> was in the Engineering Projects in Community Service Course EPICS
             <br />part of a team that built a project called 'A Fresh Start' that was 
            <br /> recognize at UC Berkeley. I also participated in the Minority
            <br />Engineering Program MEP, Black Student Union BSU, and the National Society of Black Engineers NSBE.
            </p>
          </dir>
        </div>


        

        
        {/* Study section content box on the left side */}
        <div className="study-section-content-box left">
          <dir className='study--section--content'>
            <p className="study-year">December 2017</p>
            <h2 className="study-place">Dropped out of Purdue University</h2>
            <p className="study-result">Financial issues</p>
            <p className="study--detail">
               I had part of my tuition covered and the other part I worked
               <br />to pay, but because my GPA fell below a 3.5 I lost my 
               <br />Scholarship and I lost my employent at the same time, I 
               <br />could not stay. I was sad and disappointed for a while,as I 
               <br />wanted that degree very much. I had to find another way. 
            </p>
          </dir>
        </div>

        {/* Study section content box on the right side */}
        <div className="study-section-content-box right">
          <dir className='study--section--content'>
            <p className="study-year">January 2018</p>
            <h2 className="study-place">Enrolled in Community College Again</h2>
            <p className="study-result">Started from scratch</p>
            <p className="study--detail">
            Had to start from scratch since the general education requirements
            <br />were different from Purdue's and not all of my credits would transfer
            <br />from an out-of-state college. I worked many different retail customer
            <br />service jobs, while also learning the more about fundamentals od 
            <br />Software Engineering, and volunteered at food banks, found a love
            <br /> for serving others and re-ignited my passion for writing code and solving problems.

            </p>
          </dir>
        </div>


        
        
        {/* Study section content box on the left side */}
        <div className="study-section-content-box left">
          <dir className='study--section--content'>
            <p className="study-year">December 2020</p>
            <h2 className="study-place">Graduated from  Community College</h2>
            <p className="study-result">Achieved an Associates Degree</p>
            <p className="study--detail">
            I was grateful to have achieved the degree, but I was still hurt 
            <br />from my past educational failure, I did not even attend the
            <br />graduation. I also completed a bootcamp in iSO app
            <br /> development from Angela Yu among other courses and I 
            <br />interviewed and laanded an intership as an iOS developer
            <br /> beginning the next year. I was very excited and ready to learn 
            <br />from professionals.
            </p>
          </dir>
        </div>

        {/* Study section content box on the right side */}
        <div className="study-section-content-box right">
          <dir className='study--section--content'>
            <p className="study-year">2021</p>
            <h2 className="study-place">Accepted into <br />California State University East Bay </h2>
            <p className="study-result">My second chance</p>
            <p className="study--detail">
             I started my University education over at California State University 
             <br />East Bay and I receivedd an intership paying higher than any other
             <br />job I had till then, from Whistle Mobile, I felt as I was given second
             <br />chance,a chance to improve myself and my education even furture
             <br />with being accepted into another University and professional 
             <br />experience working full-time for a mid to large size company.
            </p>
          </dir>
        </div>


        
        
        {/* Study section content box on the left side */}
        <div className="study-section-content-box left">
          <dir className='study--section--content'>
            <p className="study-year">2023</p>
            <h2 className="study-place">Graduated from <br />California State University East Bay</h2>
            <p className="study-result">A journey's end</p>
            <p className="study--detail">
            Half way through my education at East Bay I landed great
            <br /> paying part time software engineering contract role as a 
            <br />Flutter Engineer at a little startup with a big heart called
            <br /> Ardley, where I was able to work and pay for the rest of my 
            <br />education.
            </p>
            <br />
            <p className="study--detail">
                 I graduated with honors GPA 3.57, and a focus in Mobile
                 <br /> Development and Artificial Intelligence.After everything I 
                 <br />reached my goal.Throughout it all I was thankful,for the 
                 <br />journey,for believing I could accomplish it, for the hard work I 
                 <br />put in, and for never giving up.My education was along road 
                 <br />and success was at the end and around the corner. I am
                 <br />thankful.
            </p>
          </dir>
        </div>

        {/* Study section content box on the right side */}
        <div className="study-section-content-box right">
          <dir className='study--section--content'>
            <p className="study-year">August 2023-current</p>
            <h2 className="study-place">Freelance Full-time (Self Employed) </h2>
            <p className="study-result">The next chapter</p>
            <p className="study--detail">
            After work at my last company ended I saved most of the money
            <br />and used a little of it as a runway to invest in my freelance software 
            <br /> development business, since then I've worked with multiple clients,
            <br />designing and developing siftware that makes people smille.I truly
            <br />hope my story can be an inspiration to a kid, someone, anyone with
            <br /> a dreeam achieve more in life.Never let anything stop you.Cheers to 
            <br />your success!

            </p>
          </dir>
        </div>


  
      </div>


      
<div className="study-story">
  <div className="study-story-content">
  <h2 className="story-title">
    Share my website 
    <br />and story with 
    <br />someone it can help

  </h2>
  <br />
  <p className="story-para">We all have struggles and failures in life,
    please share my website with nyone you believe my story can help.If you are
    inspired by my story and would like to support me, please contact me for a projct, referral program, or visit my
    store, some of the proceeds from my store will go towrds helping my 
    freelance career grow and the rest will go to Bridfing Tech and Tech Kids 
    Unlimited.
  </p>
<br />
<br />
  <a href="your-link-url" className="story-button">SHARE NOW</a>

  </div>
 
</div>



    </section>
  );
}
 