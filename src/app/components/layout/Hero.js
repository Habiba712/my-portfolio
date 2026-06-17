import Image from "next/image";
import profile_pic from "../../../../public/profile.png";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";
const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "700"], // choose what you need
    variable: "--font-fancy",
});


export default function Hero() {
    return (
        <>
            {/* deskptop version */}
            <motion.section

                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.3 }}
                className="py-5"

            >
                <div className="desktop-hero mt-6 mb-6">
                    <div className="hero grid grid-cols-2 w-fit pt-5 h-fit">


                        <div className={`  
                     grow italic  font-bold w-full overflowX-auto ${playfair.className}`}>
                            <div className="hero-tag">👋 Welcome to my portfolio</div>


                            <h1 className="hero-text leading-[3rem] text-start font-sans">
                                Building <span className="highlight font-sans">digital experiences</span> that blend creativity & code</h1>


                            <p className="hero-subtitle ">
                                SEO Manager & Full Stack Developer specializing in React, Next.js, and performance-optimized web solutions.
                            </p>

                        </div>

                        <div className="hero-image h-fit">

                            {/* an edited photo of me */}
                            <div className="animate-fadeIn image-container flex justify-center items-center w-full h-full">
                                <Image src={profile_pic} alt="me" width={400} height={400} className="w-full h-full object-cover aspect-square rounded-full 
                "/>
                            </div>

                            <div className="floating-element badge-1 animate-dropTop  px-4 py-2">
                                <p className="badge-title">
                                    experience
                                </p>
                                <span className="badge-value">1+ Years</span>
                            </div>
                            <div className="floating-element animate-dropTop badge-2 px-4 py-2">
                                <p className="badge-title">
                                    Projects
                                </p>
                                <span className="badge-value">7+ Done</span>
                            </div>




                        </div>



                    </div>
                    <div className="w-full flex flex-col justify-center items-center">
                        <div className="cta-buttons w-full flex justify-center items-center">
                            <a
                                href="mailto:habibataliby@gmail.com?subject=Project%20Collaboration&body=Hi%20Ahn,%20I%20want%20to%20work%20with%20you..."
                                className="btn-mobile btn-primary"
                            >
                                Let's Work Together
                            </a>
                            <a
                                href="/habiba-taliby-cv.pdf"
                                download
                                className="btn-mobile btn-secondary"
                            >
                                Download CV
                            </a>
                        </div>
                        <div className="quote-section">
                            <p className="quote-text">
                                "We are all apprentices in a craft where no one ever becomes a master"
                            </p>
                            <span className="quote-author">
                                — Ernest Hemingway
                            </span>
                        </div>
                    </div>
                </div>




                {/* mobile version */}
                <div className="mobile-hero  flex flex-col justify-center items-center w-full mb-6 mt-10">

                    <div className="hero-image-mobile w-full">

                        {/* an edited photo of me */}
                        <div className="animate-fadeIn image-container-mobile flex justify-center items-center w-[50%] h-full mt-10 mb-6">
                            <Image src={profile_pic} alt="me" width={200} height={200} className=" rounded-full w-full h-full object-cover 
                "/>
                        </div>




                    </div>
                    <div className="flex flex-col items-center justify-center ">
                        <div class="hero-tag">👋 Welcome to my portfolio</div>


                        <h1 className="hero-text-mobile leading-[3rem] text-center font-sans">
                            Building <span className="highlight-mobile font-sans">digital experiences</span> that blend creativity & code</h1>

                        <p className="hero-subtitle-mobile">
                            SEO Manager & Full Stack Developer specializing in React, Next.js, and performance-optimized web solutions.
                        </p>

                        <div className="cta-buttons-mobile">
                            <a
                                href="mailto:yourname@email.com?subject=Project%20Collaboration&body=Hi%20Ahn,%20I%20want%20to%20work%20with%20you..."
                                className="btn-mobile btn-primary"
                            >
                                Let's Work Together
                            </a>
                            <button className="btn-mobile btn-secondary ">Download CV</button>
                        </div>
                        <div className="quote-section-mobile">
                            <p className="quote-text">
                                "We are all apprentices in a craft where no one ever becomes a master"
                            </p>
                            <span className="quote-author">
                                — Ernest Hemingway
                            </span>
                        </div>
                    </div>






                </div>
            </motion.section>













        </>

    )
}

