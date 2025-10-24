'use client'
import SectionHeader from "../layout/SectionHeader";
import Image from "next/image";
import { useContext, useState, useEffect } from "react"
import { ThemeContext } from "../../components/AppContext"
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";
import { redirect } from "next/navigation";
import LinkArrow from "../../../../public/icons/SVG/link_arrow";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "700"], // choose what you need
    variable: "--font-fancy",
});
export default function ProjectsSections() {

    const [expandIndex, setExpandIndex] = useState(2)
    const [expandText, setExpandText] = useState(false)
    const { myProjects } = useContext(ThemeContext)

    const [myProjectsList, setMyProjectsList] = useState([])

    useEffect(() => {
        try {
            if (myProjects && myProjects.length > 0) {
                setMyProjectsList(myProjects)
            }
        }
        catch (error) {
            console.error('error', error)
        }
    }, [myProjects])
    console.log('myProject', myProjects)
    if (!myProjects) {
        return (
            <div>
                <h2 className="text-4xl font-bold text-center">Loading....</h2>
            </div>
        )
    }
    console.log('myProjectsList', myProjectsList)

    const handleExpandText = () => {
        setExpandText(!expandText)
    }
    console.log('expandText', expandText)
    return (
        <>


            <section id="projects" className="desktop-projects w-full  flex flex-col items-center smooth-scroll transition-all duration-500 ease-in-out">
                <SectionHeader title={'My Projects'} description={'Here are some of my projects I have worked on.'} />


                {/* <hr className="w-[60%] border border-gray-100"/> */}
                {
                    myProjectsList.map((item, index) => (
                        <div className="w-[60%]">

                            <motion.section
                            key={index || item._id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="py-5"

                        >
                            <div className=" grid grid-cols-2 min-h-[300px] items-start py-4 px-5  gap-4 bg-white h-fit mx-auto  rounded-lg">
                                <div className=" h-full flex justify-center items-center">
                                    <Image
                                        alt={"homepage_desktop"}
                                        src={item.pic[0]}
                                        className=" animate-slideInRight  rounded-lg border 
                        scale-110 hover:scale-120 transition-all ease-in-out duration-500 object-cover
                        "
                                        width={300}
                                        height={400}

                                    />
                                </div>
                            
                                <div className="animate-slideInLeft   h-full flex flex-col items-center justify-between"
                                   
                                >
                                    <div className="text-start">
                                        <h3 className="">{item.name}</h3>
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
                                    >ee backend, 
                                    </p>  
                                    </div>
                                  
                                    <div className="w-full mt-4 flex justify-end">
                                        <button onClick={() => {
                                            handleExpandText
                                            redirect(`/pages/projectss/${item._id}`)
                                        }
                                        } className="cursor-pointer py-3 px-3  transition-all duration-600 flex gap-3 justify-between  items-center ease-in-out border-b-2 border-transparent hover:scale-104 hover:link-icon">


                                            {!expandText && <span className="link-icon">More Details</span>}
                                            <LinkArrow className="link-icon w-5 h-5" />

                                        </button>
                                    </div>



                                </div>
                            </div>

                        </motion.section>
                        </div>
                        
                    ))
                }





            </section>


            {/* mobile version */}
            <section id="projects" className="mobile-projects w-full  flex flex-col gap-3 items-center smooth-scroll transition-all duration-500 ease-in-out">
                <SectionHeader title={'My Projects'} description={'Here are some of my recent projects'} />


                {/* <hr className="w-[60%] border border-gray-100"/> */}
                {
                    myProjectsList.map((item, index) => (
                        <motion.section
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="px-3 py-3"

                        >
                            <div className="flex flex-col border rounded-lg  px-3 py-3 justify-center gap-3 w-full bg-white "
                                style={{

                                    "border": "1px solid rgba(255,255,255,0.18)",

                                }}
                            >
                                <div className="w-full px-3 py-3">
                                    <Image
                                        alt={"homepage_mobile"}
                                        src={item.pic[0]}
                                        className="w-full animate-slideInRight object-cover cover[top_right] rounded-lg border
                       scale-110
                        transition-all ease-in-out duration-500
                        "
                                        width={200}
                                        height={200}

                                    />
                                </div>


                                <div className="animate-slideInLeft text-gray-100  px-3 py-3 w-full "
                                    style={{
                                        // "background": "#ffffff",
                                        // "border": "1px solid rgba(255,255,255,0.18)",
                                        "borderRadius": "5px",
                                    }}
                                >
                                    <h3 className="text-center">{item.name}</h3>
                                    <span className="text-sm italic ">#js #react #nextjs #tailwindcss #html #css #javascript #nodejs #expressjs</span>
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
                                        <button onClick={() => {
                                            handleExpandText
                                            redirect(`/pages/projectss/${item._id}`)
                                        }
                                        } className="cursor-pointer py-3 px-3 transition-all duration-600 flex gap-3 justify-between items-centerease-in-out  hover:scale-104">


                                         
                                            {!expandText && <span className="link-icon">More Details</span>}
                                            <LinkArrow className="link-icon w-5 h-5" />

                                        </button>
                                    </div>



                                </div>
                            </div>

                        </motion.section>
                    ))
                }





            </section>

        </>

    )
}