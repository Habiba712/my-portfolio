'use client'

import SectionHeader from "../layout/SectionHeader"

export default function ContactMe() {
    return(
        <section id="contact" className="w-full flex flex-col gap-3 items-center">

<SectionHeader title={"Contact Me"} description={"You can use the form bellow in case you wanted to contact me"}/>
        <div className="desktop-about w-[60%] p-10 border border-gray-300 rounded-lg bg-white">
            {/* <h2 className="text-center font-sans text-4xl h-full flex justify-start items-center text-gray-400 text-start ">
                Love to hear from you. <br>
                </br>
                Get in touch 👋
            </h2> */}
            <div className="">
                 <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label>Name</label>
            <input 
            type="text"
            placeholder="Your Name"
            className="w-full rounded-lg border border-gray-300 p-4 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-transparent"
            />
                </div>
                <div className="flex flex-col gap-2">
                     <label>Email</label>
            <input 
            type="email"
            placeholder="Your Email"
            className=""
            />
                </div>
                 <div className="flex flex-col gap-2">
                     <label>Message</label>
           <div className="rounded-lg "><input 
            type="textarea"
            placeholder=""
            className="border-gray-400 rounded-lg h-40 w-full text-sm text-gray-700  focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
            />
            </div> 
                </div>
                <div className="w-full ">
                    <button className="w-full animate-shake" type="submit">Send</button>
                </div>
                
            </form>
            </div>
           
        </div>

         <div className="mobile-about w-[80%] p-10 border border-gray-300 rounded-lg bg-white">
            {/* <h2 className="text-center font-sans text-4xl h-full flex justify-start items-center text-gray-400 text-start ">
                Love to hear from you. <br>
                </br>
                Get in touch 👋
            </h2> */}
            <div className="">
                 <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label>Name</label>
            <input 
            type="text"
            placeholder="Your Name"
            className="w-full rounded-lg border border-gray-300 p-4 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-transparent"
            />
                </div>
                <div className="flex flex-col gap-2">
                     <label>Email</label>
            <input 
            type="email"
            placeholder="Your Email"
            className=""
            />
                </div>
                 <div className="flex flex-col gap-2">
                     <label>Message</label>
           <div className="rounded-lg "><input 
            type="textarea"
            placeholder=""
            className="border-gray-400 rounded-lg h-40 w-full text-sm text-gray-700  focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
            />
            </div> 
                </div>
                <div className="w-full ">
                    <button className="w-full animate-shake" type="submit">Send</button>
                </div>
                
            </form>
            </div>
           
        </div>
</section>
    )
}