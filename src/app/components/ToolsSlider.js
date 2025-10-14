'use client'

import React from 'react';
import Slider from "react-slick";
// import slick css once (you can also move these imports to app/layout.js or pages/_app.js)
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



// duplicate the list for extra smoothness

export default function ToolSlider({tools}) {

const duplicated = [...tools, ...tools];

  const settings = {
    infinite: true,
    slidesToShow: 6,          // visible at once (adjust)
    slidesToScroll: 1,
    autoplay: true,
    speed: 20000,             // total ms it takes to go one full "loop" (adjust)
    autoplaySpeed: 0,         // no delay between auto scrolls
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    draggable: false,
    variableWidth: false,
    // responsive: [
    //   { breakpoint: 1024, settings: { slidesToShow: 5 } },
    //   { breakpoint: 768, settings:  { slidesToShow: 3 } },
    //   { breakpoint: 480, settings:  { slidesToShow: 2 } }
    // ],
  };

  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {duplicated.map((tool, i) => (
          <div key={`${tool.name}-${i}`} className="flex flex-col items-center justify-center p-4 ">
            {/* use plain img for slider stability; swap to next/image if you need optimization */}
            <div className='flex justify-center '>
               <img src={tool.logo} alt={tool.name} className="w-16 h-16 object-contain mb-2" />
            </div>
           
            <p className="tool-names text-center">{tool.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
