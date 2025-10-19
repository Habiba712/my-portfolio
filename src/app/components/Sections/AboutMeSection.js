'use client'

import Image from "next/image"
import SectionHeader from "../layout/SectionHeader"
import profile_pic from "../../../../public/Minimalist Chic Hijab Style _ Cream Blazer & Black Outfit.jpeg";
import Link from "next/link";
export default function AboutMe() {
    return(
        <section id="about" className="w-full flex flex-col gap-3 items-center">

<SectionHeader title={"About Me"} description={"A small introduction about me"}/>
        <div className="desktop-about w-[60%] p-4 h-full border border-gray-300 rounded-lg bg-white ">
             
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

           <div className="mobile-about w-[80%] p-2 h-full border border-gray-300 rounded-lg bg-white items-center">
            <div>
             <Image src={profile_pic} alt="me" width={500} height={300} className="
                            animate-fadeIn rounded-lg
                            
                            " />
            </div>
           <div>
               <h2 className="text-normal animate-dropTop py-2 ">Hi, I'm <span className="animated-gradient-text">Habiba Taliby</span></h2>
               <p className="font-normal font-sans text-gray-600 text-sm">Lorem f eo fpqjre fpqer mmvut ncbtuomw fnreqoif qoi frqijerojfq orfq ohrfoq hrfoqhrq oioijoijohoihpoj poj pjpj0 yfy trd vyv ydorem f eo fpqjre fpqer mmvut ncbtuomw fnreqoif qoi frqijerojfq orfq ohrfoq hrfoqhrq oioijoijohoihpoj poj pjpj0 yfy trd vyv ydorem f </p>
              <div className="flex justify-center items-end gap-3 mt-3  ">
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