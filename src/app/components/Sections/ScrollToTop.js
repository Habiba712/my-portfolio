'use client';

import ScrollTop from "../../../../public/icons/SVG/scroll-totop"
const handleScrolltoTop = ()=>{
  window.scrollTo({top:-10, behavior:'smooth'})
}
export default function ScrolltoTop() {
    return(
        <section className="w-full flex flex-col
        items-center">


  <div className="absolute bottom-10 overflow-x-hidden w-full flex justify-end py-3 px-6">
          <button onClick={()=>handleScrolltoTop()} className="w-fit flex justify-end items-center">
             <ScrollTop className="scroll-top-btn w-10 h-10 " />
          </button>
         
         </div>
    
</section>
    )
}