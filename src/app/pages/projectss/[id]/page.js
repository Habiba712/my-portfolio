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
                <div className="desktop-hero rounded-lg 
               
                w-full grid grid-cols-2 justify-between gap-4 ">


                    <div className="px-4 py-6 font-poppins border border-gray-200 rounded-lg bg-[#ffecf7ff] h-fit">
                        <h3 className="font-sans font-semibold text-gray-800">Overview</h3>

                        <p
                            className="font-sans"

                        >
                            Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet cursus, enim erat dictum urna, nec gravida enim erat at sapien.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet cursus, enim erat dictum urna, nec gravida enim erat at sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet cursus, enim erat dictum urna, nec gravida enim erat at sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet cursus, enim erat dictum urna, nec gravida enim erat at sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet cursus, enim erat dictum urna, nec gravida enim erat at sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet cursus, enim erat dictum urna, nec gravida enim erat at sapien.
                        </p>
                        <div className="my-4 italic text-gray-700 py-3 text-sm">
                            <span >Tailwind Css, Next Js, MongoDB, Git, Stripe </span>
                        </div>

                        <div className="px-3 py-2 flex justify-end gap-3 font-sans ">

                            <button className="cursor-pointer border rounded-lg px-4 py-2 bg-[#9b93c2] text-white whitespace-nowrap">View Project</button>
                            <button className="cursor-pointer border rounded-lg px-4 py-2 bg-[#9b93c2] text-white whitespace-nowrap">View Repo</button>
                        </div>

                    </div>
                    <div>

                        <div className="flex flex-col gap-3">
                            <div className="grid grid-cols-2 gap-2">
                                <div className="">
                                    <Image src={Array.isArray(myProject.pic) ? myProject.pic[2] : myProject.pic} alt="project" width={400} height={400} className="rounded-lg w-full" />


                                </div>
                                <div>
                                    <Image src={Array.isArray(myProject.pic) ? myProject.pic[3] : myProject.pic} alt="project" width={400} height={400} className="rounded-lg " />

                                </div>


                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="w-full flex justify-between wrap-1">
                                    <Image src={Array.isArray(myProject.pic) ? myProject.pic[4] : myProject.pic} alt="project" width={400} height={400} className="rounded-lg w-full" />


                                </div>
                                <div>
                                    <Image src={Array.isArray(myProject.pic) ? myProject.pic[5] : myProject.pic} alt="project" width={400} height={400} className="rounded-lg h-full" />

                                </div>


                            </div>
                            <div className="w-full">
                                <Image src={Array.isArray(myProject.pic) ? myProject.pic[0] : myProject.pic} alt="project" width={500} height={400} className="rounded-lg" />
                            </div>
                            <div className="w-full">
                                <Image src={Array.isArray(myProject.pic) ? myProject.pic[1] : myProject.pic} alt="project" width={500} height={400} className="rounded-lg" />
                            </div>

                        </div>


                    </div>
                </div>






                {/* mobile version */}
                <div className="rounded-lg mobile-hero
               
                w-full flex flex-col justify-center gap-4 ">


                    <div className="px-4 py-6 font-poppins border border-gray-200 rounded-lg bg-[#ffecf7ff]">
                        <h3 className="font-sans font-semibold text-gray-800">Overview</h3>

                        <p
                            className="font-sans"

                        >
                            Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet cursus, enim erat dictum urna, nec gravida enim erat at sapien.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet cursus, enim erat dictum urna, nec gravida enim erat at sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet cursus, enim erat dictum urna, nec gravida enim erat at sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet cursus, enim erat dictum urna, nec gravida enim erat at sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet cursus, enim erat dictum urna, nec gravida enim erat at sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet cursus, enim erat dictum urna, nec gravida enim erat at sapien.
                        </p>
                        <div className="my-4 italic text-gray-700 py-3 text-sm">
                            <span >Tailwind Css, Next Js, MongoDB, Git, Stripe </span>
                        </div>

                        <div className="px-3 py-2 flex justify-end gap-3 font-sans ">

                            <button className="cursor-pointer border rounded-lg px-4 py-2 bg-[#9b93c2] text-white whitespace-nowrap">View Project</button>
                            <button className="cursor-pointer border rounded-lg px-4 py-2 bg-[#9b93c2] text-white whitespace-nowrap">View Repo</button>
                        </div>

                    </div>
                    <div>

                        <div className="flex flex-col gap-3 ">
                            <div className="grid grid-cols-2 gap-2  ">
                                <div className="h-full">
                                    <Image src={Array.isArray(myProject.pic) ? myProject.pic[2] : myProject.pic} alt="project" width={400} height={400} className="rounded-lg h-full" />

                                </div>
                                <div className="h-full">
                                    <Image src={Array.isArray(myProject.pic) ? myProject.pic[3] : myProject.pic} alt="project" width={400} height={400} className="rounded-lg " />

                                </div>


                            </div>

                              <div className="grid grid-cols-2 gap-2  ">
                                <div className="h-full">
                                    <Image src={Array.isArray(myProject.pic) ? myProject.pic[4] : myProject.pic} alt="project" width={400} height={400} className="rounded-lg h-full" />

                                </div>
                                <div className="">
                                    <Image src={Array.isArray(myProject.pic) ? myProject.pic[5] : myProject.pic} alt="project" width={400} height={400} className="rounded-lg" />

                                </div>


                            </div>

                            <div className="w-full">
                                <Image src={Array.isArray(myProject.pic) ? myProject.pic[0] : myProject.pic} alt="project" width={500} height={400} className="rounded-lg" />
                            </div>

                            <div className="w-full">
                                <Image src={Array.isArray(myProject.pic) ? myProject.pic[0] : myProject.pic} alt="project" width={500} height={400} className="rounded-lg" />
                            </div>

                        </div>


                    </div>
                </div>
            </div>

        </section>
    )
}