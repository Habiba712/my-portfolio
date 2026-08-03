

export const myProjects = [
    {
    _id: 104270930,
    name: "ECBI – Everybody Can Be Influencer",
    pic: [
        "/my_projects/ecbi.png",
        
    ],
    role: "Full Stack Developer",
    completed: "May 2026",
    duration: "8 months",
    features: [
        {
            title: "QR-Based Visit System",
            description: "QR code-based restaurant visits allowing clients to check in, earn points, and automatically update their visit history",
            icon: "qr_code"
        },
        {
            title: "Points & Rewards System",
            description: "Gamified loyalty system that rewards clients with points for visits and activities, with redeemable rewards managed by restaurant owners",
            icon: "star"
        },
        {
            title: "Role-Based Dashboards",
            description: "Separate client and restaurant-owner experiences with protected routes, permissions, statistics, and dedicated management tools",
            icon: "users"
        },
        {
            title: "Restaurant Analytics",
            description: "Owner dashboard providing statistics on visits, clients, reviews, points, and overall restaurant activity",
            icon: "chart"
        }
    ],
    technologyStack: [
        {
            title: "Frontend",
            description: [
                "Next.js",
                "React.js",
                "Tailwind CSS"
            ]
        },
        {
            title: "Backend",
            description: [
                "Node.js",
                "Express.js",
                "MongoDB"
            ]
        },
        {
            title: "Authentication & Security",
            description: [
                "JWT authentication",
                "Role-based authorization",
                "Protected API routes"
            ]
        },
        {
            title: "Deployment & Tools",
            description: [
                "Vercel",
                "MongoDB Atlas",
                "Git",
                "GitHub"
            ]
        }
    ],
    page: "https://ecbi.vercel.app/",
    overview: 'A full-stack digital loyalty and engagement platform designed to connect restaurants with their customers through a gamified points system. ECBI allows clients to earn points by visiting participating restaurants, scanning QR codes, and interacting with the platform, while restaurant owners can manage their establishment, monitor customer activity, track visits and reviews, and analyze engagement through a dedicated dashboard. The application combines role-based access control, real-time database interactions, QR-based workflows, and data-driven dashboards into a unified experience. \n For testing as a client, you can access the website url on your mobile device and use the following credentials : \n Email: demo01@gmail.com \n Password: 12345 \n For testing as a restaurant owner, you can use the following credentials: \n Email: davimiller@gmail.com \n Password: 12345',
    tasks: [
        {
            subTitle: "Role-Based Access & Dashboard Architecture",
            texto: "Designed and implemented separate experiences for clients and restaurant owners using role-based authentication and protected routes. Developed dedicated dashboards with features and data tailored to each type of user."
        },
        {
            subTitle: "QR-Based Restaurant Visit Tracking",
            texto: "Implemented a QR-based check-in workflow allowing clients to validate restaurant visits and automatically update their visit history and rewards. Connected the scanning process to backend validation and user-specific activity records."
        },
        {
            subTitle: "Points & Loyalty Management",
            texto: "Developed the core points system allowing users to earn rewards through restaurant visits and platform activities. Implemented backend logic for securely updating balances, tracking earned points, and maintaining user activity history."
        },
        {
            subTitle: "Restaurant Owner Management Dashboard",
            texto: "Built an administrative dashboard allowing restaurant owners to monitor customer activity, manage their point-of-sale information, view visits and reviews, and access statistics related to their establishment."
        },
        {
            subTitle: "Client Activity & Visit History",
            texto: "Created personalized client dashboards displaying earned points, visit history, reviews, notifications, and account information, providing users with a clear overview of their activity and rewards."
        },
        {
            subTitle: "Reviews & Customer Engagement",
            texto: "Integrated a restaurant review workflow connecting customer feedback with restaurant profiles and owner dashboards, creating an additional engagement layer within the loyalty platform."
        },
        {
            subTitle: "Secure API & Database Architecture",
            texto: "Designed RESTful API endpoints with Express.js and MongoDB for users, restaurants, visits, reviews, points, notifications, and authentication. Implemented validation, authorization middleware, and protected data flows across the application."
        }
    ],
    tools: [
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MongoDB Atlas",
        "JWT",
        "Git",
        "GitHub",
        "Vercel"
    ]
},
    {
    _id: 104270931,
    name: "Food Ordering App",
    pic: [
        "/my_projects/loptop_frame_foodordering.png",
        "/my_projects/food_ordering-app-login.png"
    ],
    role: "Full Stack Developer",
    completed: "September 2025",
    duration: "3 months",
    features: [
        {
            title: "Smart Cart System",
            description: "Persistent shopping cart with real-time price calculations and quantity management",
            icon: "cart"
        }, {
            title: "Stripe Integration",
            description: "Secure payment processing with multiple payment methods and automatic receipts",
            icon: "credit_card"
        }, {
            title: "User Authentication",
            description: "Secure login system with JWT tokens and role-based access control",
            icon: "users"
        }, {
            title: "Responsive Design",
            description: "Fully responsive interface optimized for mobile, tablet, and desktop",
            icon: "responsive"
        }
    ],
    technologyStack: [
        {
            title: "Frontend",
            description: [
                "Next.js",
                "Tailwind CSS",
                "React.js"
            ]
        },
        {
            title: "Backend",
            description: [
                "Node.js",
                "Express.js",
                "MongoDB"
            ]
        },
        {
            title: "Integrations",
            description: [
                "Stripe API",
                "JWT authentication",
                "Cloudinary (images)"
            ]
        }, {
            title: "Deployment",
            description: [
                "Vercel",
                "MongoDB Atlas",
                "GitHub"
            ]
        }
    ],
    page: 'https://food-ordering-app-zeta-pearl-86.vercel.app/',
    overview: "An immersive, production-ready full-stack food ordering application built to optimize client transactions and streamline administrative workflows. The platform handles end-to-end user experiences from responsive product browsing and deep cart customizability down to structural role-based layout access. Engineered with secure transaction flows, persistent state management, and real-time database lookups, the platform provides a cohesive interface for both digital foodies and backend administrators.",
    tasks: [
        {
            subTitle: "Role-Based Administrative Control System",
            texto: "Engineered secure middleware access rules validating user properties. Users with Admin permissions are dynamically routed to control boards where they can instantiate, modify, or delete database values for menu categories and individual food items."
        },
        {
            subTitle: "Dynamic Menu Management & Media Pipelines",
            texto: "Built complete CRUD administrative interfaces linked to product schemas. Integrated data flows allowing administrators to edit user profiles, configure core pricing matrices, and manage image uploads utilizing automated cloud media streams."
        },
        {
            subTitle: "State-Driven Variations & Shopping Cart",
            texto: "Designed a state-driven persistent shopping cart infrastructure processing mathematical calculations on the fly. Enabled full client-side configurability allowing users to seamlessly append item sizes, custom modifications, or extra toppings directly into their orders."
        }, {
            subTitle: "Secure Financial Gateway Implementation",
            texto: "Integrated Stripe merchant APIs to establish automated invoice routing and processing pipelines. Handled server-side response payloads to secure client checkouts, issue checkout forms, and confirm successful customer transaction receipts."
        }, {
            subTitle: "Client Self-Service Dashboards",
            texto: "Configured individual client routing schemas enabling standard users to easily manage their authentication profiles, audit historical order logs, and modify active cart states before checking out."
        }
    ],
    tools: [
        "Next.js",
        "Tailwind CSS",
        "MongoDB",
        "Git",
        "Stripe",
        "OAuth",
        "Vercel"
    ]
},
    {
        _id: 104270932,
        name: "Moroccan Travel Agency",
        pic: [
            "/my_projects/laptop_frame_travelagency.png",
            "/my_projects/MI_privatetours.png"


        ],
        role: "Wordpress Developer",
        completed: "March 2025",
        duration: "2 months",
        features: [
            {
                title: "Itinerary Builder",
                description: "Custom itinerary creation system allowing the team to add trip difficulty levels, tags, destinations, galleries, durations, accommodations, and more — all fully editable from the backend",
                icon: "trip"
            }, {
                title: "Form Builder",
                description: "Flexible form creation system using Gravity Forms, allowing the team to design and manage custom forms for inquiries, bookings, or feedback — fully configurable without touching code",
                icon: "form"
            }, {
                title: "Responsive Design",
                description: "Modern fully responsive layout designed to deliver a seamless browsing experience on mobile, tablet, and desktop",
                icon: "responsive"
            },
            {
                title:"trip advisor",
                description:"Integrated TripAdvisor reviews and rating widgets to build trust and showcase authentic guest feedback directly on the site",
                icon:"review"

            }

        ],
        technologyStack: [
    {
        title: "Frontend",
        description: [
            "WordPress Theme Customization",
            "HTML5, CSS3",
           
            "Elementor"
        ]
    },
    {
        title: "Backend",
        description: [
            "PHP",
            "MySQL"
        ]
    },
    {
        title: "Integrations",
        description: [
            "Gravity Forms",
            "Yoast SEO",
           "SEMrush",
            "Mailchimp",
            "Checkfont"
        ]
    },
    {
        title: "Deployment",
        description: [
            "GoDaddy Hosting"
        ]
    }
],       
        page: 'https://moroccoimmersion.com/',
        overview: "One of the most rewarding projects I have worked on was the full redesign and optimization of Morocco Immersion, a travel agency specializing in immersive cultural tours across Morocco — with unique experiences extending to Ecuador and Peru. The site was originally created in 2016, and while it had great content, it struggled with slow loading, poor organization, and an outdated design. My goal was to bring it back to life — preserving the authenticity of the brand while making it functional, modern, and optimized for travelers who want clarity and ease when planning their adventures.",
        tasks: [

            {
                subTitle: "Full Redesign with Elementor",
                texto: "Rebuilt the homepage, About Us, and Contact pages using Elementor, giving the brand a fresh and responsive design. I focused on smoother navigation, clear call-to-actions, and visual storytelling through imagery — letting Morocco’s beauty shine through every section. "
            },
            {
                subTitle: "Advanced Itinerary Setup with WP Travel Engine",
                texto: "To simplify the booking and trip browsing experience, I integrated WP Travel Engine, which allows the agency to easily manage and update tour itineraries, group packages, and private trips with clear day-by-day descriptions and pricing."
            },
            {
                subTitle: "SEO & Performance Optimization",
                texto: "Using Yoast SEO Premium and SEMrush, I conducted internal audits, restructured metadata, refined keyword usage, and improved link hierarchy — making sure the content performs better in search results.                  I also implemented WP Optimizer to improve caching, minimize load times, and enhance overall performance."
            }, {
                subTitle: "Media & Content Organization",
                texto: "I reorganized the media library, compressing and renaming images for faster loading and better SEO. It might sound minor, but for a travel website that relies heavily on visuals, it makes a massive difference in both speed and user experience."
            }, {
                subTitle: "Smart Form Integration",
                texto: "Gravity Forms — setting up dynamic contact, booking, and guest forms, as well as a digital waiver form with e-signature support, which streamlined their client onboarding process."
            }, {
                subTitle: "Analytics & Monitoring",
                texto: "Finally, I connected the site with Meta Metrics to monitor performance, track indexing issues, and keep an eye on engagement metrics post-launch."
            }



        ],
        tools: [
            "WordPress",
            "Elementor",
            "WP Travel Engine",
            "Gravity Forms",
            "Meta Metrics",
            "Yoast SEO Premium",
            "SEMrush",
            "WP Optimizer",
            "CSS",
            "HTML"
        ]
    },
    {
        _id: 104270933,
        name: "Tanzanian Travel Agency",

        pic: [
            "/my_projects/tanzanianTravelAgency.png",
        ],
        role: "Wordpress Developer",
        completed: "April 2025",
        duration: "2 weeks",
        features: [
            {
                title: "Itinerary Builder",
                description: "Custom itinerary creation system allowing the team to add trip difficulty levels, tags, destinations, galleries, durations, accommodations, and more — all fully editable from the backend",
                icon: "trip"
            }, {
                title: "Form Builder",
                description: "Flexible form creation system using Gravity Forms, allowing the team to design and manage custom forms for inquiries, bookings, or feedback — fully configurable without touching code",
                icon: "form"
            }, {
                title: "Responsive Design",
                description: "Modern fully responsive layout designed to deliver a seamless browsing experience on mobile, tablet, and desktop",
                icon: "responsive"
            },
            {
                title:"trip advisor",
                description:"Integrated TripAdvisor reviews and rating widgets to build trust and showcase authentic guest feedback directly on the site",
                icon:"review"

            }

        ],
        technologyStack: '',
        page: '',
        overview: "One of the most exciting projects I worked on was a full redesign and optimization for a Tanzanian travel company. Although the project was not launched publicly, I handled everything from layout restructuring and UI enhancements to performance optimization and responsive design. The goal was to modernize their web presence while maintaining their authentic, adventurous brand identity.",

        tasks: [

            {
                subTitle: "Full Redesign with Elementor",
                texto: "Rebuilt the homepage, About Us, and Contact pages using Elementor, giving the brand a fresh and responsive design. I focused on smoother navigation, clear call-to-actions, and visual storytelling through imagery — letting Morocco’s beauty shine through every section. "
            },
            {
                subTitle: "Advanced Itinerary Setup with WP Travel Engine",
                texto: "To simplify the booking and trip browsing experience, I integrated WP Travel Engine, which allows the agency to easily manage and update tour itineraries, group packages, and private trips with clear day-by-day descriptions and pricing."
            },

        ],
        tools: [
            "WordPress",
            "Elementor",
            "WP Travel Engine",
            "Css",
            "Html"
        ]
    },
    {
        _id: 104270934, name: "Park Info.",

        pic: [
            "/my_projects/parcinfo-login.png",

        ],
        role: "Full Stack Developer",
        completed: "May 2024",
        duration: "4 weeks",
        features: '',
          technologyStack: [
            {
                title: "Frontend",
                description: [
                    "React.js",
                    "CSS"
                  

                ]
            },
            {
                title: "Backend",
                description: [
                    "php",
                    "MySQL"
                ]
            },
            {
                title: "Integrations",
                description: [
                    "Stripe",
                    "JWT authentication",
                    "Cloudinary (images)",

                ]
            }
        ],
       
        page: '',
        overview: "Park Info was a web application developed as part of a school project to help the administration efficiently track and organize IT equipment such as laptops, keyboards, switches, and other materials. The system allowed users to register, update, and monitor assets, view their current locations, and identify which departments were using specific items.Although it was built primarily for academic evaluation and not deployed in production, the project showcased practical use of React.js for the frontend and MySQL for structured data management, along with CRUD functionalities, responsive UI design, and basic authentication features.",

        tasks: [

            {
                subTitle: "Frontend Development",
                texto: "I was mainly responsible for building the frontend with React.js, designing a clean, responsive interface that allowed users to easily view and update inventory data. I also set up RESTful API integration between the frontend and the MySQL database, handled form validation, and implemented CRUD operations for adding, editing, and deleting assets. "
            },
            {
                subTitle: "Backend Development",
                texto: "On the backend, I contributed to designing the database schema, ensuring each piece of equipment had clear relationships (e.g., assigned room, user, or status). I also helped with query optimization to make data retrieval faster."
            },
            {
                subTitle: "Resonsivness & User Experience",
                texto: "In addition, I focused on improving the user experience — using clear navigation, filters, and visual indicators to make it simple for admins to locate items and understand their current stock status at a glance."
            },
        ],
        tools: [
            "React.js",
            "CSS",
            "MySQL"

        ]
    },

    {
        _id: 104270935, name: "Personal Budget Tracker",

        pic: [
            "/my_projects/prbudg.png",
        ],
         role: "Full Stack Developer",
        completed: "January 2024",
        duration: "1 weeks",
        features: '',
          technologyStack: [
            {
                title: "Frontend",
                description: [
                    "React.js",
                    "CSS"
                  

                ]
            },
            {
                title: "Backend",
                description: [
                    "php",
                    "MySQL"
                ]
            }
        ],
        page: '',
        overview: "This project was built to help users manage their income, expenses, and savings in one clear, intuitive dashboard. It aimed to make financial tracking simple and visually insightful through interactive charts and organized transaction categories.",
        
        tasks: [

            {
                subTitle: "Frontend Development",
                texto: "I designed and developed the frontend using React.js, focusing on a responsive and minimal UI where users could easily add, edit, or delete transactions. I implemented state management for real-time balance updates and built dynamic charts using libraries like Chart.js to visualize spending trends and income distribution."
            },
            {
                subTitle: "Backend Development",
                texto: "On the backend, I worked with MySQL to structure the database for storing transaction records, categories, and user data securely. I also contributed to creating RESTful APIs for seamless communication between the frontend and backend."
            },
            {
                subTitle: "More Features",
                texto: "I added features such as date-based filtering, category summaries, and budget limit alerts, allowing users to better understand their financial habits."
            },
        ],
        tools: [
            "React.js",
            "CSS",
            "MySQL"
        ]
    },

    {
        _id: 104270936, name: "Citizen Services Website",

        pic: [
            "/my_projects/conseilMenara.png",
        ],
         role: "Full Stack Developer",
        completed: "March 2024",
        duration: "4 weeks",
        features: '',
          technologyStack: [
            {
                title: "Frontend",
                description: [
                    "React.js",
                    "CSS"
                  

                ]
            },
            {
                title: "Backend",
                description: [
                    "Laravel",
                    "MySQL"
                ]
            }
        ],
        technologyStack: '',
        page: '',
        overview: "This project aimed to create a clean and accessible static website for a local government institution, helping citizens easily find information about administrative procedures and the documents required for various requests (such as real estate papers, certificates, and public records).",
        tasks: [

            {
                subTitle: "Components and Structure",
                texto: "I developed the website using React.js, structuring the content into clear, categorized sections so users could quickly locate the information they needed. I focused on intuitive navigation, mobile responsiveness, and a consistent visual hierarchy to make the experience simple and professional. I also implemented dynamic routing for different services and categories, ensuring the site felt fluid even though it was static in nature. The design prioritized accessibility and readability, reflecting the tone and trust expected from a public institution.The project was a great opportunity to refine my frontend architecture and component-based design skills while working on a real-world use case focused on usability and clarity."
            }
        ],
        tools: [
            "React.js ",
            "CSS ",
            "MySQL "
        ]

    }

]