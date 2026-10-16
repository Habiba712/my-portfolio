'use client';
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import AboutMe from "./components/Sections/AboutMeSection";
import ContactMe from "./components/Sections/ContactMe";
import ProjectsSections from "./components/Sections/ProjectsSections";
import SkillsSections from "./components/Sections/SkillsSections";


export default function Home() {
  return (

    <>
      <Header />
      <Hero />
      <SkillsSections />
      <ProjectsSections />
      <AboutMe />
      <ContactMe />

    </>
  );
}
