import React, { useState } from 'react';



export default function AboutMe() {



  const [progressWidthBox1, setProgressWidthBox1] = useState(0);
  const [progressWidthBox2, setProgressWidthBox2] = useState(0);
  const [progressWidthBox3, setProgressWidthBox3] = useState(0);
  const [progressWidthBox4, setProgressWidthBox4] = useState(0);
  const [progressWidthBox5, setProgressWidthBox5] = useState(0);
  const [progressWidthBox6, setProgressWidthBox6] = useState(0);
  const [progressWidthBox7, setProgressWidthBox7] = useState(0);
  const [progressWidthBox8, setProgressWidthBox8] = useState(0);
  const [progressWidthBox9, setProgressWidthBox9] = useState(0);
  const [progressWidthBox10, setProgressWidthBox10] = useState(0);
  const [progressWidthBox11, setProgressWidthBox11] = useState(0);
  const [progressWidthBox12, setProgressWidthBox12] = useState(0);
  const [progressWidthBox13, setProgressWidthBox13] = useState(0);
  const [progressWidthBox14, setProgressWidthBox14] = useState(0);
  const [progressWidthBox15, setProgressWidthBox15] = useState(0);
  const [progressWidthBox16, setProgressWidthBox16] = useState(0);
  const [progressWidthBox17, setProgressWidthBox17] = useState(0);
  const [progressWidthBox18, setProgressWidthBox18] = useState(0);
  const [progressWidthBox19, setProgressWidthBox19] = useState(0);
  const [progressWidthBox20, setProgressWidthBox20] = useState(0);
  const [progressWidthBox21, setProgressWidthBox21] = useState(0);


  const handleMouseOverBox1 = (targetValue) => {
    setProgressWidthBox1(targetValue);
  };

  const handleMouseOutBox1 = () => {
    setProgressWidthBox1(0);
  };

  const handleMouseOverBox2 = (targetValue) => {
    setProgressWidthBox2(targetValue);
  };

  const handleMouseOutBox2 = () => {
    setProgressWidthBox2(0);
  };

  const handleMouseOverBox3 = (targetValue) => {
    setProgressWidthBox3(targetValue);
  };

  const handleMouseOutBox3 = () => {
    setProgressWidthBox3(0);
  };
  const handleMouseOverBox4 = (targetValue) => {
    setProgressWidthBox4(targetValue);
  };

  const handleMouseOutBox4 = () => {
    setProgressWidthBox4(0);
  };

  const handleMouseOverBox5 = (targetValue) => {
    setProgressWidthBox5(targetValue);
  };

  const handleMouseOutBox5 = () => {
    setProgressWidthBox5(0);
  };

  const handleMouseOverBox6 = (targetValue) => {
    setProgressWidthBox6(targetValue);
  };

  const handleMouseOutBox6 = () => {
    setProgressWidthBox6(0);
  };
  const handleMouseOverBox7 = (targetValue) => {
    setProgressWidthBox7(targetValue);
  };

  const handleMouseOutBox7 = () => {
    setProgressWidthBox7(0);
  };

  const handleMouseOverBox8 = (targetValue) => {
    setProgressWidthBox8(targetValue);
  };

  const handleMouseOutBox8 = () => {
    setProgressWidthBox8(0);
  };
  const handleMouseOverBox9 = (targetValue) => {
    setProgressWidthBox9(targetValue);
  };

  const handleMouseOutBox9 = () => {
    setProgressWidthBox9(0);
  };

  const handleMouseOverBox10 = (targetValue) => {
    setProgressWidthBox10(targetValue);
  };

  const handleMouseOutBox10 = () => {
    setProgressWidthBox10(0);
  };

  const handleMouseOverBox11 = (targetValue) => {
    setProgressWidthBox11(targetValue);
  };

  const handleMouseOutBox11 = () => {
    setProgressWidthBox11(0);
  };

  const handleMouseOverBox12 = (targetValue) => {
    setProgressWidthBox12(targetValue);
  };

  const handleMouseOutBox12 = () => {
    setProgressWidthBox12(0);
  };

  const handleMouseOverBox13 = (targetValue) => {
    setProgressWidthBox13(targetValue);
  };

  const handleMouseOutBox13 = () => {
    setProgressWidthBox13(0);
  };
  const handleMouseOverBox14 = (targetValue) => {
    setProgressWidthBox14(targetValue);
  };

  const handleMouseOutBox14 = () => {
    setProgressWidthBox14(0);
  };
  const handleMouseOverBox15 = (targetValue) => {
    setProgressWidthBox15(targetValue);
  };

  const handleMouseOutBox15 = () => {
    setProgressWidthBox15(0);
  };
  const handleMouseOverBox16 = (targetValue) => {
    setProgressWidthBox16(targetValue);
  };

  const handleMouseOutBox16 = () => {
    setProgressWidthBox16(0);
  };
  const handleMouseOverBox17 = (targetValue) => {
    setProgressWidthBox17(targetValue);
  };

  const handleMouseOutBox17 = () => {
    setProgressWidthBox17(0);
  };
  const handleMouseOverBox18 = (targetValue) => {
    setProgressWidthBox18(targetValue);
  };

  const handleMouseOutBox18 = () => {
    setProgressWidthBox18(0);
  };
  const handleMouseOverBox19 = (targetValue) => {
    setProgressWidthBox19(targetValue);
  };

  const handleMouseOutBox19 = () => {
    setProgressWidthBox19(0);
  };
  const handleMouseOverBox20 = (targetValue) => {
    setProgressWidthBox20(targetValue);
  };

  const handleMouseOutBox20 = () => {
    setProgressWidthBox20(0);
  };
  const handleMouseOverBox21 = (targetValue) => {
    setProgressWidthBox21(targetValue);
  };

  const handleMouseOutBox21 = () => {
    setProgressWidthBox21(0);
  };


  return (
    <section id="AboutMe" className="about--section">


<div className="portfolio-about-container">
  <h2 className="about-title">My&nbsp;<span className='about-text'>Skills</span></h2>
  <p className="about--section--para">Throughout the years I have fostered skills that help me create interesting and unique
    <br />
    projects. Check them out and see if I have a skill could benefit you and your customers.
  </p>




<div className="columns-container">

    <div className="column-left">
      <h3 className="col-one">Full stack developer with:</h3>
        <div className="boxes-container">
                 <div className="box">
                <h2 className="box-heading">Flutter/Dart</h2>

               <div 
               className="progress-container"
               onMouseOver={() => handleMouseOverBox1(88)}  
               onMouseOut={handleMouseOutBox1}
               >
       
              
              
              <progress className='pro-f' value={progressWidthBox1} max="100"></progress>
             <span className="progress-text">{progressWidthBox1}%</span>

             <div class="circle-container">
  <img class="circle-image" src="./img/flutter.png" alt="" />
  <p class="text-after-circle">Level:</p> <span class="a-one">Advance</span>
</div>

            </div>
   </div>

    <div className="box">

    <h2 className="box-heading">Firebase</h2>
    
               <div 
               className="progress-container"
               onMouseOver={() => handleMouseOverBox2(90)}  
               onMouseOut={handleMouseOutBox2}
               >
       
              
              <progress className='pro-f' value={progressWidthBox2} max="100"></progress>
             <span className="progress-text">{progressWidthBox2}%</span>

             <div class="circle-container">
  <img class="circle-image" src="./img/firebase.png" alt="" />
  <p class="text-after-circle">Level:</p> <span class="a-one">Advance</span>
</div>

       </div>

               
    </div>
   
  </div>









  <div className="boxes-container">
    <div className="box">
    <h2 className="box-heading">Supabase</h2>
    
              <div 
               className="progress-container"
               onMouseOver={() => handleMouseOverBox3(89)}  
               onMouseOut={handleMouseOutBox3}
               >
       
              
              <progress className='pro-f' value={progressWidthBox3} max="100"></progress>
             <span className="progress-text">{progressWidthBox3}%</span>

             <div class="circle-container">
  <img class="circle-image" src="./img/supabase.png" alt="" />
  <p class="text-after-circle">Level:</p> <span class="a-one">Advance</span>
</div>

       </div>

    </div>


    <div className="box">
    <h2 className="box-heading">Appwrite</h2>

             <div 
               className="progress-container"
               onMouseOver={() => handleMouseOverBox4(87)}  
               onMouseOut={handleMouseOutBox4}
               >
       
              <progress className='pro-f' value={progressWidthBox4} max="100"></progress>
             <span className="progress-text">{progressWidthBox4}%</span>

             <div class="circle-app-container">
  <img class="circle-app-image" src="./img/appwrite.png" alt="" />
  <p class="text-after-app-circle">Level:</p> <span class="a-one">Advance</span>
</div>

       </div>
       
    </div> 
  
  </div>

  
  <div className="boxes-container">
    <div className="box">
    <h2 className="box-heading">Dart Frog</h2>
    
              <div 
               className="progress-container"
               onMouseOver={() => handleMouseOverBox5(88)}  
               onMouseOut={handleMouseOutBox5}
               >
              <progress className='pro-f' value={progressWidthBox5} max="100"></progress>
             <span className="progress-text">{progressWidthBox5}%</span>

             <div class="circle-dart-container">
  <img class="circle-dart-image" src="./img/dart.png" alt="" />
  <p class="text-after-dart-circle">Level:</p> <span class="a-dart-one">Advance</span>
</div>
       </div>

    </div>


    <div className="box">
    <h2 className="box-heading">Serverpod</h2>
    
            <div 
               className="progress-container"
               onMouseOver={() => handleMouseOverBox6(83)}  
               onMouseOut={handleMouseOutBox6}
               >
              <progress className='pro-f' value={progressWidthBox6} max="100"></progress>
             <span className="progress-text">{progressWidthBox6}%</span>

             <div class="circle-container">
  <img class="circle-image" src="./img/bot.png" alt="" />
  <p class="text-after-circle">Level:</p> <span class="a-one">Advance</span>
</div>
       </div>
       
    </div> 
  
  </div>




  
  <div className="boxes-container">
    <div className="box">
    <h2 className="box-heading">GCP</h2>
    
           <div 
               className="progress-container"
               onMouseOver={() => handleMouseOverBox7(85)}  
               onMouseOut={handleMouseOutBox7}
               >  
              <progress className='pro-f' value={progressWidthBox7} max="100"></progress>
             <span className="progress-text">{progressWidthBox7}%</span>

             <div class="circle-dart-container">
  <img class="circle-dart-image" src="./img/gcp.png" alt="" />
  <p class="text-after-dart-circle">Level:</p> <span class="a-dart-one">Advance</span>
</div>
       </div>

    </div>


    <div className="box">
    <h2 className="box-heading">AWS</h2>
    
           <div 
               className="progress-container"
               onMouseOver={() => handleMouseOverBox8(77)}  
               onMouseOut={handleMouseOutBox8}
               >  
              <progress className='pro-f' value={progressWidthBox8} max="100"></progress>
             <span className="progress-text">{progressWidthBox8}%</span>

             <div class="circle-aws-container">
  <img class="circle-aws-image" src="./img/aws.png" alt="" />
  <p class="text-after-aws-circle">Level:</p> <span class="a-one">Advance</span>
</div>
       </div>
       
    </div> 
  
  </div>


  
  <div className="boxes-container">
    <div className="box">
    <h2 className="box-heading">Python</h2>
    
              <div 
               className="progress-container"
               onMouseOver={() => handleMouseOverBox9(86)}  
               onMouseOut={handleMouseOutBox9}
               >  
              <progress className='pro-f' value={progressWidthBox9}max="100"></progress>
             <span className="progress-text">{progressWidthBox9}%</span>

             <div class="circle-dart-container">
  <img class="circle-dart-image" src="./img/python.png" alt="" />
  <p class="text-after-dart-circle">Level:</p> <span class="a-dart-one">Advance</span>
</div>
       </div>

    </div>


    <div className="box">
    <h2 className="box-heading">Swift</h2>
    
               <div 
               className="progress-container"
               onMouseOver={() => handleMouseOverBox10(84)}  
               onMouseOut={handleMouseOutBox10}
               >  
              <progress className='pro-f' value={progressWidthBox10} max="100"></progress>
             <span className="progress-text">{progressWidthBox10}%</span>

             <div class="circle-container">
  <img class="circle-image" src="./img/swift.png" alt="" />
  <p class="text-after-circle">Level:</p> <span class="a-one">Advance</span>
</div>
       </div>
       
    </div> 
  
  </div>

  
  <div className="boxes-container">
    <div className="box">
    <h2 className="box-heading">FlutterFlow</h2>
    
            <div 
               className="progress-container"
               onMouseOver={() => handleMouseOverBox11(91)}  
               onMouseOut={handleMouseOutBox11}
               >  
              <progress className='pro-f' value={progressWidthBox11} max="100"></progress>
             <span className="progress-text">{progressWidthBox11}%</span>

                    <div class="circle-flow-container">
  <img class="circle-flow-image" src="./img/flutterflow.png" alt="" />
  <p class="text-after-flow-circle">Level:</p> <span class="a-flow-one">Advance</span>
</div>

       </div>

    </div>


    <div className="box">
    <h2 className="box-heading">Javascipt</h2>
    
                <div 
               className="progress-container"
               onMouseOver={() => handleMouseOverBox12(75)}  
               onMouseOut={handleMouseOutBox12}
               >  
              <progress className='pro-f' value={progressWidthBox12}max="100"></progress>
             <span className="progress-text">{progressWidthBox12}%</span>

             <div class="circle-dart-container">
  <img class="circle-dart-image" src="./img/js.png" alt="" />
  <p class="text-after-dart-circle">Level:</p> <span class="a-dart-one">Advance</span>
</div>
       </div>
       
    </div> 
  
  </div>
  
  <div className="boxes-container">
    <div className="box">
    <h2 className="box-heading">HTML/CSS</h2>
    
            <div 
               className="progress-container"
               onMouseOver={() => handleMouseOverBox13(83)}  
               onMouseOut={handleMouseOutBox13}
               >  
              <progress className='pro-f' value={progressWidthBox13} max="100"></progress>
             <span className="progress-text">{progressWidthBox13}%</span>

                   <div class="circle-dart-container">
  <img class="circle-dart-image" src="./img/html5.png" alt="" />
  <p class="text-after-dart-circle">Level:</p> <span class="a-dart-one">Advance</span>
</div>
       </div>

    </div>


    <div className="box">
    <h2 className="box-heading">React</h2>
    
    <div 
               className="progress-container"
               onMouseOver={() => handleMouseOverBox14(74)}  
               onMouseOut={handleMouseOutBox14}
               > 
              <progress className='pro-f' value={progressWidthBox14} max="100"></progress>
             <span className="progress-text">{progressWidthBox14}%</span>

             <div class="circle-container">
  <img class="circle-image" src="./img/react.png" alt="" />
  <p class="text-after-circle">Level:</p> <span class="a-one">Advance</span>
</div>
       </div>
       
    </div> 
  
  </div>
  
  <div className="boxes-container">
    <div className="box">
    <h2 className="box-heading">Shopify</h2>
    
    <div 
               className="progress-container"
               onMouseOver={() => handleMouseOverBox15(91)}  
               onMouseOut={handleMouseOutBox15}
               > 
              <progress className='pro-f' value={progressWidthBox15} max="100"></progress>
             <span className="progress-text">{progressWidthBox15}%</span>

             <div class="circle-shopify-container">
  <img class="circle-shopify-image" src="./img/shopify.png" alt="" />
  <p class="text-after-shopify-circle">Level:</p> <span class="a-one">Advance</span>
</div>
       </div>

    </div>


    <div className="box">
    <h2 className="box-heading">Linux</h2>
    
    <div 
               className="progress-container"
               onMouseOver={() => handleMouseOverBox16(75)}  
               onMouseOut={handleMouseOutBox16}
               > 
              <progress className='pro-f' value={progressWidthBox16} max="100"></progress>
             <span className="progress-text">{progressWidthBox16}%</span>

                        <div class="circle-dart-container">
  <img class="circle-dart-image" src="./img/linux.png" alt="" />
  <p class="text-after-dart-circle">Level:</p> <span class="a-dart-one">Advance</span>
</div>
       </div>
       
    </div> 
  



  
  </div>
  <div className="boxes-container">
    <div className="box">
    <h2 className="box-heading">Kali Linux</h2>
    
    <div 
               className="progress-container"
               onMouseOver={() => handleMouseOverBox17(73)}  
               onMouseOut={handleMouseOutBox17}
               > 
              <progress className='pro-f' value={progressWidthBox17} max="100"></progress>
             <span className="progress-text">{progressWidthBox17}%</span>

             <div class="circle-dart-container">
  <img class="circle-dart-image" src="./img/kali.png" alt="" />
  <p class="text-after-dart-circle">Level:</p> <span class="a-dart-one">Advance</span>
</div>
       </div>

    </div>


    <div className="box">
    <h2 className="box-heading-l">Ghidra Revese Engineering</h2>
    
    <div 
               className="progress-container"
               onMouseOver={() => handleMouseOverBox18(72)}  
               onMouseOut={handleMouseOutBox18}
               > 
              <progress className='pro-f' value={progressWidthBox18} max="100"></progress>
             <span className="progress-text">{progressWidthBox18}%</span>

             <div class="circle-dart-container">
  <img class="circle-dart-image" src="./img/ghidra.png" alt="" />
  <p class="text-after-dart-circle">Level:</p> <span class="a-dart-one">Advance</span>
</div>
       </div>
       
    </div> 
  
  </div>
</div>


  <div className="column-right">
    <h3 className="col-one">As a designer</h3>
    


    <div className="boxes-container">
    <div className="box">
    <h2 className="box-heading">Figma</h2>
    
    <div 
               className="progress-container"
               onMouseOver={() => handleMouseOverBox19(90)}  
               onMouseOut={handleMouseOutBox19}
               > 
              <progress className='pro-f' value={progressWidthBox19} max="100"></progress>
             <span className="progress-text">{progressWidthBox19}%</span>

             <div class="circle-container">
  <img class="circle-image" src="./img/figma.png" alt="" />
  <p class="text-after-circle">Level:</p> <span class="a-one">Advance</span>
</div>
       </div>

    </div>


    <div className="box">
    <h2 className="box-heading">Sketch</h2>
    
    <div 
               className="progress-container"
               onMouseOver={() => handleMouseOverBox20(90)}  
               onMouseOut={handleMouseOutBox20}
               > 
              <progress className='pro-f' value={progressWidthBox20} max="100"></progress>
             <span className="progress-text">{progressWidthBox20}%</span>

             <div class="circle-container">
  <img class="circle-image" src="./img/sketch.png" alt="" />
  <p class="text-after-circle">Level:</p> <span class="a-one">Advance</span>
</div>
       </div>
       
    </div> 
  
  </div>



 




  <div className="boxes-container">
    <div className="box-l">
    <h2 className="box-heading">Adobe Illustartor</h2>
    
    <div 
               className="progress-container"
               onMouseOver={() => handleMouseOverBox21(90)}  
               onMouseOut={handleMouseOutBox21}
               > 
              <progress className='pro-f' value={progressWidthBox21} max="100"></progress>
             <span className="progress-text">{progressWidthBox21}%</span>

             <div class="circle-ai-container">
  <img class="circle-ai-image" src="./img/ai.png" alt="" />
  <p class="text-after-ai-circle">Level:</p> <span class="a-one">Advance</span>
</div>
       </div>

    </div>


  
  
  </div>










  </div>
  
</div>

</div>
    </section>
  );
}
