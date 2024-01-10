import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Testimonial from "../Testimonials";
import Work from "../Work";
import Study from "../Study";
import Corevalue from '../Corevalue';
import ClientTestimonials from '../ClientTestimonials';
import Serve from '../Serve';

import IntroPage from '../IntroPage'; // Correct the casing if needed


export default function Home() {
  return (
    <>
     <IntroPage/>
      <HeroSection />
      <Study/>
      <Work/>
      <MySkills />
      <AboutMe />
   
      <Corevalue/>
      <ClientTestimonials/>
      <Serve/>
     
      <ContactMe />
      <Footer />
    </>
  );
}
