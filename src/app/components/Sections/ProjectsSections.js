'use client'
import { useState } from "react";
import SectionHeader from "../layout/SectionHeader";
import Image from "next/image";

import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";
import { redirect } from "next/navigation";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "700"], // choose what you need
    variable: "--font-fancy",
});
export default function ProjectsSections() {

    const [expandIndex, setExpandIndex] = useState(2)
    const [expandText, setExpandText] = useState(false)

    const [slides, setSlides] = useState([
        { _id: 104270931, name: "ex1", pic: "/my_projects/food_ordering-app-homepageD.png" },
        { _id: 104270932, name: "ex2", pic: "/my_projects/food_ordering-app-homepage.png" },
        { _id: 104270933,name: "ex4", pic: "/my_projects/food_ordering-app-orders.png" }

    ])
    const handleExpandText = () => {
        setExpandText(!expandText)
    }
    console.log('expandText', expandText)
    return (
        <section id="projects" className="w-full  flex flex-col gap-10 items-center smooth-scroll transition-all duration-500 ease-in-out">
            <SectionHeader title={'My Projects'} description={'Here are some of my projects I have worked on.'} />

         
{/* <hr className="w-[60%] border border-gray-100"/> */}
<motion.section
 initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.3 }}
      className="p-8"

>
   <div className=" flex justify-center gap-3 h-full mx-auto w-full ">
                <div className="">
                    <Image
                        alt={"homepage_mobile"}
                        src={"/my_projects/food_ordering-app-homepageMobile.png"}
                        className="animate-slideInRight object-cover h-100 poistion relative left-30 rounded-lg border z-3 
                        shadow-[0_10px_40px_rgba(0,0,0,0.25)] scale-110 hover:scale-120 transition-all ease-in-out duration-500 .
                        "
                        width={900}
                        height={700}

                    />
                </div>
                <div className="w-full animate-dropBottom">
                    <Image src="/my_projects/food_ordering-app-homepageD.png"
                        width={2600}
                        height={400}

                        alt="homepage"
                        className="object-cover object-[right_top]  
                        w-full
                        h-100 poistion relative left-25 rounded-lg -z-2" />
                </div>

                <div className="animate-slideInLeft p-4 m-2 w-[85%] h-full position relative z-1 right-10 top-20"
                    style={{
                        "background": "linear-gradient(135deg,rgba (255,255,255,0.1),rgba(255,255,255,0))",
                        "WebkitBackdropFilter": "blur(20px)",
                        "backdropFilter": "blur(20px)",
                        "boxShadow": "0 8px 20px 0 rgba(0,0,0,0.37)",
                        "border": "1px solid rgba(255,255,255,0.18)",
                        "borderRadius": "5px",
                    }}
                >
                    <h3 className="text-center">Food Ordering App</h3>
                    <span className="text-sm italic text-gray-700 ">#js #react #nextjs #tailwindcss #html #css #javascript #nodejs #expressjs</span>
                    <p className={`mt-4 font-sans text-gray-700
    whitespace-per-line-2 text-wrap `}
                        style={{
                            overflow: 'hidden',
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: expandText ? 'none' : 3


                        }
                        }
                    >This is a food ordering app that allows users to order food from restaurants and get it delivered to their doorstep. It uses React.js for the frontend, Next.js for the backend, and MongoDB for the database ood from restaurants and get it delivered to their doorstep. It uses React.js for the frontend, Next.js for the backend, and MongoDB for the database ood from restaurants and get it delivered to their doorstep. It uses React.js for the frontend, Next.js for the backend, and MongoDB for the database
                        and MongoDB for the database ood from restaurants and get it delivered to their doorstep. It uses React.js for the frontend, Next.js for the backend, and MongoDB for the database ood from restaurants and get it delivered to their doorstep. It uses React.js for the frontend, Next.js for the backend, and MongoDB for the databaseand MongoDB for the database ood from restaurants and get it delivered to their doorstep. It uses React.js for the frontend, Next.js for the backend, and MongoDB for the database ood from restaurants and get it delivered to their doorstep. It uses React.js for the frontend, Next.js for the backend, and MongoDB for the databaseand MongoDB for the database ood from restaurants and get it delivered to their doorstep. It uses React.js for the frontend, Next.js for the backend, and MongoDB for the database ood from restaurants and get it delivered to their doorstep. It uses React.js for the frontend, Next.js for the backend, and MongoDB for the database
                    </p>
                    <div className="w-full mt-4 flex justify-end">
                        <button onClick={()=>{
                            handleExpandText
                                redirect(`/pages/projectss/${slides[0]._id}`)
                        }
                        } className="cursor-pointer transition-all duration-600 ease-in-out  hover:scale-104">{expandText ? `Less Details` : `More Details`}</button>
                    </div>



                </div>
            </div>

</motion.section>

                 
   
        </section>

    )
}