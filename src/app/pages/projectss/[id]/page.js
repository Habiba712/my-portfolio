'use client'

import { useContext, useState, useEffect } from "react"
// import { ThemeContext } from "../../../components/AppContext"
import { redirect, useParams } from "next/navigation"
import SectionHeader from "@/app/components/layout/SectionHeader"
import Image from "next/image"
import Link from "next/link"
import { myProjects } from "@/app/data/projects"
import Backarrow from "public/icons/SVG/back-arrow"
import CalendarIcon from "public/icons/SVG/calendar"
import PersonIcon from "public/icons/SVG/person"
import ClockIcon from "public/icons/SVG/clock"
import LinkArrow from "public/icons/SVG/link_arrow"
import GitHub from "public/icons/SVG/gitHub"
import CardIcon from "public/icons/SVG/card"
import CartIcon from "public/icons/SVG/cart"
import ResponsiveIcon from "public/icons/SVG/responsive"
import UsersIcon from "public/icons/SVG/users"
import TripIcon from "public/icons/SVG/trip"
import ReviewIcon from "public/icons/SVG/review"
import FormIcon from "public/icons/SVG/form"
import { motion } from "framer-motion";



export default function Project() {
    const { id } = useParams()
    // const { myProjects } = useContext(ThemeContext)
    const [myProject, setMyProject] = useState(null)

    useEffect(() => {
        if (myProjects && myProjects.length > 0) {
            const getMyProject = myProjects.find(item => item._id == id)
            setMyProject(getMyProject)
        }


    }, [id, myProjects])
    console.log('myProject', myProject)
    if (!myProject) {
        return (
            <div>
                <h2 className="text-3xl text-white font-semibold text-center">Loading....</h2>
            </div>
        )
    }

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
                <div className="w-full flex justify-end">
                    <a className="btn-back" href="/#projects">
                        <Backarrow className="w-5 h-5" /> Back to Projects
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
                                <Backarrow className="w-10 h-10" />
                            </a>
                        </div>

                    </div>


                </div>
            </header>

            <section className=" w-full max-w-4xl p-4 mt-20 mx-auto">
                {/* deskptop version */}
                <div className=" desktop-hero rounded-lg font-sans  w-full ">

                    <div>
                        {/* //bradcrumps part */}

                        <div className="project-bradcrumps">
                            <div>
                                <a href="/">Home</a>
                                <span className="">/</span>
                            </div>
                            <div>
                                <a href="/#projects">Projects</a>
                                <span className="">/</span>
                            </div> <div>
                                <a href={`/pages/projectss/${myProject._id}`} >{myProject.name}</a>

                            </div>
                        </div>
                         <motion.section

                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                viewport={{ once: false, amount: 0.3 }}
                                className="py-5"

                            >
                                <div className="mb-30">
                            {/* projject overview */}

                            <h1 className="project-page-title">{myProject.name}</h1>

                            <div className="project-info">
                                <div className="info-item">
                                    <CalendarIcon className="icon w-5 h-5" />
                                    <span>Completed: {myProject.completed}</span>

                                </div>
                                <div className="info-item">
                                    <PersonIcon className="icon w-5 h-5" />
                                    <span>Role: {myProject.role}</span>

                                </div>
                                <div className="info-item">
                                    <ClockIcon className="icon w-5 h-5" />
                                    <span>Duration: {myProject.duration}</span>

                                </div>
                            </div>


                            <div className="project-page-tags"


                            >
                                {
                                    myProject?.tools ? myProject?.tools.map((tool, index) => (
                                        <span className="tag-2"


                                            key={index}>{tool}</span>
                                    )) : null
                                }
                            </div>
                            <div className="project-page-cta w-1/2 ">


                                <button className={`${myProject?.page ? 'btn-mobile btn-primary ' : 'btn-primary-disabled'}`}
                                    onClick={() => {
                                        redirect(`${myProject.page}`)
                                    }}
                                ><LinkArrow className=" w-5 h-5" /> View Project</button>

                                {/* <button className="btn-mobile btn-secondary w-full text-nowrap"><GitHub className="w-5 h-5 icon" /> View Repo</button> */}
                            </div>

                        </div>  
                            </motion.section>
                      
                    </div>

                    <div>
                         <motion.section

                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                viewport={{ once: false, amount: 0.3 }}
                                className=""

                            >
                               <div className="w-full project-page-image-container">
                            <Image src={Array.isArray(myProject.pic) ? myProject.pic[0] : ''} alt="project" width={500} height={400} className="object-cover w-full rounded-lg" />
                        </div>  
                            </motion.section>
                        <motion.section

                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                viewport={{ once: false, amount: 0.3 }}
                                className=""

                            >

                               

                            <div className="project-overview-container">

                                <h3 className="project-page-title">Project Overview</h3>
                                <div className="project-page-card">

                                    <p>{myProject?.overview}</p>

                                </div>
                            </div>
                        
                            </motion.section>
                      

                        {
                            myProject?.features && (
                                <>
                                 <motion.section

                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                viewport={{ once: false, amount: 0.3 }}
                                className=""

                            >
                                  <div className="features-grid">
                                        <h3 className="project-page-title">Key Features</h3>
                                        <div className="features-container">

                                            {
                                                myProject?.features ? myProject?.features.map((feature, index) => (
                                                    <div key={index} >
                                                        <div className="feature-card">

                                                            <div className="icon-container">
                                                                {feature?.icon == 'cart' ?
                                                                    <CardIcon className="icon w-10 h-10 rounded-lg" />
                                                                    : feature?.icon == 'credit_card' ?
                                                                        <CartIcon className="icon w-10 h-10 rounded-lg" />
                                                                        : feature?.icon == 'users' ?
                                                                            <ResponsiveIcon className="icon w-10 h-10 rounded-lg" />
                                                                            : feature?.icon == 'responsive' ?
                                                                                <UsersIcon className="icon w-10 h-10 rounded-lg" />
                                                                                :
                                                                                feature?.icon == "trip" ?
                                                                                    <TripIcon className="icon w-10 h-10 rounded-lg" />
                                                                                    : feature?.icon == "review" ?
                                                                                        <ReviewIcon className="icon w-10 h-10 rounded-lg" />
                                                                                        : feature?.icon == "form" ?
                                                                                            <FormIcon className="icon w-10 h-10 rounded-lg" />
                                                                                            :
                                                                                            null
                                                                }
                                                            </div>



                                                            <h3 className="">{feature.title}</h3>
                                                            <p className="">{feature.description}</p>


                                                        </div>
                                                    </div>
                                                )) : null
                                            }
                                        </div>
                                    </div>
                            </motion.section>
                                  
                                </>
                            )
                        }

                        {
                            myProject?.tasks && (
                                 <motion.section

                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                viewport={{ once: false, amount: 0.3 }}
                                className=""

                            >
                                  <div className="challenges-container">
                                    <h3 className="project-page-title">What I Worked On</h3>
                                    {
                                        myProject?.tasks ? myProject?.tasks?.map((challenge, index) => (
                                            <div key={index} className="challenges-card">
                                                <h3 className="font-sans font-semibold text-gray-800">{challenge?.subTitle}</h3>
                                                <p>{challenge?.texto}</p>
                                            </div>
                                        )) : null
                                    }

                                </div>
                            </motion.section>
                              
                            )
                        }
                        {myProject?.technologyStack && myProject.technologyStack.length > 0 && (
//  console.log('myProject', myProject.technologyStack.length) 
 <motion.section

                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                viewport={{ once: false, amount: 0.3 }}
                                className=""

                            >
                                <div className="technology-stack-container">
                                <h3 className="project-page-title">Technology Stack</h3>
                                <div className={`grid grid-cols-4 gap-5 technology-grid`}>  
                                    
                                    {
                                    
                                        myProject?.technologyStack?.map((tool, index) => (
                                            <div key={index} className="technology-card">
                                                <h3 className="text-start font-sans font-semibold text-gray-800">{tool?.title}</h3>
                                                {tool?.description.map((description, index) => (
                                                    <p key={index} className="mt-4 text-start text-sm">{description}</p>
                                                ))}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
  
                            </motion.section>
                          

                        )}




                    </div>

                </div>


                {/* mobile version */}
                <div className="rounded-lg mobile-hero w-full flex flex-col justify-center gap-4 ">


                    <div>
                        {/* //bradcrumps part */}

                        <div className="project-bradcrumps">
                            <div>
                                <a href="/">Home</a>
                                <span className="">/</span>
                            </div>
                            <div>
                                <a href="/#projects">Projects</a>
                                <span className="">/</span>
                            </div> <div>
                                <a href={`/pages/projectss/${myProject._id}`} >{myProject.name}</a>

                            </div>
                        </div>

                        <div className="mb-10">
                            {/* projject overview */}
                            <motion.section

                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                viewport={{ once: false, amount: 0.3 }}
                                className="py-5"

                            >
                                <h1 className="project-page-main-title">{myProject.name}</h1>

                                <div className="project-info-mobile">
                                    <div className="info-item">
                                        <CalendarIcon className="icon w-5 h-5" />
                                        <span>Completed: {myProject.completed}</span>

                                    </div>
                                    <div className="info-item">
                                        <PersonIcon className="icon w-5 h-5" />
                                        <span>Role: {myProject.role}</span>

                                    </div>
                                    <div className="info-item">
                                        <ClockIcon className="icon w-5 h-5" />
                                        <span>Duration: {myProject.duration}</span>

                                    </div>
                                </div>



                                <div className="project-page-tags">
                                    {
                                        myProject?.tools ? myProject?.tools.map((tool, index) => (
                                            <span className="tag-2"

                                                key={index}>{tool}</span>
                                        )) : null
                                    }
                                </div>
                                <div className="project-page-cta-mobile w-full">
                                    <button className={`${myProject?.page ? 'btn-primary-mobile ' : 'btn-primary-mobile-disabled'}`}
                                        onClick={() => {
                                            redirect(`${myProject.page}`)
                                        }}
                                    ><LinkArrow className=" w-5 h-5" /> View Project</button>

                                    {/* <button className="btn-mobile btn-secondary w-full text-nowrap"><GitHub className="w-5 h-5 icon" /> View Repo</button> */}
                                </div>
                            </motion.section>






                        </div>
                    </div>

                    <div>
                        <motion.section

                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="py-5"

                        >
                            <div className="w-full project-page-image-container">
                                <Image src={Array.isArray(myProject.pic) ? myProject.pic[0] : ''} alt="project" width={500} height={400} className="object-cover w-full rounded-lg" />
                            </div>
                        </motion.section>


                        <div className="">
                            <motion.section

                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                viewport={{ once: false, amount: 0.3 }}
                                className="py-10"

                            >
                                <div className="project-overview-container-mobile">

                                    <h3 className="project-page-title-mobile">Project Overview</h3>
                                    <div className="project-page-card">

                                        <p>{myProject?.overview}</p>

                                    </div>
                                </div>
                            </motion.section>


                        </div>

                        {
                            myProject?.features && (
                                <>
                                    <motion.section

                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, ease: 'easeOut' }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        className=""

                                    >
                                        <div className="features-grid-mobile">
                                            <h3 className="project-page-title-mobile">Key Features</h3>
                                            <div className="features-container">

                                                {
                                                    myProject?.features ? myProject?.features.map((feature, index) => (
                                                        <div key={index} >
                                                            <div className="feature-card">

                                                                <div className="icon-container">
                                                                    {feature?.icon == 'cart' ?
                                                                        <CardIcon className="icon w-10 h-10 rounded-lg" />
                                                                        : feature?.icon == 'credit_card' ?
                                                                            <CartIcon className="icon w-10 h-10 rounded-lg" />
                                                                            : feature?.icon == 'users' ?
                                                                                <ResponsiveIcon className="icon w-10 h-10 rounded-lg" />
                                                                                : feature?.icon == 'responsive' ?
                                                                                    <UsersIcon className="icon w-10 h-10 rounded-lg" />
                                                                                    :
                                                                                    feature?.icon == "trip" ?
                                                                                        <TripIcon className="icon w-10 h-10 rounded-lg" />
                                                                                        : feature?.icon == "review" ?
                                                                                            <ReviewIcon className="icon w-10 h-10 rounded-lg" />
                                                                                            : feature?.icon == "form" ?
                                                                                                <FormIcon className="icon w-10 h-10 rounded-lg" />
                                                                                                :
                                                                                                null
                                                                    }
                                                                </div>



                                                                <h3 className="">{feature.title}</h3>
                                                                <p className="">{feature.description}</p>


                                                            </div>
                                                        </div>
                                                    )) : null
                                                }
                                            </div>
                                        </div>
                                    </motion.section>


                                </>
                            )
                        }

                        {
                            myProject?.tasks && (
                                <motion.section

                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, ease: 'easeOut' }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    className=""

                                >
                                    <div className="challenges-container-mobile">
                                        <h3 className="project-page-title-mobile">What I Worked On</h3>
                                        {
                                            myProject?.tasks ? myProject?.tasks?.map((challenge, index) => (
                                                <div key={index} className="challenges-card">
                                                    <h3 className="font-sans font-semibold text-gray-800">{challenge?.subTitle}</h3>
                                                    <p>{challenge?.texto}</p>
                                                </div>
                                            )) : null
                                        }

                                    </div>
                                </motion.section>


                            )
                        }
                        {myProject?.technologyStack && (

                            <motion.section

                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                viewport={{ once: false, amount: 0.3 }}
                                className="py-5"

                            >
                                {/* <div className="technology-stack-container-mobile">
                                    <h3 className="project-page-title-mobile">Technology Stack</h3>
                                    <div className={`technology-grid-mobile`}>
                                        {
                                            myProject?.technologyStack?.map((tool, index) => (
                                                <div key={index} className="technology-card-mobile">
                                                    <h3 className="text-start font-sans font-semibold text-gray-800">{tool.title}</h3>
                                                    {tool.description.map((description, index) => (
                                                        <p key={index} className="mt-4 text-start text-sm">{description}</p>
                                                    ))}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div> */}
                            </motion.section>




                        )}




                    </div>
                </div>


            </section>
        </>

    )
}