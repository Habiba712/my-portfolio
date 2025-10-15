'use client'

import Image from "next/image"
import SectionHeader from "../layout/SectionHeader"
import profile_pic from "../../../../public/Minimalist Chic Hijab Style _ Cream Blazer & Black Outfit.jpeg";
import Link from "next/link";
export default function AboutMe() {
    return(
        <section id="about" className="w-full flex flex-col gap-10 items-center">

<SectionHeader title={"About Me"} description={"A small introduction about me"}/>
        <div className="w-[80%] p-2 h-full border border-gray-300 rounded-lg bg-white grid grid-cols-2 gap-4 items-center">
            <div>
             <Image src={profile_pic} alt="me" width={500} height={300} className="
                            animate-fadeIn
                            
                            " />
            </div>
           <div>
               <h2 className="text-normal animate-dropTop">Hi, I'm <span className="animated-gradient-text">Habiba Taliby</span></h2>
               <p className="font-normal font-sans text-gray-600 ">Lorem f eo fpqjre fpqer mmvut ncbtuomw fnreqoif qoi frqijerojfq orfq ohrfoq hrfoqhrq oioijoijohoihpoj poj pjpj0 yfy trd vyv ydorem f eo fpqjre fpqer mmvut ncbtuomw fnreqoif qoi frqijerojfq orfq ohrfoq hrfoqhrq oioijoijohoihpoj poj pjpj0 yfy trd vyv ydorem f eo fpqjre fpqer mmvut ncbtuomw fnreqoif qoi frqijerojfq orfq ohrfoq hrfoqhrq oioijoijohoihpoj poj pjpj0 yfy trd vyv ydorem f eo fpqjre fpqer mmvut ncbtuomw fnreqoif qoi frqijerojfq orfq ohrfoq hrfoqhrq oioijoijohoihpoj poj pjpj0 yfy trd vyv yd </p>
              <div className="flex justify-end  items-start gap-3 py-3  ">
        <Link href="/my-portfolio">
          <img src="/icons/github (1).png" alt="email" width={30} height={30} className="rounded-full" />
        </Link>
        <Link href="/my-portfolio">
          <img src="/icons/email (1).png" alt="email" width={30} height={30} className="rounded-full" />
        </Link>  <Link href="/my-portfolio">
          <img src="/icons/linkedin.png" alt="linkedin" width={30} height={30} className="rounded-full" />
        </Link>

      </div>
           </div>
           
        </div>
</section>
    )
}