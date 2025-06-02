import { blog, SpikeConnect, insta, github, linkedin } from "../assets";

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
        tech: "",
    },
    {
        title: "SpikeConnect",
        link: "https://github.com/rsg28/Spike-Connect?tab=readme-ov-file",
        image: SpikeConnect,
        tech: "",
    },
    {
        title: "Manga Cover Generator",
        link: "",
        image: "",
        tech: "",
    },
];