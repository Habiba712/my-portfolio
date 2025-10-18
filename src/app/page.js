
import Hero from "./components/layout/Hero";
import AboutMe from "./components/Sections/AboutMeSection";
import ContactMe from "./components/Sections/ContactMe";
import ProjectsSections from "./components/Sections/ProjectsSections";
import SkillsSections from "./components/Sections/SkillsSections";

export default function Home() {
  return (
    // <div className="font-sans w-max-5xl mx-auto ">
    //   <section className="w-fit">
    <div className="w-full">
    <Hero/>
        <SkillsSections/>
        <ProjectsSections/>
<AboutMe/>
        <ContactMe/>
        
    </div>
         
      // </section>
     
    // </div>
  );
}
