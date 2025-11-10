'use client'

import Image from "next/image";
import logo_black from "../../../../public/icons/logo1.png";
// import logo_white from "../../public/icons/logo_in_white.svg";
// import { Cinzel_Decorative } from 'next/font/google';
// const cinzel = Cinzel_Decorative({ subsets: ['latin'], weight: '700' });
// import { Cormorant_Garamond } from 'next/font/google';
// const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: '600' });
import { Prata } from 'next/font/google';
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useRef } from "react";
import HamburgerMenu from '../../../../public/icons/SVG/hamburgerMenu.js'
import { useState } from "react";
import CloseMenu from "../../../../public/icons/SVG/closeMenu";



export default function Header() {

  const [showMenu, setShowMenu] = useState(false)
  const handleShowMenu = ()=>{
    setShowMenu(!showMenu)
  }
   const menuRef = useRef(null)
  
   useEffect(()=>{
    const handleClickOutside= (event)=>{
      if(menuRef.current && !menuRef.current.contains(event.target)){
        setShowMenu(false)
      }
      if(!menuRef.current && showMenu){
        setShowMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    // return()=>{
    //   document.removeEventListener('mousedown', handleClickOutside)
    // }
   },[])

   useEffect(()=>{
    const handleScrollMenu=()=>{
      if(window.scrollY>100){
        setShowMenu(false)
      }
    }

    document.addEventListener('scroll', handleScrollMenu)
   },[])
 
  return (
    <>
    
    {/* for desktop */}
    <header className="desktop-header project-title w-full flex items-center justify-between  py-6 px-10">
      <div className="text-4xl font-bold  text-start ">
        {/* <Image src={logo_white} alt="logo" width={200} height={200}className="" /> */}
       
        <div className="">
          <h1 className="cursor-pointer"
            onClick={() => {
              redirect('/')
            }}
            >VexAura
          </h1>
        </div>

      </div>
      <div className="relative -bottom-4">
        <nav className="menu-items-nav">
          <ul className="flex gap-4">
            <li className="relative group pb-5">
              <a href="/#projects">Projects
              <span className="absolute left-0 bottom-1 h-1 w-0 animated-gradient rounded-full transition-all duration-500 group-hover:w-full"
             
              
              ></span>
              </a>
              
            </li>

            <li className="relative group pb-5">
              <a href="/pages/about">About  <span className="absolute left-0 bottom-1 h-1 w-0 animated-gradient rounded-full transition-all duration-500 group-hover:w-full"></span> </a>
            </li>

            <li className="relative group pb-5">
              <a href="/#contact">Contact 
               <span className="absolute left-0 bottom-1 h-1 w-0 animated-gradient rounded-full transition-all duration-500 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="menu-items-socials flex gap-3 items-center ">
        <Link href="https://github.com/Habiba712" target="blank">
          <img src="/icons/git1.png" alt="github" width={30} height={30} className="rounded-full" />
        </Link>
        <a
          target="blank"
          href={`mailto:habiba.taliby@gmail.com?subject=${encodeURIComponent('Hello from your site')}&body=${encodeURIComponent('Hi Habiba,\n\nI saw your portfolio and...')}`}
          className="text-blue-600 hover:underline"
        >
          <img src="/icons/email1.png" alt="email" width={30} height={30} className="rounded-full" />
        </a>

        <Link target="blank" href="https://www.linkedin.com/in/habiba-taliby/">
          <img src="/icons/linkedin1.png" alt="linkedin1" width={30} height={30} className="rounded-full" />
        </Link>

      </div>




    </header>
{/* for mobile */}
<header className="mt-5 mobile-menu px-6">
  <div className="flex flex-col">
  <div className="flex w-full justify-between">
      <div className="text-4xl font-bold text-start w-50">
        <div className="">
        <h1 className="cursor-pointer"
            onClick={() => {
              redirect('/')
            }}
            >VexAura
          </h1>
        </div>

      </div>
      <div className="w-50 flex justify-end">
        <button  onClick={()=>{handleShowMenu()}} className="transition-all ease-in-out duration-700">
         
        {
          showMenu ? <CloseMenu  width={20} height={20} className="cursor-pointer w-10 h-10 felx"/> : <HamburgerMenu alt="hamburger menu" width={20} height={20} className="cursor-pointer w-10 h-10 felx"
      
        />
        }
        </button>
       
      </div>
    
  </div>
  {
    showMenu && (
       <div ref={menuRef} 
       className={`fixed z-100 top-10 right-10 text-white mx-auto  text-sm w-full flex justify-end transition-all duration-700 ease-in-out
        ${showMenu ? 'translate-y-0 opacity-100':'-translate-y-full opacity-0'}
        `}
  
  >
     <nav className="font-semibold w-70"
      style={{
                        "background": "linear-gradient(135deg,#1A2A4F,#1A2A4F)",
                        "WebkitBackdropFilter": "blur(50px)",
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
              <a href="/pages/about">About</a>
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