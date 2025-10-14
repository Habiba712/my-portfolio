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





export default function Header() {

  return (
    <header className="w-full flex items-center justify-between py-6 px-10">
      <div className="text-4xl font-bold  text-start ">
        {/* <Image src={logo_white} alt="logo" width={200} height={200}className="" /> */}
        <h1 className="cursor-pointer"
        onClick={()=> {
          redirect('/')
        }}
        >VexAura</h1>

      </div>
      <div className="">
        <nav className="font-semibold">
          <ul className="flex gap-4">
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#projects">Projects</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex gap-3 items-center">
        <Link href="/my-portfolio">
          <img src="/icons/github (1).png" alt="email" width={30} height={30} className="rounded-full" />
        </Link>
          <Link href="/my-portfolio">
          <img src="/icons/email (1).png" alt="email" width={30} height={30} className="rounded-full" />
        </Link>  <Link href="/my-portfolio">
          <img src="/icons/linkedin.png" alt="linkedin" width={30} height={30} className="rounded-full" />
        </Link>
     
      </div>

    </header>
  )
}