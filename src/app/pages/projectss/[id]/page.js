'use client'

import { useContext, useState, useEffect } from "react"
import { ThemeContext } from "../../../components/AppContext"
import { useParams } from "next/navigation"
import SectionHeader from "@/app/components/layout/SectionHeader"
import Image from "next/image"




export default function Project() {
    const { id } = useParams()
    const { myProjects } = useContext(ThemeContext)
    const [myProject, setMyProject] = useState([])
 
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
                <h2 className="text-4xl font-bold text-center">Loading....</h2>
            </div>
        )
    }

    return (
        <section className="w-full max-w-4xl p-4 mx-auto">
            <div>
                <SectionHeader title={myProject.name} description={""} />
 {/* // grid grid-cols-2 gap-4  */}
                <div className="rounded-lg 
               
                w-full ">
                    {/* <div>
                       
                                <div className="flex flex-col gap-3">
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="flex flex-col gap-4 justify-between">
 <Image src={Array.isArray(myProject.pic) ? myProject.pic[0] : myProject.pic} alt="project" width={400} height={400} className="rounded-lg" />
  <Image src={Array.isArray(myProject.pic) ? myProject.pic[0] : myProject.pic} alt="project" width={400} height={400} className="rounded-lg" />
                                        </div>
                                        
                                          <Image src={Array.isArray(myProject.pic) ? myProject.pic[1] : myProject.pic} alt="project" width={400} height={400} className="rounded-lg" />
                                    </div>
                                    <div className="w-full">
                                         <Image src={Array.isArray(myProject.pic) ? myProject.pic[0] : myProject.pic} alt="project" width={500} height={400} className="rounded-lg" />
                                    </div>

                                </div>
                           
                       
                    </div>
                    <div>

                        <p
                         style={{
                        "background": "linear-gradient(135deg,rgba (255,255,255,0.1),rgba(255,255,255,0))",
                        "WebkitBackdropFilter": "blur(20px)",
                        "backdropFilter": "blur(20px)",
                        "boxShadow": "0 8px 20px 0 rgba(0,0,0,0.37)",
                        "border": "1px solid rgba(255,255,255,0.18)",
                        "borderRadius": "5px",
                    }}
                        className="p-3 border border-gray-200 rounded-lg"
                        >
                            Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet cursus, enim erat dictum urna, nec gravida enim erat at sapien.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet cursus, enim erat dictum urna, nec gravida enim erat at sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet cursus, enim erat dictum urna, nec gravida enim erat at sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet cursus, enim erat dictum urna, nec gravida enim erat at sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet cursus, enim erat dictum urna, nec gravida enim erat at sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet cursus, enim erat dictum urna, nec gravida enim erat at sapien.
                        </p>

                    </div> */}
                    <div className="w-full">
<Image src={Array.isArray(myProject.pic) ? myProject.pic[0] : myProject.pic} alt="project" width={1200} height={1200} className="rounded-lg w-full" />
                    </div>
                    <div className="flex justify-center">
                         <p
                         style={{
                        "background": "linear-gradient(135deg,rgba (255,255,255,0.1),rgba(255,255,255,0))",
                        "WebkitBackdropFilter": "blur(20px)",
                        "backdropFilter": "blur(20px)",
                        "boxShadow": "0 8px 20px 0 rgba(0,0,0,0.37)",
                        "border": "1px solid rgba(255,255,255,0.18)",
                        "borderRadius": "5px",
                        "width":"60%"
                    }}
                        className="relative -top-50 p-3 border border-gray-200 rounded-lg "
                        >
                            Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet cursus, enim erat dictum urna, nec gravida enim erat at sapien.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet cursus, enim erat dictum urna, nec gravida enim erat at sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet cursus, enim erat dictum urna, nec gravida enim erat at sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet cursus, enim erat dictum urna, nec gravida enim erat at sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet cursus, enim erat dictum urna, nec gravida enim erat at sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet cursus, enim erat dictum urna, nec gravida enim erat at sapien.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}