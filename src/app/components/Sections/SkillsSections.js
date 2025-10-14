'use client'
import { useState } from "react";
import SectionHeader from "../layout/SectionHeader";
import ToolSlider from "../ToolsSlider";


export default function SkillsSections() {
    const [tools, setTools] = useState([
        { name: "React", logo: "./icons/react-2.svg" },
        { name: "Next.js", logo: "./icons/next-js.svg" },
        { name: "Tailwind CSS", logo: "./icons/tailwind-css-2.svg" },
        { name: "Html", logo: "./icons/html.svg" },
        { name: "Redux Saga", logo: "./icons/redux-saga.svg" },
        { name: "Laravel", logo: "./icons/laravel.svg" },
        { name: "MongoDB", logo: "./icons/mongodb-icon-2.svg" },
        { name: "MySQL", logo: "./icons/mysql.svg" },
        { name: "Git", logo: "./icons/git.svg" },
        { name: "Github", logo: "./icons/github-2.svg" },
        { name: "Figma", logo: "./icons/figma-icon.svg" },
        { name: "Adobe Illustrator", logo: "./icons/adobe-illustrator.svg" },    
    
    ])

    return (
        <section className="relative -mx-10 mt-8 overflow-hidden" style={{
            width: '107%',
        }}>
            <SectionHeader title={'My Tools'} description={'Here are some of my skills and technologies I work with.'} />

            <div className="w-full flex flex-row justify-between items-center gap-8 p-4 shadow-lg overflow-x-auto  bg-[#ffecf7ff] ">
                {/* a slide of skills and logos ?  */}
               <ToolSlider tools={tools} />
            </div>
        </section>
    )
}