
import Hero from "./components/layout/Hero";
import ContactMe from "./components/Sections/ContactMe";
import ProjectsSections from "./components/Sections/ProjectsSections";
import SkillsSections from "./components/Sections/SkillsSections";

export default function Home() {
  return (
    // <div className="font-sans w-max-5xl mx-auto ">
    //   <section className="w-fit">
    <>
    <Hero/>
        <SkillsSections/>
        <ProjectsSections/>
        <ContactMe/>
    </>
         
      // </section>
     
    // </div>
  );
}
