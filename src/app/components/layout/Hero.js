import Image from "next/image";
import profile_pic from "../../../../public/Minimalist Chic Hijab Style _ Cream Blazer & Black Outfit.jpeg";
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
                    <h4 className="leading-[3rem] tracking-wide  animate-slideInLeft ">
                       ❝ Building digital worlds
                      
                            one clue at a time.❞
                     

                    </h4>

                    <div className="p-4 rounded-lg shadow-lg mt-6 flex flex-col gap-2 animate-dropTop bg-white items-center ">
                        <h3>Hi, I'm <span className="animated-gradient-text">Habiba Taliby</span></h3>
                         <p className="text-3xl font-bold  text-gray-600 text-center font-serif animated-gradient-text">SEO manager & Full Stack Developper</p>
                        <div>
                            <form className="flex flex-row justify-center items-center gap-3 mt-4">

                                <div className="flex gap-3 w-full">
                                    <button type="submit"
                                        className="button whitespace-nowrap w-50"
                                    >Hire Me</button>
                                    <button type="button" className="button  whitespace-nowrap w-50">
                                        Download CV
                                    </button>
                                </div>


                            </form>

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
                

                <div className="p-4 rounded-lg shadow-lg mt-6 flex flex-col gap-2 animate-dropTop bg-white items-center">
                    <h3>Hi, I'm <span className="animated-gradient-text">Habiba Taliby</span></h3>
                    <p className="animated-gradient-text text-3xl font-bold  text-gray-600 text-center font-serif">SEO manager & Full Stack Developper</p>
                    <div className="w-fit flex justify-center">
                        <form className="flex flex-row justify-center items-center mt-4">

                            <div className="flex gap-3 w-fit">
                                <button type="submit"
                                    className="button-light w-40 whitespace-nowrap "
                                >Hire Me</button>
                                <button type="button" className="button-dark w-40 button  whitespace-nowrap">
                                    Download CV
                                </button>
                            </div>


                        </form>

                    </div>

                </div>
<div className={`w-full px-2 mt-8 mb-8 grow italic items-center justify-between font-bold ${playfair.className}`}>
                    <div className="w-full">
                        <h4 className="italic text-center leading-[3rem] tracking-wide  animate-slideInLeft font-bold ">❝ Building digital worlds one clue at a time.❞
                           

                        </h4>
                    </div>

                   
                    



                </div>

            </div>
        </>

    )
}