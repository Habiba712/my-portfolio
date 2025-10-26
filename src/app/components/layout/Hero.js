import Image from "next/image";
import profile_pic from "../../../../public/profile.jpeg";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "700"], // choose what you need
    variable: "--font-fancy",
});


export default function Hero() {
    return (
        <>
        {/* deskptop version */}
            <div className="desktop-hero flex flex-row justify-between items-center w-full px-5 py-5 main-text-color mb-6 ">
                <div className={`w-60 h-100 flex flex-col items-center   justify-center grow italic px-8 font-bold text-center overflowX-auto ${playfair.className}`}>
                    <div className="quote-text flex flex-col items-center justify-center p-4">
                         <h4 className="leading-[3rem] tracking-wide  animate-slideInLeft ">
                       ❝ We are all apprentices in a craft where no one ever becomes a master❞

                     

                    </h4>
                    <span className="italic font-light text-end w-full">
Ernest Hemingway
                    </span>
                    </div>
                   

                    <div className="p-4 tracking-wide  rounded-lg shadow-lg mt-6 flex flex-col gap-2 animate-dropTop bg-white items-center ">
                        <h3 className="leading-[3rem]">Hi, I'm Habiba Taliby <br/> SEO manager & Full Stack Developper</h3>
                        
                     
                           

                                <div className="flex gap-3 w-full">
                                    <button 
                                        className="button-light whitespace-nowrap w-50"
                                    >Hire Me</button>
                                    <button className="button-dark  whitespace-nowrap w-50">
                                        Download CV
                                    </button>
                                </div>



                       

                    </div>

                </div>

                <div className="w-40 mr-8 flex grow items-start  h-100">
                    {/* an edited photo of me */}
                    <Image src={profile_pic} alt="me" width={500} height={300} className="rounded-full 
                animate-fadeIn
                
                " />

                </div>



            </div>

            {/* mobile version */}
            <div className="mobile-hero main-text-color px-3 flex flex-col justify-center">
                

                <div className="p-4 tracking-wide text-sm rounded-lg shadow-lg mt-6 flex flex-col gap-2 animate-dropTop bg-white justify-center ">
                    <h3 className="leading-[3rem] text-sm text-center">Habiba Taliby <br/> SEO manager & Full Stack Developper</h3>
                   
                   
                            <div className="flex gap-3 w-full justify-center ">
                                <button 
                                    className="button-light w-40 whitespace-nowrap "
                                >Hire Me</button>
                                <button className="button-dark w-40 button  whitespace-nowrap">
                                    Download CV
                                </button>
                            </div>


                       

                </div>
<div className={`w-full px-2 mt-8 mb-8 grow italic items-center justify-between font-bold ${playfair.className}`}>
                     <div className="quote-text w-full flex flex-col items-center justify-center p-4">
                         <h4 className="quote-text leading-[3rem] text-center tracking-wide  animate-slideInLeft ">
                       ❝ We are all apprentices in a craft where no one ever becomes a master❞

                     

                    </h4>
                    <span className="italic text-end w-full font-light">
Ernest Hemingway
                    </span>
                    </div>

                   
                    



                </div>

            </div>
        </>

    )
}