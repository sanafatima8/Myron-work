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

export default function Home() {
  return (
    <>
      <HeroSection />
      <Work/>
      <MySkills />
      <AboutMe />
      <Study/>
      <Corevalue/>
      <ClientTestimonials/>
      <Serve/>
     
      <ContactMe />
      <Footer />
    </>
  );
}
