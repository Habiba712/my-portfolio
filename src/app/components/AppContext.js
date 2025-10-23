
'use client'

import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext({})

export function ThemeProvider({ children }) {
    const defautlProjects = [
        {
            _id: 104270931, name: "Korean Food Ordering App", pic: [
                "/my_projects/loptop_frame_foodordering.png",
                "/my_projects/food_ordering-app-homepageD.png",
                "/my_projects/PO_desktopmycart.png",
                "/my_projects/PO_newhomepage.jpeg",
                "/my_projects/PO_newlogin.jpeg",
                "/my_projects/PO_newcart.jpeg",
                "/my_projects/PO_newmenuitem.jpeg",
                "/my_projects/PO_newaboutus.jpeg",
                ""


            ],
            page: 'https://food-ordering-app-zeta-pearl-86.vercel.app/'
        },
        {
            _id: 104270932, name: "Moroccan Travel Agency",

            pic: [
                 "/my_projects/laptop_frame_travelagency.png",
                
                "/my_projects/moroccoimmersion_hopepage.png",

                "/my_projects/MI_trips.png",

                "/my_projects/MI_privatetours.png",
                "/my_projects/MI_tripexample.png",
                "/my_projects/MI_itinerary.png",
                "/my_projects/MI_booklinks.png",
            ], page: 'https://moroccoimmersion.com/'

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