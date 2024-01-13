import data from "../../data/index.json";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import {  faSnowflake} from '@fortawesome/free-solid-svg-icons';
import {  faCogs} from '@fortawesome/free-solid-svg-icons';


export default function MySkills() {


  return (
    <section className="core--section" id="affiliate">
    <div className="portfolio-core-container">
  <h2 className="core-maintitle">The Core Values that drive&nbsp;
  <br /><span className='core-text'>Everything</span> I do</h2>

</div>

      

      <div className="core--section--container">
        {data?.core?.map((item, index) => (
          <div key={index} className="core--section--card">
            <div className="core--section--img">
            <img src={item.src} alt={item.title} />

              {/* {item.id === '1' && (
              <FontAwesomeIcon 
              icon={faLightbulb} 
              className="fa-lightbulb" />
            )}
            {item.id === '2' && (
            
            <FontAwesomeIcon
            icon={faHandshake}
            className="fa-handshake"
          />

            )}

             {item.id === '3' && (
      <FontAwesomeIcon 
      icon={faLightbulb} 
      className="fa-lightbulb" />
 

      )}


         {item.id === '4' && (
            
            <FontAwesomeIcon
             icon={faCheckCircle}
              className="check-icon" />


            )}

         {item.id === '5' && (
           <FontAwesomeIcon
             icon={ faSnowflake}
             className=" fa-Snowflake"
           />
          )}

          {item.id === '6' && (
            
            <FontAwesomeIcon
             icon={faCogs}
              className="fa-cogs" />


            )}  */}


            </div>
            <div className="core--section--card--content">
              <h3 className="core-title">{item.title}</h3>
              <p className="core-description">{item.description}</p>
            
            </div>
          </div>
        ))}
      </div>
    </section> 
  );
}
