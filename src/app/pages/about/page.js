'use client'

import SectionHeader from "@/app/components/layout/SectionHeader";

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
        <section className="mt-5 w-full flex flex-col items-center justify-center py-6">
            <SectionHeader title={"About Me"} description={"Read more about me"} />
            
            <div className="flex justify-center w-full mb-10">
                <div className="rounded-lg bg-white py-6 px-6 w-[90%] md:w-[60%] shadow-lg">
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

{/* Custom timelines section */}
<SectionHeader title={"My Journey"} description={"Here's a look at my academic journey"} />
<div className=" w-full md:w-[90%] py-6 mx-auto">
    
    <div className="w-[90%] md:w-full py-10 rounded-lg mx-auto">

        <div className="relative">
            {/* Vertical Line */}
            <div
            className="journey-timeline absolute top-0 bottom-0 left-7 md:left-1/2  w-0.5"
            >
                
            </div>

            {
                timelineItems.map((item, index)=>(
                    <div
                        key={index}
                        className={`
                            relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                            flex-row mb-12
                            `}
                    >
                        {/* year badge */}
                        <div
                        className="absolute left-7 mr-4  md:left-1/2 
                        transform -translate-x-1/2 md:-translate-x-1/2 w-16 h-16 font-bold text-white rounded-full py-6 px-6 journey-timeline flex items-center justify-center border-4 border-white"
                        >{item.year}</div>

                        {/* cardes */}
                        <div
                        className={`mb-3
                            py-4 w-full ml-8 flex justify-end md:block  md:w-[calc(50%-4rem)]
                            ${index % 2 === 0 ? 'md:pr-3 md:ml-10' : 'md:pl-3 md:ml-10'} 
                            `}
                        >
                            <div className=" w-[90%] bg-white border-l-4 border-[#F7A5A5] rounded-lg py-6 px-6 shadow-lg hover:shadow-xl transition-shadow duration-300">

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

















































            {/* Custom Timeline Section */}
            {/* <div className="w-full  py-16">
                <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">My Journey</h3>
                
                <div className="w-[90%] md:w-[70%] mx-auto">
                    <div className="relative">
                        Vertical Line 
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
                        
                        {timelineItems.map((item, index) => (
                            <div 
                                key={index} 
                                className={`relative mb-12 flex items-center ${
                                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                } flex-row`}
                            >
                                {/* Year Badge 
                                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg border-4 border-white z-10">
                                        <span className="text-white font-bold text-sm">{item.year}</span>
                                    </div>
                                </div>
                                
                                {/* Content Card 
                                <div className={`w-full md:w-[calc(50%-4rem)] ml-24 md:ml-0 ${
                                    index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                                }`}>
                                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
                                        <h4 className="text-xl font-bold text-gray-800 mb-2">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
        </section>
    )
}