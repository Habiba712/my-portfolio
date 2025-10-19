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


            <section id="projects" className="desktop-projects w-full  flex flex-col gap-10 items-center smooth-scroll transition-all duration-500 ease-in-out">
                <SectionHeader title={'My Projects'} description={'Here are some of my projects I have worked on.'} />


                {/* <hr className="w-[60%] border border-gray-100"/> */}
                {
                    myProjectsList.map((item, index) => (
                        <motion.section
                            key={index || item._id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="p-8"

                        >
                            <div className=" flex justify-center gap-3 h-full mx-auto w-full ">
                                <div className="w-full">
                                    <Image
                                        alt={"homepage_desktop"}
                                        src={item.pic[2]}
                                        className="animate-slideInRight  h-100 poistion relative left-30 rounded-lg border z-3 
                        shadow-[0_10px_40px_rgba(0,0,0,0.25)] scale-110 hover:scale-120 transition-all ease-in-out duration-500 object-cover
                        "
                                        width={600}
                                        height={500}

                                    />
                                </div>
                                <div className="w-full animate-dropBottom">
                                    <Image src={item.pic[0]}

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
                                    <h3 className="text-center">{item.name}</h3>
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
                                        <button onClick={() => {
                                            handleExpandText
                                            redirect(`/pages/projectss/${item._id}`)
                                        }
                                        } className="cursor-pointer py-3 px-3 border border-gray-100 rounded-lg transition-all duration-600 flex gap-3 justify-between text-gray-100 items-centerease-in-out  hover:scale-104">


                                            {!expandText && <span>More Details</span>}
                                            <LinkArrow className="w-5 h-5" />

                                        </button>
                                    </div>



                                </div>
                            </div>

                        </motion.section>
                    ))
                }





            </section>


            {/* mobile version */}
            <section id="projects" className="mobile-projects w-full  flex flex-col gap-3 items-center smooth-scroll transition-all duration-500 ease-in-out">
                <SectionHeader title={'My Projects'} description={'Here are some of my projects I have worked on.'} />


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
                            <div className="flex flex-col border rounded-lg  px-3 py-3 justify-center gap-3 w-full"
                                style={{

                                    "border": "1px solid rgba(255,255,255,0.18)",

                                }}
                            >
                                <div className="w-full px-3 py-3">
                                    <Image
                                        alt={"homepage_mobile"}
                                        src={item.pic[0]}
                                        className="w-full animate-slideInRight object-cover cover[top_right] rounded-lg border
                        shadow-[0_10px_40px_rgba(0,0,0,0.25)] scale-110
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
                                        } className="cursor-pointer py-3 px-3 border border-gray-100 rounded-lg transition-all duration-600 flex gap-3 justify-between items-centerease-in-out  hover:scale-104">


                                            {!expandText && <span>More Details</span>}
                                            <LinkArrow className="w-5 h-5" />

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