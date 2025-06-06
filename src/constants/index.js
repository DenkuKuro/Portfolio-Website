import { blog, SpikeConnect, insta, github, linkedin, StressBurnout } from "../assets";

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
    "HTML/CSS", "Javascript", "Node.js", "React", "Express JS", "Tailwind CSS", 
    "Bootstrap", "Python", "C/C++", "Github", "Git", "Bash"
];