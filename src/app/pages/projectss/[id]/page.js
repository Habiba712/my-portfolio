'use client'

import { useContext, useState, useEffect } from "react"
// import { ThemeContext } from "../../../components/AppContext"
import { useParams } from "next/navigation"
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
            <Backarrow className="w-5 h-5"/> Back to Projects
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
            <Backarrow className="w-10 h-10"/>
        </a>
      </div>
    
  </div>
  

</div>
</header>
        <section className=" w-full max-w-4xl p-4 mt-20 mx-auto">
                
                <div className=" desktop-hero rounded-lg 
               font-sans 
                w-full ">

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

                        {/* projject overview */}
                        <div>
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

                            
                                <button className="btn-mobile btn-primary w-full text-nowrap"><LinkArrow className=" w-5 h-5" /> View Project</button>

                            <button className="btn-mobile btn-secondary w-full text-nowrap"><GitHub className="w-5 h-5 icon" /> View Repo</button>
                        </div>

                    </div>

                    {/* <div className="px-4 py-10 border border-gray-200 rounded-lg bg-white  h-fit flex flex-col gap-4">


      <div className="flex justify-center gap-3 bg-white rounded-lg py-3 relative">
                          
                            <div className="">
                                <Image src={Array.isArray(myProject.pic) ? myProject.pic[0] : ''} alt="project" width={500} height={400} className="rounded-lg" />
                            </div>
                            <div className="position absolute right-30 top-30 rounded-full">
                                <Image src={Array.isArray(myProject.pic) ? myProject.pic[1] : ''} alt="project" width={100} height={100} className="" style={{
                                    'borderRadius':'15px'
                                }} />
                            </div>

                        </div>

<SectionHeader title={myProject?.name} description={""}

/>
                        <h3 className="font-sans font-semibold text-gray-800">Overview</h3>
             
                     
<p>{myProject?.description[0]}</p><br/>
<h3>{myProject?.description[1]}</h3>
                     {
                            myProject?.description.slice(2).map((para, index) => (
                                <div key={index}>  <h5 className="font-semibold">{para?.subTitle}</h5>
                                <p className="text-sm">{para?.texto}</p></div>
                              
                            ))
                     }
                        <div className="my-4 italic text-gray-500 py-3 text-sm"><span className="text-2xl">Tools:
                            </span>
                             {
                                myProject?.tools ? myProject?.tools.map((tool, index) => (
                                    <span className="mr-3" key={index}>{tool}</span>
                                )) : null
                            }
                        </div>

                        <div className="px-3 py-2 flex justify-end gap-3 font-sans ">

                            
                                <Link className="button-light whitespace-nowrap" href={myProject.page} target="_blank" rel="noopener noreferrer">View Project   </Link>                     

                            <button className="button-dark cursor-pointer border rounded-lg px-4 py-2 bg-white text-white whitespace-nowrap">View Repo</button>
                        </div>

                    </div> */}
                    <div>

                  


                    </div>
                </div>






                {/* mobile version */}
                <div className="rounded-lg mobile-hero
               
                w-full flex flex-col justify-center gap-4 ">


                    <div className="px-4 py-6  border border-gray-200 rounded-lg bg-white font-sans ">
                         <h3 className="font-sans font-semibold text-gray-800">Overview</h3>
             
                     
<p>{myProject?.description[0]}</p><br/>
<h3>{myProject?.description[1]}</h3>
                     {
                           myProject?.description.slice(2).map((para, index) => (
                                <div key={index || para?.subTitle}>  <h5 className="font-semibold">{para?.subTitle}</h5><br/>
                                <p className="text-sm">{para?.texto}</p></div>          
                              
                            ))
                           
                     }
                        <div className="my-4 italic text-gray-600 py-3 text-sm">
                            {
                                myProject?.tools ? myProject?.tools.map((tool, index) => (
                                    <span className="mr-3" key={index}>{tool}{"  "}</span>
                                )) : null
                            }
                        </div>

                        <div className="px-3 py-2 flex justify-end gap-3 ">

                            
                                <Link className="button-light whitespace-nowrap" href={myProject?.page} target="_blank" rel="noopener noreferrer">View Project   </Link>                     

                            <button className="button-dark cursor-pointer border rounded-lg px-4 py-2 bg-white text-white whitespace-nowrap">View Repo</button>
                        </div>

                    </div>
                    <div>

                         <div className="flex flex-col gap-3 bg-white  rounded-lg py-3 px-3">
                            {/* <div className="grid grid-cols-2 gap-2">
                                <div className="">
                                    <Image src={Array.isArray(myProject.pic) ? myProject.pic[0] : myProject.pic} alt="project" width={400} height={400} className="rounded-lg h-full" />


                                </div>
                                <div>
                                    <Image src={Array.isArray(myProject.pic) ? myProject.pic[3] : myProject.pic} alt="project" width={400} height={400} className="rounded-lg h-full" />

                                </div>


                            </div> */}
                            {/* <div className="grid grid-cols-2 gap-2">
                                <div className="">
                                    <Image src={Array.isArray(myProject.pic) ? myProject.pic[5] : myProject.pic} alt="project" width={400} height={400} className="rounded-lg h-full" />


                                </div>
                                <div className="">
                                    <Image src={Array.isArray(myProject.pic) ? myProject.pic[4] : myProject.pic[3]} alt="project" width={400} height={400} className="rounded-lg h-full" />

                                </div>


                            </div> */}
                            <div className="w-full">
                                <Image src={Array.isArray(myProject.pic) ? myProject.pic[0] : ''} alt="project" width={500} height={400} className="rounded-lg" />
                            </div>
                            <div className="w-full">
                                <Image src={Array.isArray(myProject.pic) ? myProject.pic[1] : ''} alt="project" width={500} height={400} className="rounded-lg" />
                            </div>

                        </div>


                    </div>
                </div>
          

        </section>
        </>
       
    )
}