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
        id: "contact",
        title: "Contact",
    }
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
        tech: "HTML/CSS, Javascript, Bootstrap, Node.js, Express.js, EJS, Axios, REST API",
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