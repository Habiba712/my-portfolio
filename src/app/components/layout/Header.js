'use client'

import Image from "next/image";
import logo_black from "../../../../public/icons/logo_in_black.svg";
// import logo_white from "../../public/icons/logo_in_white.svg";
// import { Cinzel_Decorative } from 'next/font/google';
// const cinzel = Cinzel_Decorative({ subsets: ['latin'], weight: '700' });
// import { Cormorant_Garamond } from 'next/font/google';
// const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: '600' });
import { Prata } from 'next/font/google';
import Link from "next/link";
import { redirect } from "next/navigation";

import HamburgerMenu from '../../../../public/icons/SVG/hamburgerMenu.js'
import { useState } from "react";



export default function Header() {

  const [showMenu, setShowMenu] = useState(false)
  const handleShowMenu = ()=>{
    setShowMenu(!showMenu)
  }

  return (
    <><header className="desktop-header project-title w-full flex items-start justify-between py-6 px-10">
      <div className="text-4xl font-bold  text-start ">
        {/* <Image src={logo_white} alt="logo" width={200} height={200}className="" /> */}
        <h1 className="cursor-pointer "
          onClick={() => {
            redirect('/')
          }}
        >VexAura</h1>
{/* for desktop */}
      </div>
      <div className="">
        <nav className="font-semibold menu-items-nav">
          <ul className="flex gap-4">
            <li>
              <a href="/#projects">Projects</a>
            </li>

            <li>
              <a href="/#about">About</a>
            </li>

            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="menu-items-socials flex gap-3 items-center ">
        <Link href="https://github.com/Habiba712" target="blank">
          <img src="/icons/github (1).png" alt="email" width={30} height={30} className="rounded-full" />
        </Link>
        <a
          target="blank"
          href={`mailto:habiba.taliby@gmail.com?subject=${encodeURIComponent('Hello from your site')}&body=${encodeURIComponent('Hi Habiba,\n\nI saw your portfolio and...')}`}
          className="text-blue-600 hover:underline"
        >
          <img src="/icons/email (1).png" alt="email" width={30} height={30} className="rounded-full" />
        </a>

        <Link target="blank" href="https://www.linkedin.com/in/habiba-taliby/">
          <img src="/icons/linkedin.png" alt="linkedin" width={30} height={30} className="rounded-full" />
        </Link>

      </div>




    </header>
{/* for mobile */}
<header className="mt-5">
  <div className="flex flex-col">
  <div className="flex w-full justify-between">
      <div className="text-4xl font-bold text-start w-50">
        <h1 className="cursor-pointer "
          onClick={() => {
            redirect('/')
          }}
        >VexAura</h1>

      </div>
      <div className="w-50 flex justify-end">
        <button  onClick={handleShowMenu}>
           <HamburgerMenu alt="hamburger menu" width={20} height={20} className="cursor-pointer w-10 h-10 felx"
      
        />
        </button>
       
      </div>
    
  </div>
  {
    showMenu && (
       <div className={`text-white mx-auto  text-sm w-full flex justify-end transition-all duration-700 ease-in-out
        ${showMenu ? 'translate-y-0 opacity-100':'-translate-y-full opacity-0'}
        `}
  
  >
     <nav className="font-semibold w-70"
      style={{
                        "background": "linear-gradient(135deg,rgba (255,255,255,0.1),rgba(255,255,255,0))",
                        "WebkitBackdropFilter": "blur(20px)",
                        "backdropFilter": "blur(20px)",
                        "boxShadow": "0 8px 20px 0 rgba(0,0,0,0.37)",
                        "border": "1px solid rgba(255,255,255,0.18)",
                        "borderRadius": "5px",
                    }}
     
     >
          <ul className="flex flex-col p-5 gap-4" >
            <li>
              <a href="/#projects">Projects</a>
            </li>

            <li>
              <a href="/#about">About</a>
            </li>

            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </nav>
  </div>
    )
  }
 
 
</div>
</header>

    </>
    
  )
}