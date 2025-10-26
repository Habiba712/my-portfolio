'use client'

import Image from "next/image"
import SectionHeader from "../layout/SectionHeader"
import profile_pic from "../../../../public/profile.jpeg";
import Link from "next/link";
export default function AboutMe() {
    return(
        <section id="about" className="w-full flex flex-col items-center ">

<SectionHeader title={"About Me"} description={"A small introduction about me"}/>
        <div className="desktop-about w-[60%] py-5 flex items-center">
             
           <div  className="h-full rounded-lg bg-white p-5 " >
              
               <p className="font-normal font-sans ">Hi, I'm <span className="font-bold animated-gradient-text">Habiba Taliby</span>, Lorem f eo fpqjre fpqer mmvut ncbtuomw fnreqoif qoi frqijerojfq orfq ohrfoq hrfoqhrq oioijoijohoihpoj poj pjpj0 yfy trd vyv ydorem f eo fpqjre fpqer mmvut ncbtuomw fnreqoif qoi frqijerojfq orfq ohrfoq hrfoqhrq oioijoijohoihpoj poj pjpj0 yfy trd vyv ydorem f eo fpqjre fpqer mmvut ncbtuomw fnreqoif qoi frqijerojfq orfq ohrfoq hrfoqhrq oioijoijohoihpoj poj pjpj0 yfy trd vyv ydorem f eo fpqjre fpqer mmvut ncbtuomw fnreqoif qoi frqijerojfq orfq ohrfoq hrfoqhrq oioijoijohoihpoj poj pjpj0 yfy trd vyv yd </p>
              <div className="flex justify-end  items-start gap-3   ">
        <Link href="/my-portfolio">
          <img src="/icons/git1.png" alt="github" width={30} height={30} className="rounded-full" />
        </Link>
        <Link href="/my-portfolio">
          <img src="/icons/email1.png" alt="email" width={30} height={30} className="rounded-full" />
        </Link>  <Link href="/my-portfolio">
          <img src="/icons/linkedin1.png" alt="linkedin" width={30} height={30} className="rounded-full" />
        </Link>

      </div>
           </div>
           
        </div>

           <div className="mobile-about w-[90%] p-3 h-full border border-gray-300 rounded-lg bg-white items-center">
            <div>
             <Image src={profile_pic} alt="me" width={500} height={300} className="
                            animate-fadeIn rounded-lg
                            
                            " />
            </div>
           <div>
               <p className="font-normal font-sans text-sm py-3">Hi, I'm <span className="animated-gradient-text">Habiba Taliby</span>, Lorem f eo fpqjre fpqer mmvut ncbtuomw fnreqoif qoi frqijerojfq orfq ohrfoq hrfoqhrq oioijoijohoihpoj poj pjpj0 yfy trd vyv ydorem f eo fpqjre fpqer mmvut ncbtuomw fnreqoif qoi frqijerojfq orfq ohrfoq hrfoqhrq oioijoijohoihpoj poj pjpj0 yfy trd vyv ydorem f </p>
              <div className="flex justify-center items-end gap-3 mt-3  ">
        <Link href="/my-portfolio">
          <img src="/icons/git1.png" alt="git" width={30} height={30} className="rounded-full" />
        </Link>
        <Link href="/my-portfolio">
          <img src="/icons/email1.png" alt="email" width={30} height={30} className="rounded-full" />
        </Link>  <Link href="/my-portfolio">
          <img src="/icons/linkedin1.png" alt="linkedin" width={30} height={30} className="rounded-full" />
        </Link>

      </div>
           </div>
           
        </div>
</section>
    )
}