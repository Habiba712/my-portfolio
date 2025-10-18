'use client'
import { useState } from "react";
import SectionHeader from "../layout/SectionHeader";
import ToolSlider from "../ToolsSlider";


export default function SkillsSections() {
    const [tools, setTools] = useState([
        { _id:1,name: "React", logo: "./icons/react-2.svg" },
        {_id:2, name: "Next.js", logo: "./icons/next-js.svg" },
        {_id:3, name: "Tailwind CSS", logo: "./icons/tailwind-css-2.svg" },
        {_id:4, name: "Html", logo: "./icons/html.svg" },
        {_id:5, name: "Redux Saga", logo: "./icons/redux-saga.svg" },
        {_id:6, name: "Laravel", logo: "./icons/laravel.svg" },
        {_id:7, name: "MongoDB", logo: "./icons/mongodb-icon-2.svg" },
        {_id:8, name: "MySQL", logo: "./icons/mysql.svg" },
        {_id:9, name: "Git", logo: "./icons/git.svg" },
        {_id:10, name: "Github", logo: "./icons/github-2.svg" },
        {_id:11, name: "Figma", logo: "./icons/figma-icon.svg" },
        {_id:12, name: "Adobe Illustrator", logo: "./icons/adobe-illustrator.svg" },    
    
    ])

    return (
        <>
         <section className="relative gap-3 mb-4 mt-3 overflow-hidden" 
       >
            <SectionHeader title={'My Tools'} description={'Here are some of my skills and technologies I work with.'} />

            <div className="w-full mt-3 flex flex-row justify-between items-center gap-8 p-4 shadow-lg overflow-x-auto  bg-[#ffecf7ff] ">
                {/* a slide of skills and logos ?  */}
               <ToolSlider tools={tools} />
            </div>
        </section>

        </>
       
    )
}