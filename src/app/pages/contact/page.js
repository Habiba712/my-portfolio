'use client'
import { redirect } from "next/navigation"
import { motion } from "framer-motion"
import Backarrow from "public/icons/SVG/back-arrow"
import SectionHeader from "@/app/components/layout/SectionHeader"
import EmailIcon from "public/icons/SVG/email"
import EmailIcon2 from "public/icons/SVG/email2"
import ArrowOblique from "public/icons/SVG/arrow-oblique"
import TripIcon from "public/icons/SVG/trip"
import SendIcon from "public/icons/SVG/send"
import LocationIcon from "public/icons/SVG/location"
import ClockIcon from "public/icons/SVG/clock"
import DotIcon from "public/icons/SVG/dot"

export default function Contact() {
    return (
        <>
               <header className="desktop-header project-title w-full grid grid-cols-2 items-center justify-between   border-b border-[navy] shadow-lg border-opacity-50">
                            <div className="text-4xl h-full font-bold">
            
            
                                <h1 className="logo w-full h-full flex items-center justify-start cursor-pointer w-fit "
                                    onClick={() => {
                                        redirect('/')
                                    }}
                                >Habiba Taliby
                                </h1>
            
            
                            </div>
                            <div className="w-full flex justify-end items-center">
                                <a className="btn-back" href="/#projects">
                                    <Backarrow className="w-8 h-8" /> Back to Projects
                                </a>
                            </div>
            
            
            
            
                        </header>
            
            
                        {/* for mobile */}
                        <header className="mobile-menu w-full">
                            <div className="flex flex-col">
                                <div className="flex justify-between ">
                                    <div className="text-4xl font-bold text-start ">
                                        <h1 className="logo  h-full flex items-center justify-start text-nowrap"
                                            onClick={() => {
                                                redirect('/')
                                            }}
                                        >Habiba Taliby
                                        </h1>
            
                                    </div>
                                    <div className="w-full flex justify-end">
                                        <a className="btn-back" href="/#projects">
                                            <Backarrow className="w-8 h-8" />
                                        </a>
                                    </div>
            
                                </div>
            
            
                            </div>
                        </header>

                        
 <section className="mt-15 w-full flex flex-col items-center justify-center py-6">
    
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="w-full flex flex-col items-center justify-center "
                >
                    <SectionHeader title={"Get In Touch"} description={"Have a specific idea you want to bring to life? Get in touch, and let’s make it happen!"} />
                    <div className="contact-page-container">
                        <div className="contact-info-cards">
                            <div>
                                <EmailIcon2 className="icon w-15 h-15 rounded-lg" />
                                <h3>Email Me</h3>
                                <p className="">
                                    For project inquiries or general questions
                                    </p>
                                    <a>habibataliby@gmail.com <ArrowOblique className="icon2 w-3 h-3" /></a>
                            </div>
                        </div>

                        <div className="contact-info-cards">
                            <div>
                                <LocationIcon className="icon w-15 h-15 rounded-lg" />
                                <h3>Location</h3>
                                <p className="">
                                   Based in Morocco, available for remote work worldwide
                                    </p>
                                  <span>Marrakesh, Morocco 🇲🇦</span>
                            </div>
                        </div>

 <div className="contact-info-cards">
                            <div>
                                <ClockIcon className="icon w-15 h-15 rounded-lg" />
                                <h3>Availability</h3>
                                <p className="">
                                  Currently open to new opportunities and freelance projects
                                    </p>
                                 <div className="availability">
                                    <DotIcon className="icon2 w-2 h-2 fill-green-500" />
                                     <span>Available for work</span>
                                 </div>
                            </div>
                        </div>

                    </div>
                    </motion.section>
                    <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="w-full flex flex-col items-center justify-center mb-15 "
                >
                    <div className="contact-page-form-container">
                        <div className="contact-page-form-content">
                            <h3>Send me a message</h3>
                            <span>Fill out the form below and I'll get back to you as soon as possible</span>
                          <form className="contact-page-form flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label>Name</label>
            <input 
            type="text"
            placeholder="Your Name"
            className="w-full rounded-lg border border-gray-300 p-4 bg-transparent text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-transparent"
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
                <div className="contact-form-btn w-full ">
                    <button className="contact-link2 text-xl" type="submit">Send
                        <SendIcon className="send-icon w-8 h-8 stroke-2" />
                    </button>
                </div>
                
            </form> 
                        </div>
                       
                    </div>
                </motion.section>
</section>
            </>
    )}