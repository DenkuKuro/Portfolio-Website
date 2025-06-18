import { blog, SpikeConnect, insta, github, linkedin, StressBurnout,
    python,
    javascript,
    cpp,
    c,
    nodejs,
    react,
    bootstrap,
    html,
    css,
    jquery,
    tailwind,
    express,  
 } from "../assets";


export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "skills",
        title: "Skills"
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "experience",
        title: "Experience"
    },
    {
        id: "contact",
        title: "Contact",
    },
];


export const links = [
    {
        title: "Contact Links",
        links: [
            {
                name: "Github",
                link: "https://github.com/DenkuKuro",
                icon: github
            },
            {
                name: "Linkedn",
                link: "linkedin.com/in/javier-deng-65b000284",
                icon: insta
            },
            {
                name: "Instagram",
                link: "https://www.instagram.com/renovatedfromheaven/",
                icon: linkedin
            },
            {
                name: "Email",
                link: "javier.deng17@gmail.com",
            },
        ],
    },
    {
        title: "Section links?",
        links: [],
    }
];

export const projects = [
    {
        title: "Blog Post",
        link: "https://github.com/DenkuKuro/Blog-Post",
        image: blog,
        tech: "HTML/CSS, Javascript, Bootstrap, Node.js, Express.js, JQuery, Axios, REST API",
    },
    {
        title: "SpikeConnect",
        link: "https://github.com/rsg28/Spike-Connect",
        image: SpikeConnect,
        tech: " Javascript, React Native, Python, HTML/CSS, Selenium, Beautiful Soup",
    },
    {
        title: "Stress & Burnout Tracker",
        link: "https://github.com/DenkuKuro/Mountain-Madness-Project",
        image: StressBurnout,
        tech: "HTML/CSS, Javascript, Python, API, Browser Extension",
    },
];

export const skills = [
    "HTML", "CSS", "Javascript", "Node.js", "React", "Express JS", "Tailwind CSS", 
    "Bootstrap", "Python", "C", "C++", "Github", "Git", "Bash"
];

export const skillsIcon = [
    {
        tech: "HTML",
        icon: html,
        alt: "html icon"
    },
    {
        tech: "CSS",
        icon: css,
        alt: "css icon"
    },
    {
        tech: "Javascript",
        icon: javascript,
        alt: "javacript icon"
    },
    {
        tech: "Node.js",
        icon: nodejs,
        alt: "node js icon"
    },
    
    {
        tech: "React",
        icon: react,
        alt: "react icon"
    },
    
    {
        tech: "Express JS",
        icon: express,
        alt: "express js icon"
    },
    
    {
        tech: "Tailwind CSS",
        icon: tailwind,
        alt: "tailwind css icon"
    },
    
    {
        tech: "Bootstrap",
        icon: bootstrap,
        alt: "bootstrap icon"
    },
    
    {
        tech: "Python",
        icon: python,
        alt: "python icon"
    },
    
    {
        tech: "C",
        icon: c,
        alt: "c icon"
    },
    
    {
        tech: "C++",
        icon: cpp,
        alt: "c++ icon"
    },
    {
        tech: "JQuery",
        icon: jquery,
        alt: "jquery icon"
    }
]

export const experience = [
    {
        title: "Project Team Member, Web Design Marketing (WEA) ",
        description: [
            "Designed and developed two engaging landing pages using Figma, enhancing user experience and visual design.",
            "Demonstrated strong communication skills by effectively conveying ideas, fostering collaboration, and ensuring clarity in both verbal and written exchanges with team members and clients.",
            "Conducted thorough keyword research to identify relevant search terms and trends for your industry, and analyze competitors’ websites to understand their strategies, strengths, and gaps, which can inform your own SEO and content development.",

        ],
        date: "May 24, 2024 – Aug. 20, 2024",
        location: "Waterloo, ON",
        company: "University of Waterloo",
    },
    {
        title: "Dreamhacks Hackathon - SystemHacks 2025",
        description: [
            "Received the ”Project with Most Potential” award, recognizing its innovation and future scalability",
            "Participated in a 12-hour hackathon, competing against multiple teams.",
            "",
        ],
        date: "Mar. 15, 2025 – Mar. 15 2025",
        location: "Surrey, BC",
        company: "SystemHacks",
    }
];