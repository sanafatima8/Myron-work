import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="Bento">
    <div className="portfolio-container">
     
  <h2 className="section-title">My&nbsp;<span className='skill-text'>Services</span></h2>
  <p className="skills--section--para">Throughout the years I have fostered skills that help me create interesting and unique
    projects. Check them out and see if I have a skill could benefit you and your customers.
  </p>
</div>

      

      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
            <img src={item.src} alt={item.title} />

              {/* {item.id === '1' && (
              <lord-icon
                src="https://cdn.lordicon.com/xirobkro.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#c79816"
                style={{ width: '100px', height: '100px' }}
              />
            )}
            {item.id === '2' && (
            
             <lord-icon
                 src="https://cdn.lordicon.com/zorvjzqh.json"
                 trigger="hover"
                 colors="primary:#ffffff,secondary:#c79816"
                 style={{ width: '100px', height: '100px' }}
                
             />
            )} */}

            </div>
            <div className="skills--section--card--content">
              <h3 className="skills-title">{item.title}</h3>
              <p className="skills-description">{item.description}</p>
            
              {item.id === '1' ? (
  <button className="button-for-id-1">Read More</button>
) : null}

{item.id === '2' ? (
  <button className="button-for-id-2">Read More</button>
) : null}

            
            
            </div>
          </div>
        ))}
      </div>
    </section> 
  );
}
