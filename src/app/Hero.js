import Image from "next/image";
import profile_pic from "../../public/Minimalist Chic Hijab Style _ Cream Blazer & Black Outfit.jpeg";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"], // choose what you need
  variable: "--font-fancy",
});


export default function Hero() {
    return (
        <div className="flex flex-row justify-between items-center w-full  px-5 py-10">
            <div className={`w-60 h-100 flex items-start justify-center grow text-3xl  font-semibold text-center ${playfair.className}`}>
                <p className="leading-[5rem] tracking-wide ">
                    Building digital worlds <br></br>
                     one<br></br>
                    
                    

                    Building digital worlds<br></br>
                      one <br></br>
                     
                    clue at a time.<br></br>
                   

                </p>
            </div>
            <div className="w-40 mr-8 flex grow ">
                {/* an edited photo of me */}
                <Image src={profile_pic} alt="me" width={500} height={300} className="rounded-full" />

            </div>
             <div className={`w-60 h-100  flex items-start justify-center grow text-3xl  font-semibold text-center ${playfair.className}`}>
                <p className="leading-[5rem] tracking-wide ">
                    Building digital worlds <br></br>
                     one<br></br>
                    
                    

                    Building digital worlds<br></br>
                      one <br></br>
                     
                    clue at a time.<br></br>
                   

                </p>
            </div>


        </div>
    )
}