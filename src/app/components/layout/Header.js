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
import GitHub from "public/icons/SVG/gitHub";
import EmailIcon from "public/icons/SVG/email";
import LinkedIn from "public/icons/SVG/linkedIn";



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
    <header className="desktop-header project-title w-full grid grid-cols-3 items-center justify-between   border-b border-[navy] shadow-lg border-opacity-50">
      <div className="text-4xl h-full font-bold">
       
       
          <h1 className="logo w-full h-full flex items-center justify-start cursor-pointer w-fit "
            onClick={() => {
              redirect('/')
            }}
            >Habiba Taliby
          </h1>
        

      </div>
      <div className=" flex items-center justify-center">
        <nav className="menu-items-nav">
          <ul className="flex gap-4 ">
            <li className="">
              <a href="/#projects">Projects
            
              </a>
              
            </li>

            <li className=" ">
              <a href="/pages/about">About  </a>
            </li>

            <li className=" ">
              <a href="/#contact">Contact 
              
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="menu-items-socials flex gap-3 items-center justify-end ">
        <Link href="https://github.com/Habiba712" target="blank">
          <GitHub className="fill-[#F7A5A5] rounded-full w-8 h-8 cursor-pointer 
          hover:scale-130 hover:transform hover:translate-y-3 transition-all ease-in-out duration-500 hover:fill-[#FFDBB6] 
          " />
        </Link>
        <a
          target="blank"
          href={`mailto:habiba.taliby@gmail.com?subject=${encodeURIComponent('Hello from your site')}&body=${encodeURIComponent('Hi Habiba,\n\nI saw your portfolio and...')}`}
          className="text-blue-600 hover:underline"
        >
          <EmailIcon  className="w-8 h-8  cursor-pointer fill-[#F7A5A5]
          hover:scale-130 hover:transform hover:translate-y-3 transition-all ease-in-out duration-500 hover:fill-[#FFDBB6]
          " />
        </a>

        <Link target="blank" href="https://www.linkedin.com/in/habiba-taliby/">
          <LinkedIn className="w-8 h-8 cursor-pointer fill-[#F7A5A5]
          hover:scale-130 hover:transform hover:translate-y-3 transition-all ease-in-out duration-500 hover:fill-[#FFDBB6]
          " />
        </Link>

      </div>




    </header>


{/* for mobile */}
<header className="mobile-menu w-full">
  <div className="flex flex-col">
  <div className="flex justify-between ">
      <div className="text-4xl font-bold text-start ">
       <h1 className="logo  h-full flex items-center justify-start "
            onClick={() => {
              redirect('/')
            }}
            >Habiba Taliby
          </h1>

      </div>
      <div className="flex justify-end ">
        <button  onClick={()=>{handleShowMenu()}} className="transition-all ease-in-out duration-700">
         
        {
          showMenu ? <CloseMenu  width={20} height={20} className="cursor-pointer w-10 h-10 flex flex text-[#F7A5A5]"/> : <HamburgerMenu alt="hamburger menu"className="cursor-pointer w-10 h-10 flex text-[#F7A5A5]"
      
        />
        }
        </button>
       
      </div>
    
  </div>
   {
    showMenu && (
       <div ref={menuRef} 
       className={`fixed z-100 top-10 right-10 text-white mx-auto  text-sm w-full flex justify-end transition-all duration-900 ease-in-out
        ${showMenu ? 'translate-y-0 opacity-100':'-translate-y-full opacity-0'}
        `}
  
  >
     <nav className="mobile font-semibold w-70"
      style={{
                          "background": "linear-gradient(135deg, #1a2847 0%, #2d4263 100%)",

                        "WebkitBackdropFilter": "blur(10px)",
                        "backdropFilter": "blur(10px)",
                        "boxShadow": "0 8px 20px 0 rgba(0,0,0,0.37)",
                        "border": "1px solid rgba(255,255,255,0.18)",
                        "borderRadius": "5px",
                    }}
     
     >
          <ul className="flex flex-col gap-4" >
            <li className="">
              <a  href="/#projects">Projects</a>
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