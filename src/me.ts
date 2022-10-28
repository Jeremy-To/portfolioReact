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
  SiHtml5,
  SiJavascript,
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
      degree: "Certificate of completion",
      major: "Computer Science (CS50)",
      school: "University of Harvard x EDX",
      graduation: "2022",
      awards: [""],
    },
    {
      degree: "Certificate of completion",
      major: "Front-end Development",
      school: "Codecademy",
      graduation: "2022",
      awards: [""],
    },
  ],
 
  projects: [
    {
      name: "Jérémy's website (This Website)",
      description: "A website to showcase my projects and resume",
      contribution:
        "I built the entire website from scratch using React.js, TypeScript, and Chakra UI and deployed it on Netlify.",
      technologies: ["React", "Typescript", "Chakra-UI", "Netlify"],
      links: [
        {
          name: "Jeremy TO Website",
          uri: "https://Jeremyto.com",
        },
        {
          name: "Github",
          uri: "https://github.com/Jeremy-To/portfolioReact",
        },
      ],
      image: "/assets/croissant.svg",
    },
    {
      name: "Tic-Tac-Toe",
      description:
        "A tic-tac-toe game where you can't win against the bot.",
      contribution:
        "I built it using conditional in javascript.",
      technologies: [
        "Javascript",
        "Css",
        "HTML",
      ],
      links: [
        {
          name: "tic-tac-toe",
          uri: "https://github.com/Jeremy-To/tic-tac-toe",
        },
      ],
      image: "https://content.getaudioshelf.com/logo.png",
    },
    {
      name: "Weather app",
      description: "A Wheather app using an api to get weather based on the place of your choise",
      contribution:
        "I built this app using react for fetching geolocalisation and weaather form it.",
      technologies: 
      [
        "React.js", "Javascript", "Css", "HTML"
      ],
      links: [
        {
          name: "Weather app",
          uri: "https://github.com/Jeremy-To/weather-app",
        },
      ],
      image: "/assets/dad.png",
    },
    {
      name: "Spotify App",
      description:
        "A web app to add songs to a new playlist using spotify api.",
      contribution:
        "I Built this app in order to enter a song name in a bar reaserch an to get all the songs for it and adding it to a playlist.",
      technologies:       [
        "React.js", "Javascript", "Css", "HTML"
      ],
      links: [
        {
          name: "Website",
          uri: "https://github.com/Jeremy-To/SpotifyApp",
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
      uri: "https://www.linkedin.com/in/jérémy-to-b13227253/",
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
