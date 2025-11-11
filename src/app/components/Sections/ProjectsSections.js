'use client'
import SectionHeader from "../layout/SectionHeader";
import Image from "next/image";
import { useContext, useState, useEffect } from "react"
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";
import { redirect } from "next/navigation";
import LinkArrow from "../../../../public/icons/SVG/link_arrow";
import { myProjects } from "@/app/data/projects";
const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "700"], // choose what you need
    variable: "--font-fancy",
});
export default function ProjectsSections() {

    const [expandIndex, setExpandIndex] = useState(2)
    const [expandText, setExpandText] = useState(false)
    // const { myProjects } = useContext(ThemeContext)

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

            <SectionHeader title={'My Projects'} description={'Here are some of my recent projects'} />
            <section id="projects" className="desktop-projects w-full  flex flex-col items-center smooth-scroll transition-all duration-500 ease-in-out">



                {/* <hr className="w-[60%] border border-gray-100"/> */}
                <div className="grid grid-cols-3 gap-3 w-full p-4 mx-auto"


                >
                    {/* <div 
                    
                    >
                        <motion.section
                           
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="py-5">
                    
                           <div    style={{
                        "background": "linear-gradient(135deg,#1A2A4F,#1A2A4F)",
                        "WebkitBackdropFilter": "blur(50px)",
                        "backdropFilter": "blur(20px)",
                        "boxShadow": "0 8px 20px 0 rgba(0, 0, 0, 0.75)",
                        "border": "1px solid rgba(255,255,255,0.18)",
                        "borderRadius": "5px",
                    }}className="flex flex-col  items-center py-4 px-5  gap-4 bg-white    rounded-lg
                           
                           
                           "
                         
                           >
                            <h2 className="z-1 absolute">
                                Comming Soon
                            </h2>
                                <div className=" flex justify-center items-center ">
                                   <div className="bg-gray-300 rounded-lg h-[175px] w-[250px]">

                                   </div>
                                </div>
                            
                                <div className="animate-slideInLeft   h-full flex flex-col items-center justify-between"
                                   
                                >
                                    <div className="text-start "
                                    
                                    >
                                        <h3 className="">qoiruiwuq qåicu x qoi4</h3>
                                        <div className="whitespace-per-line-2 text-wrap"
                                       
                                        >
                                         
                                            <span className="text-sm italic text-gray-700   "
                                            style={{
                                                  fontSize: '13px'
                                            }}
                                            
                                           >oifeocq oiwe cq</span>
                                        
                                        </div>
                              
                                  
                                    <p className={`mt-4 font-sans text-gray-700
    whitespace-per-line-2 text-wrap `}
                                      
                                    >"eif cqiuepoiu pxqeou"
                                    </p>  
                                    </div>
                                  
                                    <div className="w-full mt-4 flex justify-end">
                                        <button onClick={() => {
                                          
                                        }
                                        } className=" hover:scale-104 ">


                                            {!expandText &&
                                            
                                            <span className="button-dark gap-2">More Details
                                            <LinkArrow className="w-5 h-5" /></span>}

                                        </button>
                                    </div>



                                </div>
                            </div>
                               </motion.section>
                    </div> */}

                    {
                        myProjectsList.map((item, index) => (
                            <div
                                key={index || item._id}
                                className="">

                                <motion.section
                                    key={index || item._id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: 'easeOut' }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    className="py-5"

                                >
                                    <div className="flex flex-col  items-center py-4 px-5  gap-4 bg-white    rounded-lg">
                                        <div className=" h-full flex justify-center items-center ">
                                            <Image
                                                alt={"homepage_desktop"}
                                                src={item?.pic[0]}
                                                className="   rounded-lg  
                         object-cover
                        "
                                                width={300}
                                                height={300}

                                            />
                                        </div>

                                        <div className="animate-slideInLeft   h-full flex flex-col items-center justify-between"

                                        >
                                            <div className="text-start "

                                            >
                                                <h3 className="whitespace-per-line-2 text-nowrap">{item?.name}</h3>
                                                <div className="whitespace-per-line-2 text-wrap"
                                                    style={{

                                                        overflowX: 'hidden',
                                                        display: '-webkit-box',
                                                        WebkitBoxOrient: 'vertical',
                                                        WebkitLineClamp: expandText ? 'none' : 1


                                                    }
                                                    }
                                                >
                                                    {
                                                        item?.tools ? item?.tools.map((tool, index) => (
                                                            <span className="text-sm italic text-gray-700   "
                                                                style={{
                                                                    fontSize: '13px'
                                                                }}

                                                                key={index}>{tool}</span>
                                                        )) : null
                                                    }
                                                </div>


                                                <p className={`mt-4 font-sans text-gray-700
    whitespace-per-line-2 text-wrap `}
                                                    style={{
                                                        overflow: 'hidden',
                                                        display: '-webkit-box',
                                                        WebkitBoxOrient: 'vertical',
                                                        WebkitLineClamp: expandText ? 'none' : 3


                                                    }
                                                    }
                                                >{Array.isArray(item?.description) ? item?.description[0] : 'null'}
                                                </p>
                                            </div>

                                            <div className="w-full mt-4 flex justify-end">
                                                <button onClick={() => {
                                                    handleExpandText
                                                    redirect(`/pages/projectss/${item._id}`)
                                                }
                                                } className=" hover:scale-110 transition-all duration-500 ease-in-out">


                                                    {!expandText &&

                                                        <span className="button-dark flex gap-3">More Details
                                                            <LinkArrow className="w-5 h-5" /></span>}

                                                </button>
                                            </div>



                                        </div>
                                    </div>

                                </motion.section>
                            </div>

                        ))
                    }
                </div>







            </section>


            {/* mobile version */}
            <div className="mobile-about flex w-full justify-center">  <section id="projects" className="flex flex-col items-end justify-end  psmooth-scroll transition-all duration-500 ease-in-out  w-[90%]">



                {/* <hr className="w-[60%] border border-gray-100"/> */}


                {
                    myProjectsList.map((item, index) => (
                        <motion.section
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="py-3"

                        >

                            <div className=" h-full border border-gray-300 rounded-lg bg-white items-cente"
                                style={{

                                    "border": "1px solid rgba(255,255,255,0.18)",

                                }}
                            >
                                <div className="w-full px-3 py-3">
                                    <Image
                                        alt={"homepage_mobile"}
                                        src={item.pic[0]}
                                        className="w-full  object-cover cover[top_right] rounded-lg 
                      
                       
                        "
                                        width={200}
                                        height={200}

                                    />
                                </div>


                                <div className="animate-slideInLeft  px-3 py-3 w-full "
                                    style={{
                                        // "background": "#ffffff",
                                        // "border": "1px solid rgba(255,255,255,0.18)",
                                        "borderRadius": "5px",
                                    }}
                                >
                                    <h3 className="text-center">{item.name}</h3>
                                    {
                                        item?.tools ? item?.tools.map((tool, index) => (
                                            <span
                                                style={{
                                                    fontSize: '13px'
                                                }} className="text-sm italic text-gray-700 " key={index}>{tool}</span>
                                        )) : null
                                    }
                                    <p className={`mt-4 font-sans text-gray-700
    whitespace-per-line-2 text-wrap `}
                                        style={{
                                            overflow: 'hidden',
                                            display: '-webkit-box',
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: expandText ? 'none' : 3


                                        }
                                        }
                                    >{item?.description[0]}
                                    </p>
                                    <div className="w-full mt-4 flex justify-end">
                                        <button onClick={() => {
                                            handleExpandText
                                            redirect(`/pages/projectss/${item._id}`)
                                        }
                                        } className=" button-dark hover:scale-110 transition-all duration-500 ease-in-out">


                                            {!expandText && <span className="flex gap-3">
                                                <LinkArrow className="w-5 h-5" />
                                                More Details</span>}


                                        </button>
                                    </div>


                                </div>
                            </div>





                        </motion.section>
                    ))
                }




            </section>

            </div>
        </>

    )
}