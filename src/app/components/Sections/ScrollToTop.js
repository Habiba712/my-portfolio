'use client';

import ScrollTop from "../../../../public/icons/SVG/scroll-totop"
const handleScrolltoTop = ()=>{
  window.scrollTo({top:-10, behavior:'smooth'})
}
export default function ScrolltoTop() {
    return(
        <section i className="w-full flex flex-col
        items-center">


  <div className="overflow-x-hidden w-full flex justify-end py-3 px-6">
          <button onClick={()=>handleScrolltoTop()} className="w-full flex justify-center items-center">
             <ScrollTop className="cursor-pointer  p-2 w-10 h-10 flex bg-[#F7A5A5] text-white rounded-full " />
          </button>
         
         </div>
    
</section>
    )
}