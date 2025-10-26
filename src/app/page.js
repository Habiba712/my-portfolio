'use client';
import ScrollTop from "../../public/icons/SVG/scroll-totop";
import Hero from "./components/layout/Hero";
import AboutMe from "./components/Sections/AboutMeSection";
import ContactMe from "./components/Sections/ContactMe";
import ProjectsSections from "./components/Sections/ProjectsSections";
import SkillsSections from "./components/Sections/SkillsSections";

const handleScrolltoTop = ()=>{
  window.scrollTo({top:-10, behavior:'smooth'})
}
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
         <div className=" w-full flex justify-end py-3 px-6">
          <button onClick={()=>handleScrolltoTop()}>
             <ScrollTop className="cursor-pointer  p-2 w-10 h-10 flex bg-[#F7A5A5] text-white rounded-full " />
          </button>
         
         </div>
    </div>
         
      // </section>
     
    // </div>
  );
}
