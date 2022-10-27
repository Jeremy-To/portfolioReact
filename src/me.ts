import {
  FaDocker,
  FaGithub,
  FaLinkedin,
  FaNode,
  FaReact,
} from "react-icons/fa";
import {
  SiC,
  SiCss3,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiPython,
  SiTypescript,
} from "react-icons/si";

import { IMe } from "./me.interface";

export const me = {
  name: "Jérémy TO",
  subtitle: "Front-End Developer",
  tagline: '',
  about:
    "Junior Front-End Developer building website. I love making fun projects on the side. Checkout some of my recent projects below!",
  location: "Paris, France",
  image: "/assets/arhammusheer.jpeg",
  education: [
    {
      degree: "Bachelors of Science",
      major: "Computer Engineering",
      school: "University of Massachusetts Amherst",
      graduation: "May 2024",
      awards: ["Chancellor's Award: $12,000"],
    },
  ],
 
  projects: [
    {
      name: "Croissant.one (This Website)",
      description: "A website to showcase my projects and resume",
      contribution:
        "I built the entire website from scratch using React.js, TypeScript, and Chakra UI and deployed it on Vercel.",
      technologies: ["React", "Typescript", "Chakra-UI", "Vercel"],
      links: [
        {
          name: "Website",
          uri: "https://croissant.one",
        },
        {
          name: "Github",
          uri: "https://github.com/arhammusheer/croissant.one",
        },
      ],
      image: "/assets/croissant.svg",
    },
    {
      name: "AudioShelf",
      description:
        "A mobile app with over 2k users to discover audiobooks in 30 languages and summarize them in 5 minutes",
      contribution:
        "I built the backend infrastructure for the app including authentication systems, OAuth Scope and a REST API. I also built an internal CMS dashboard to manage content publishing and translations.",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "Google Cloud",
        "Docker",
        "OAuth2",
      ],
      links: [
        {
          name: "Website",
          uri: "https://getaudioshelf.com",
        },
        {
          name: "Play Store",
          uri: "https://play.google.com/store/apps/details?id=com.audioshelfapp",
        },
      ],
      image: "https://content.getaudioshelf.com/logo.png",
    },
    {
      name: "Dad API",
      description: "A REST API to get dad jokes and pickup lines",
      contribution:
        "I built the entire API from scratch using Node.js and Express and deployed it on Google Cloud Run.",
      technologies: ["Node.js", "Express", "Google Cloud", "Docker"],
      links: [
        {
          name: "Joke Endpoint",
          uri: "https://dad.croissant.one/api/joke",
        },
        {
          name: "Pickup Line Endpoint",
          uri: "https://dad.croissant.one/api/pickup",
        },
        {
          name: "Github",
          uri: "https://github.com/arhammusheer/dad-api",
        },
      ],
      image: "/assets/dad.png",
    },
    {
      name: "Loud Noises",
      description:
        "A web app to play loud noises when you're in the same chat room as them. Press the big red button to play a list of sounds on their device. No registration required.",
      contribution:
        "Built a full stack app with socket.io and deployed it on Heroku.",
      technologies: ["Node.js", "Express", "Socket.io", "Heroku", "Bootstrap"],
      links: [
        {
          name: "Website",
          uri: "https://loudnoises.herokuapp.com/",
        },
      ],
      image: "/assets/big-red-button.svg",
    },
  ],
  skills: [
    {
      name: "Typescript",
      icon: SiTypescript,
    },
    {
      name: "Html",
      icon: SiHtml5,
    },
    {
      name: "Css",
      icon: SiCss3,
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
    },
    {
      name: "Python",
      icon: SiPython,
    },
    {
      name: "C",
      icon: SiC,
    },
    {
      name: "React",
      icon: FaReact,
    },
    {
      name: "Node.js",
      icon: FaNode,
    },

  ],
  social: [

    {
      name: "Github",
      icon: FaGithub,
      uri: "https://github.com/Jeremy-To",
      hover: {
        bg: "gray.900",
        color: "white",
      },
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      uri: "https://www.linkedin.com/in/Jeremy-to/",
      hover: {
        bg: "blue.500",
        color: "white",
      },
    },
  ],

  contact: {
    email: "Jeremy_to@outlook.fr",
  },
} as IMe;
