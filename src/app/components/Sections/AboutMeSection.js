'use client'

import Image from "next/image"
import SectionHeader from "../layout/SectionHeader"
import profile_pic from "../../../../public/profile.jpeg";
import Link from "next/link";
import { useState } from "react";
import LinkArrow from "../../../../public/icons/SVG/link_arrow";
import { redirect } from "next/navigation";

export default function AboutMe() {

  const [expandText, setExpandText] = useState(false)


  const handleExpandText = () => {
    setExpandText(!expandText)
  }
  return (
    <section id="about" className="w-full flex flex-col items-center">

      <SectionHeader title={"About Me"} description={"A little sneak peek into who I am"} />
      <div className="desktop-about about-section">

        <div className="h-full rounded-lg p-5 " >

          <p className="font-normal  whitespace-per-line-2 text-wrap"


            style={{
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: expandText ? 'none' : 5


            }
            }
          >Hey, I'm <span className="font-bold animated-gradient-text">Habiba Taliby</span>, — a web developer who enjoys building clean, functional, and detail-oriented projects with a strong focus on user experience. I work mainly with React, <span className="font-bold animated-gradient-text">Next.js</span>, <span className="font-bold animated-gradient-text">Tailwind CSS</span>, and <span className="font-bold animated-gradient-text">MongoDB</span>, and I love combining logic and design to create things that just flow.

            I’ve always had a curiosity for how things work — whether it’s debugging a stubborn API call, cleaning up messy code, or making an interface feel more intuitive. My approach is pretty simple: write code that’s clear, scalable, and actually enjoyable to use.

            I also have experience working with SEO optimization, site performance, and even the occasional WordPress project when it makes sense for the client <span className="font-bold animated-gradient-text">(Elementor, Yoast SEO, caching tools — the whole stack)</span>.

            When I’m not coding, you’ll probably find me experimenting with new UI ideas, reading about cybersecurity and OSINT, or just having coffee while breaking something in my dev environment (and then fixing it, obviously).


          </p>
<div className=" w-full flex justify-end py-3">
   <button onClick={() => {
            handleExpandText
            redirect(`/pages/about`)
          }
          } className="about-link">


            {!expandText &&

              <span className="flex justify-between items-center gap-3 text-nowrap">Read More
                <LinkArrow className="w-5 h-5" /></span>}

          </button>

</div>
         

          <div className="flex justify-center  items-start gap-3   ">
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

      <div className="mobile-about about-section-mobile ">
       
        <div>
          <p className="font-normal font-sans text-sm pt-3 whitespace-per-line-2 text-wrap"
          
          
            style={{
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: expandText ? 'none' : 4


            }
            }
          >Hey, I'm <span className="animated-gradient-text">Habiba Taliby</span>,— a web developer who enjoys building clean, functional, and detail-oriented projects with a strong focus on user experience. I work mainly with React, Next.js, Tailwind CSS, and MongoDB, and I love combining logic and design to create things that just flow.

            I’ve always had a curiosity for how things work — whether it’s debugging a stubborn API call, cleaning up messy code, or making an interface feel more intuitive. My approach is pretty simple: write code that’s clear, scalable, and actually enjoyable to use.

            I also have experience working with SEO optimization, site performance, and even the occasional WordPress project when it makes sense for the client (Elementor, Yoast SEO, caching tools — the whole stack). Recently, I redesigned a full travel agency website from 2016, giving it a modern structure, improved SEO, and better mobile usability.

            When I’m not coding, you’ll probably find me experimenting with new UI ideas, reading about cybersecurity and OSINT, or just having coffee while breaking something in my dev environment (and then fixing it, obviously). </p>
            <div className=" w-full flex justify-end py-3">
   <button onClick={() => {
            handleExpandText
            redirect(`/pages/about`)
          }
          } className="about-link">


            {!expandText &&

              <span className="flex justify-between items-center gap-3 text-nowrap">Read More
                <LinkArrow className="w-5 h-5" /></span>}

          </button>

</div>
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