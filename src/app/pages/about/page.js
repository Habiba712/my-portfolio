'use client'

import SectionHeader from "@/app/components/layout/SectionHeader";
import Backarrow from "public/icons/SVG/back-arrow";
import { motion } from "framer-motion";
import CardIcon from "public/icons/SVG/card";
import LeafIcon from "public/icons/SVG/leaf";
import ExpressIcon from "public/icons/SVG/express";
import ReactIcon from "public/icons/SVG/react";
import ResponsiveIcon from "public/icons/SVG/responsive";
import FrontendIcon from "public/icons/SVG/frontend";
import BackendIcon from "public/icons/SVG/backend";
import ToolsIcon from "public/icons/SVG/tools";
import CheckIcon from "public/icons/SVG/check";
export default function About() {
    const timelineItems = [
        {
            year: '2019',
            title: 'Bacalaureate in Physics & Chemistry',
            description: 'Gradutaed high school with a focus on physics and chemistry.',
        },
        {
            year: '2022',
            title: 'Bachlor degree in Economics & Management',
            description: 'Graduated from University of Caddi Ayyad with a degree in Economics and Management.',
        },
        {
            year: '2024',
            title: 'Technician specializing in digital development',
            description: 'A diploma focused on web development, programming, and digital technologies from OFPPT NTIC SYBA.',
        }
    ];

    return (
        <>
            <header className="desktop-header project-title w-full grid grid-cols-2 items-center justify-between   border-b border-[navy] shadow-lg border-opacity-50">
                <div className="text-4xl h-full font-bold">


                    <h1 className="logo w-full h-full flex items-center justify-start cursor-pointer w-fit "
                        onClick={() => {
                            redirect('/')
                        }}
                    >Habiba Taliby
                    </h1>


                </div>
                <div className="w-full flex justify-end items-center">
                    <a className="btn-back" href="/#projects">
                        <Backarrow className="w-8 h-8" /> Back to Projects
                    </a>
                </div>




            </header>


            {/* for mobile */}
            <header className="mobile-menu w-full">
                <div className="flex flex-col">
                    <div className="flex justify-between ">
                        <div className="text-4xl font-bold text-start ">
                            <h1 className="logo  h-full flex items-center justify-start text-nowrap"
                                onClick={() => {
                                    redirect('/')
                                }}
                            >Habiba Taliby
                            </h1>

                        </div>
                        <div className="w-full flex justify-end">
                            <a className="btn-back" href="/#projects">
                                <Backarrow className="w-8 h-8" />
                            </a>
                        </div>

                    </div>


                </div>
            </header>
            <section className="mt-15 w-full flex flex-col items-center justify-center py-6">


                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="w-full flex flex-col items-center justify-center"
                >
                    <SectionHeader title={"About Me"} description={"Get to know more about my journey and what I do"} />
                    <div className="about-page-container">
                        <div className="about-page-content">
                            <p className="text-gray-700 leading-relaxed">
                                Hey, I'm <span className="font-bold animated-gradient-text">Habiba Taliby</span>, — a web developer who enjoys building clean, functional, and detail-oriented projects with a strong focus on user experience. I work mainly with React, <span className="font-bold animated-gradient-text">Next.js</span>, <span className="font-bold animated-gradient-text">Tailwind CSS</span>, and <span className="font-bold animated-gradient-text">MongoDB</span>, and I love combining logic and design to create things that just flow.
                                <br /><br />
                                I've always had a curiosity for how things work — whether it's debugging a stubborn API call, cleaning up messy code, or making an interface feel more intuitive. My approach is pretty simple: write code that's clear, scalable, and actually enjoyable to use.
                                <br /><br />
                                I also have experience working with SEO optimization, site performance, and even the occasional WordPress project when it makes sense for the client <span className="font-bold animated-gradient-text">(Elementor, Yoast SEO, caching tools — the whole stack)</span>.
                                <br /><br />
                                When I'm not coding, you'll probably find me experimenting with new UI ideas, reading about cybersecurity and OSINT, or just having coffee while breaking something in my dev environment (and then fixing it, obviously).
                            </p>
                        </div>



                    </div>

                </motion.section>

                {/* Custom timelines section */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="w-full flex flex-col items-center justify-center"
                >

                    <SectionHeader title={"My Journey"} description={"Here's a look at my academic journey"} />
                    <div className=" w-full md:w-[90%] py-6 mx-auto">

                        <div className="w-[90%] md:w-full  rounded-lg mx-auto">

                            <div className="relative">
                                {/* Vertical Line */}
                                <div
                                    className="journey-timeline absolute top-0 bottom-0 left-7 md:left-1/2  w-0.5"
                                >

                                </div>

                                {
                                    timelineItems.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`
                                            relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                                            flex-row 
                                            `}
                                        >
                                            {/* year badge */}
                                            <div
                                                className="absolute left-7 mr-4  md:left-1/2 
                                        transform -translate-x-1/2 md:-translate-x-1/2 w-16 h-16 font-bold text-white rounded-full py-6 px-6 journey-timeline flex items-center justify-center border-4 border-white"
                                            >{item.year}</div>

                                            {/* cardes */}
                                            <div
                                                className={`
                                            py-4 w-full ml-11 flex justify-end md:block  md:w-[calc(50%-4rem)]
                                            ${index % 2 === 0 ? 'md:pr-3 md:ml-10' : 'md:pl-3 md:ml-10'} 
                                            `}
                                            >
                                                <div className="journey-card w-[90%] border-l-4 border-[#F7A5A5] rounded-lg py-6 px-3 shadow-lg hover:shadow-xl transition-shadow duration-300">

                                                    <h3>{item.title}</h3>
                                                    <p>{item.description}</p>
                                                </div>


                                            </div>

                                        </div>
                                    ))
                                }

                            </div>


                        </div>
                    </div>
                </motion.section>


                {/* Custom timelines section */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="w-full flex flex-col items-center justify-center"
                >
                    <SectionHeader title={"My Main Tech Stack"} description={"The MERN stack is where I feel most at home — here's how I use it"} />

                    <div className="main-stack-container">

                        <div className="main-stack-card">

                            <div className="icon-container">

                                <LeafIcon className="icon w-15 h-15 rounded-lg" />

                            </div>



                            <h3 className="">MongoDB</h3>
                            <p className="">My go-to NoSQL database for flexible, scalable data storage. Perfect for projects that need quick iterations and complex data structures.</p>
                            <div className="main-stack-tags">
                                <span className="stack-tag">Mongoose</span>
                                <span className="stack-tag">MongoDB Atlas</span>

                            </div>


                        </div>
                        <div className="main-stack-card">

                            <div className="icon-container">
                                <ExpressIcon className="icon w-15 h-15 rounded-lg" />

                            </div>



                            <h3 className="">Express & Node.js</h3>
                            <p className="">Building robust APIs and server-side logic. I handle authentication, data validation, and business logic with clean, maintainable code.</p>
                            <div className="main-stack-tags">
                                <span className="stack-tag">REST APIs</span>
                                <span className="stack-tag">JWT Auth</span>
                                <span className="stack-tag">Middleware</span>

                            </div>


                        </div>
                        <div className="main-stack-card">

                            <div className="icon-container">

                                <ReactIcon className="icon w-15 h-15 rounded-lg" />

                            </div>



                            <h3 className="">React & Next.js</h3>
                            <p className="">My frontend powerhouse. React for dynamic UIs and Next.js for server-side rendering, routing, and optimal performance. This is where the magic happens.</p>
                            <div className="main-stack-tags">
                                <span className="stack-tag">SSR/SSG</span>
                                <span className="stack-tag">React Hooks</span>
                                <span className="stack-tag">API Routes</span>

                            </div>


                        </div>
                        <div className="main-stack-card">

                            <div className="icon-container">

                                <ResponsiveIcon className="icon w-15 h-15 rounded-lg" />

                            </div>



                            <h3 className="">Tailwind CSS</h3>
                            <p className="">Rapid, utility-first styling that keeps my CSS clean and my development speed fast. Perfect for creating responsive, modern designs.</p>
                            <div className="main-stack-tags">
                                <span className="stack-tag">Responsive</span>
                                <span className="stack-tag">Custom Config</span>
                                <span className="stack-tag">Dark Mode</span>

                            </div>


                        </div>
                    </div>
                </motion.section>
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="w-full flex flex-col items-center justify-center"
                >
                    <SectionHeader title={"Skills & Expertise"} description={"Beyond the MERN stack, here's what else I bring to the table"} />
                    <div className="main-skills-container">

                        <div className="skills-stack-card">

                            <h3 className="title-skills"> <FrontendIcon className="icon w-10 h-10 rounded-lg" />Frontend</h3>

                            <div className="skills-stack-list">
                                <span className="skill-item"><CheckIcon className="icon w-5 h-5" /> React.js & Next.js
                                </span>
                                <span className="skill-item"><CheckIcon className="icon w-5 h-5" /> Tailwind CSS
                                </span>                       <span className="skill-item"><CheckIcon className="icon w-5 h-5" /> Responsive Design
                                </span>                       <span className="skill-item"><CheckIcon className="icon w-5 h-5" /> Framer Motion
                                </span>                       <span className="skill-item"><CheckIcon className="icon w-5 h-5" /> CSS/SCSS
                                </span>




                            </div>


                        </div>

                        <div className="skills-stack-card">

                            <h3 className="title-skills"> <BackendIcon className="icon w-10 h-10 rounded-lg" />Backend</h3>

                            <div className="skills-stack-list">
                                <span className="skill-item"><CheckIcon className="icon w-5 h-5" />Node.js & Express
                                </span>
                                <span className="skill-item"><CheckIcon className="icon w-5 h-5" />MongoDB & Mongoose
                                </span>
                                <span className="skill-item"><CheckIcon className="icon w-5 h-5" />REST APIs
                                </span>
                                <span className="skill-item"><CheckIcon className="icon w-5 h-5" />MySQL
                                </span>
                                <span className="skill-item"><CheckIcon className="icon w-5 h-5" />JWT Authentication
                                </span>


                            </div>


                        </div>

                        <div className="skills-stack-card">

                            <h3 className="title-skills"> <ToolsIcon className="icon w-10 h-10 rounded-lg" />Other Tools</h3>

                            <div className="skills-stack-list">
                                <span className="skill-item"><CheckIcon className="icon w-5 h-5" /> Git & GitHub
                                </span>
                                <span className="skill-item"><CheckIcon className="icon w-5 h-5" /> Figma & Adobe Illustrator
                                </span>
                                <span className="skill-item"><CheckIcon className="icon w-5 h-5" />SEO Optimization
                                </span>
                                <span className="skill-item"><CheckIcon className="icon w-5 h-5" />WordPress & Elementor
                                </span>
                                <span className="skill-item"><CheckIcon className="icon w-5 h-5" /> Vercel & Deployment
                                </span>


                            </div>


                        </div>

                    </div>
                </motion.section>


                {/* </motion.section> */}

            </section>
        </>

    )
}