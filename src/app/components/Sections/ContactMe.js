'use client'

import SectionHeader from "../layout/SectionHeader"
import { motion } from "framer-motion";

export default function ContactMe() {
    return(

           <motion.section
                                   
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: 'easeOut' }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    className=""

                                >
 <section id="contact" className="w-full flex flex-col
        items-center">

<SectionHeader title={"Contact Me"} description={"Have a specific idea you want to bring to life? Get in touch, and let’s make it happen!"}/>
<div  className="desktop-about contact-section w-[60%] py-5" >
 
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
                    <button className="contact-link2" type="submit">Send</button>
                </div>
                
            </form>
            </div>
           
       

        
</div>
        <div className="mobile-about contact-section-mobile mb-20">
            {/* <h2 className="text-center font-sans text-4xl h-full flex justify-start items-center text-gray-400 text-start ">
                Love to hear from you. <br>
                </br>
                Get in touch 👋
            </h2> */}
            <div className="contact-section-content">
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
                    <button className="contact-link2" type="submit">Send</button>
                </div>
                
            </form>
            </div>
           
        </div>

</section>

                                </motion.section>
       
    )
}