
'use client'
 
import { createContext, useEffect, useState } from 'react'
 
export const ThemeContext = createContext({})
 
export function ThemeProvider({ children }) {
    const defautlProjects = [
        { _id: 104270931, name: "ex1", pic:[
            "/my_projects/food_ordering-app-homepageD.png",
            "/my_projects/PO_desktopmycart.png",
            "/my_projects/PO_newhomepage.jpeg",
            "/my_projects/PO_newlogin.jpeg",
            "/my_projects/PO_newcart.jpeg",
            "/my_projects/PO_newmenuitem.jpeg",
            "/my_projects/PO_newaboutus.jpeg",
            ""

            
        ]},
        { _id: 104270932, name: "ex2", pic:[
            "/my_projects/food_ordering-app-homepageD.png",
            "/my_projects/food_ordering-app-homepageMobile.png",
            "/my_projects/food_ordering-app-homepage.png"
        ] },
        { _id: 104270933,name: "ex4", pic:[
            "/my_projects/food_ordering-app-homepageD.png",
            "/my_projects/food_ordering-app-homepageMobile.png",
            "/my_projects/food_ordering-app-homepage.png"
        ] }
    ]
    const [myProjects, setMyProjects] = useState([])

    useEffect(()=>{
        try{
            const storedProjects = localStorage.getItem("projectsItems")
            if(storedProjects){
                setMyProjects(JSON.parse(storedProjects))
            }
            else{
                
                localStorage.setItem("projectsItems", JSON.stringify(defautlProjects))
                setMyProjects(defautlProjects)
            }
        }
        catch(e){
            console.error({"LocalStorage error":e})
            setMyProjects(defautlProjects)
        }
    },[])

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
  return(
<ThemeContext.Provider value={{

    myProjects
}}>{children}</ThemeContext.Provider>

  ) 
}