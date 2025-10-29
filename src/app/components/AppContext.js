
'use client'

import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext({})

export function ThemeProvider({ children }) {
    const defautlProjects = [
        {
            _id: 104270931, name: "Korean Food Ordering App", pic: [
                "/my_projects/loptop_frame_foodordering.png",
                "/my_projects/phoneframe_foodorderingapp.png"

               


            ],
            page: 'https://food-ordering-app-zeta-pearl-86.vercel.app/',
              description:[
                "One of the most rewarding projects I have worked on was the full redesign and optimization of Morocco Immersion, a travel agency specializing in immersive cultural tours across Morocco — with unique experiences extending to Ecuador and Peru. The site was originally created in 2016, and while it had great content, it struggled with slow loading, poor organization, and an outdated design. My goal was to bring it back to life — preserving the authenticity of the brand while making it functional, modern, and optimized for travelers who want clarity and ease when planning their adventures.",

                " What I Did",
                {
                    subTitle:"Full Redesign with Elementor",
                    texto:"Rebuilt the homepage, About Us, and Contact pages using Elementor, giving the brand a fresh and responsive design. I focused on smoother navigation, clear call-to-actions, and visual storytelling through imagery — letting Morocco’s beauty shine through every section. "
                },
                {
                    subTitle:"Advanced Itinerary Setup with WP Travel Engine",
                    texto:"To simplify the booking and trip browsing experience, I integrated WP Travel Engine, which allows the agency to easily manage and update tour itineraries, group packages, and private trips with clear day-by-day descriptions and pricing."
                },
                {
                    subTitle:"SEO & Performance Optimization",
                    texto:"Using Yoast SEO Premium and SEMrush, I conducted internal audits, restructured metadata, refined keyword usage, and improved link hierarchy — making sure the content performs better in search results.                  I also implemented WP Optimizer to improve caching, minimize load times, and enhance overall performance."
                },{
                    subTitle:"Media & Content Organization",
texto:"I reorganized the media library, compressing and renaming images for faster loading and better SEO. It might sound minor, but for a travel website that relies heavily on visuals, it makes a massive difference in both speed and user experience."
                },{
                    subTitle:"Smart Form Integration",
                    texto:"Gravity Forms — setting up dynamic contact, booking, and guest forms, as well as a digital waiver form with e-signature support, which streamlined their client onboarding process."
                },{
                    subTitle:"Analytics & Monitoring",
                    texto:"Finally, I connected the site with Meta Metrics to monitor performance, track indexing issues, and keep an eye on engagement metrics post-launch."
                }
                


            ],
            tools:[
                "Next.js, ",
                "Tailwind CSS, ",
                "MongoDB, ",
                "Git, ",
                "Stripe, ",
                "OAuth, ",
                "Vercel"
            ]
        },
        {
            _id: 104270932, name: "Moroccan Travel Agency",

            pic: [
                 "/my_projects/laptop_frame_travelagency.png",
                 "/my_projects/phoneframe_travel_agency.png"
                
              
            ], page: 'https://moroccoimmersion.com/',
            description:[
                "One of the most rewarding projects I have worked on was the full redesign and optimization of Morocco Immersion, a travel agency specializing in immersive cultural tours across Morocco — with unique experiences extending to Ecuador and Peru. The site was originally created in 2016, and while it had great content, it struggled with slow loading, poor organization, and an outdated design. My goal was to bring it back to life — preserving the authenticity of the brand while making it functional, modern, and optimized for travelers who want clarity and ease when planning their adventures.",

                " What I Did",
                {
                    subTitle:"Full Redesign with Elementor",
                    texto:"Rebuilt the homepage, About Us, and Contact pages using Elementor, giving the brand a fresh and responsive design. I focused on smoother navigation, clear call-to-actions, and visual storytelling through imagery — letting Morocco’s beauty shine through every section. "
                },
                {
                    subTitle:"Advanced Itinerary Setup with WP Travel Engine",
                    texto:"To simplify the booking and trip browsing experience, I integrated WP Travel Engine, which allows the agency to easily manage and update tour itineraries, group packages, and private trips with clear day-by-day descriptions and pricing."
                },
                {
                    subTitle:"SEO & Performance Optimization",
                    texto:"Using Yoast SEO Premium and SEMrush, I conducted internal audits, restructured metadata, refined keyword usage, and improved link hierarchy — making sure the content performs better in search results.                  I also implemented WP Optimizer to improve caching, minimize load times, and enhance overall performance."
                },{
                    subTitle:"Media & Content Organization",
texto:"I reorganized the media library, compressing and renaming images for faster loading and better SEO. It might sound minor, but for a travel website that relies heavily on visuals, it makes a massive difference in both speed and user experience."
                },{
                    subTitle:"Smart Form Integration",
                    texto:"Gravity Forms — setting up dynamic contact, booking, and guest forms, as well as a digital waiver form with e-signature support, which streamlined their client onboarding process."
                },{
                    subTitle:"Analytics & Monitoring",
                    texto:"Finally, I connected the site with Meta Metrics to monitor performance, track indexing issues, and keep an eye on engagement metrics post-launch."
                }
                


            ],
            tools:[
                "WordPress, ",
                "Elementor, ",
                "WP Travel Engine, ",
                "Gravity Forms, ",
                "Meta Metrics, ",
                "Yoast SEO Premium, ",
                "SEMrush, ",
                "WP Optimizer, ",
                "Css, ",
                "Html"
            ]
            
            
            
            
         
           


           








        }
    ]
    const [myProjects, setMyProjects] = useState([])

    useEffect(() => {
        try {
            const storedProjects = localStorage.getItem("projectsItems")
            if (storedProjects) {
                setMyProjects(JSON.parse(storedProjects))
            }
            else {

                localStorage.setItem("projectsItems", JSON.stringify(defautlProjects))
                setMyProjects(defautlProjects)
            }
        }
        catch (e) {
            console.error({ "LocalStorage error": e })
            setMyProjects(defautlProjects)
        }
    }, [])

    // useEffect(() => {
    //   const storedItems = localStorage.getItem("projectsItems");
    //   if (!storedItems) {
    //     setMyProjects(JSON.parse());
    //   }
    // }, []);
    //      useEffect(() => {
    //     const storedItems = localStorage.getItem("projectsItems");
    //     if (storedItems) {
    //       setMyProjects(JSON.parse(storedItems));
    //     }
    //   }, []);
    //     let  projectsItems = localStorage.getItem('projectsItems')
    //      projectsItems = projectsItems ? JSON.parse(projectsItems) : myProjects
    //  useEffect(()=>{
    //     if(!localStorage.getItem('projectsItems')){
    //       localStorage.setItem('projectsItems', JSON.stringify(projectsItems));
    //  }
    //   },[projectsItems]);
    return (
        <ThemeContext.Provider value={{

            myProjects
        }}>{children}</ThemeContext.Provider>

    )
}