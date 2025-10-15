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
        <div className="desktop-hero flex flex-row justify-between items-center w-full px-5 py-5 main-text-color mb-6 ">
            <div className={`w-60 h-100 flex flex-col items-start   justify-center grow italic px-8 font-bold text-center overflowX-auto ${playfair.className}`}>
                <p className="text-5xl leading-[3rem] tracking-wide  animate-slideInLeft">
                    <span className="">Building digital worlds 
                        </span><br></br>
                        <span className="">
                            one clue at a time.
                        </span>
                     
                </p>

                <div className="p-4 rounded-lg shadow-lg mt-6 flex flex-col gap-2 animate-dropTop bg-[#ffecf7ff] items-center">
                    <h3>Hi, I'm <span className="animated-gradient-text">Habiba Taliby</span></h3>
                    <p className="font-normal font-sans text-gray-600 ">Lorem f eo fpqjre fpqer mmvut ncbtuomw fnreqoif qoi frqijerojfq orfq ohrfoq hrfoqhrq oioijoijohoihpoj poj pjpj0 yfy trd vyv yd </p>
                    <div>
                        <form className="flex flex-row justify-center items-center gap-3 mt-4">
                            
                            <div className="flex gap-3 w-full">
                                  <button type="submit"
                            className="whitespace-nowrap w-50"
                            >Hire Me</button>
                            <button type="button" className="button  whitespace-nowrap w-50">
                                Download CV
                            </button>
                            </div>
                          

                        </form>

                    </div>

                </div>

            </div>
         
            <div className="w-40 mr-8 flex grow ">
                {/* an edited photo of me */}
                <Image src={profile_pic} alt="me" width={500} height={300} className="rounded-full
                animate-fadeIn
                
                " />

            </div>
          


        </div>
    )
}