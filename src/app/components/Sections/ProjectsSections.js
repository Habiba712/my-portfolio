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
        <div className="w-full py-4 px-10">
 <motion.section
                                   
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: 'easeOut' }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    className="py-5"

                                >
            <SectionHeader title={'My Projects'} overview={'Here are some of my recent projects'} />
            <section id="projects" className="desktop-projects w-full  flex flex-col items-center smooth-scroll transition-all duration-500 ease-in-out">



                {/* <hr className="w-[60%] border border-gray-100"/> */}
                <div className="projects-grid">
                    {
                        myProjectsList.map((item, index) => (
                            <div
                                key={index || item._id}
                                className="">

                               
                                    <div className="project-card w-full">

                                        <div className="project-card-image">


                                            <Image
                                                alt={"homepage_desktop"}
                                                src={item?.pic[0]}
                                                className="img rounded-lg"
                                                width={300}
                                                height={300} />
                                            <div class="project-overlay">
                                                <div class="project-links">
                                                    <button onClick={() => {
                                                        handleExpandText
                                                        redirect(`/pages/projectss/${item._id}`)
                                                    }
                                                    } className="project-link">
                                                        {!expandText &&

                                                            <span className="flex justify-between items-center gap-3 text-nowrap">More Details
                                                                <LinkArrow className="w-5 h-5" /></span>}

                                                    </button>

                                                </div>
                                            </div>

                                        </div>

                                        <div className="project-card-content">
                                            <h3 className="project-card-title whitespace-per-line-2 text-nowrap">{item?.name}</h3>
                                            <p className={`whitespace-per-line-2 text-wrap `}
                                                style={{
                                                    overflow: 'hidden',
                                                    display: '-webkit-box',
                                                    WebkitBoxOrient: 'vertical',
                                                    WebkitLineClamp: expandText ? 'none' : 3


                                                }
                                                }
                                            >
                                                {item?.overview}
                                            </p>
                                            <div className="project-tags"


                                            >
                                                {
                                                    item?.tools ? item?.tools.map((tool, index) => (
                                                        <span className="tag"


                                                            key={index}>{tool}</span>
                                                    )) : null
                                                }
                                            </div>
                                        </div>



                                        {/* <div className="w-full mt-4 flex justify-end">
                                                <button onClick={() => {
                                                    handleExpandText
                                                    redirect(`/pages/projectss/${item._id}`)
                                                }
                                                } className=" hover:scale-110 transition-all duration-500 ease-in-out">


                                                    {!expandText &&

                                                        <span className="button-dark flex gap-3">More Details
                                                            <LinkArrow className="w-5 h-5" /></span>}

                                                </button>
                                            </div> */}


                                    </div>

                           
                            </div>

                        ))
                    }
                </div>







            </section>
</motion.section>

            {/* mobile version */}
            <div className="mobile-about flex w-full justify-center">  
            <section id="projects" className="flex flex-col items-end justify-end  psmooth-scroll transition-all duration-500 ease-in-out  w-[90%]">                <div className="projects-grid-mobile">


                    {
                        myProjectsList.map((item, index) => (
                            <motion.section
                                   
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: 'easeOut' }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    className="py-5"

                                >
                            <div key={index || item._id} className="">                               
                                    <div className="project-card-mobile w-full">

                                        <div className="project-card-image-mobile">
                                            <div class="project-overlay-mobile">
                                                <div class="project-links-mobile">
                                                    <button onClick={() => {
                                                        handleExpandText
                                                        redirect(`/pages/projectss/${item._id}`)
                                                    }
                                                    } className="project-link">


                                                        {!expandText &&

                                                            <span className="flex justify-between items-center gap-3 text-nowrap">More Details
                                                                <LinkArrow className="w-5 h-5" /></span>}

                                                    </button>

                                                </div>
                                            </div>


                                            <Image
                                                alt={"homepage_desktop"}
                                                src={item?.pic[0]}
                                                className="img rounded-lg object-cover "
                                                width={300}
                                                height={300}

                                            />
                                        </div>

                                        <div className="project-card-content-mobile">
                                            <h3 className="project-card-title-mobile whitespace-per-line-2 text-nowrap">{item?.name}</h3>
                                            <p className={`whitespace-per-line-2 text-wrap `}
                                                style={{
                                                    overflow: 'hidden',
                                                    display: '-webkit-box',
                                                    WebkitBoxOrient: 'vertical',
                                                    WebkitLineClamp: expandText ? 'none' : 3


                                                }
                                                }
                                            >{item?.overview}
                                            </p>
                                            <div className="project-tags"


                                            >
                                                {
                                                    item?.tools ? item?.tools.map((tool, index) => (
                                                        <span className="tag"


                                                            key={index}>{tool}</span>
                                                    )) : null
                                                }
                                            </div>
                                        </div>



                                    

                                    </div>

                               
                            </div>

                       </motion.section> ))
                    }
                </div>



            </section>

            </div>
                 
        </div>

    )
}