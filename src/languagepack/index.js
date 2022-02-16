import cssIcon from "../assets/css-icon.svg";
import htmlIcon from "../assets/html-icon.svg";
import jsIcon from "../assets/js-icon.svg";
import nodeIcon from "../assets/node-icon.svg";
import reactIcon from "../assets/react-icon.svg";
import typescriptIcon from "../assets/typescript-icon.svg";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import instagramIcon from "../assets/instagram.png";
import discordIcon from "../assets/discord.png";
import github from "../assets/github-icon.svg";
import externalLinkIcon from "../assets/external-link-icon.svg";
import mui from "../assets/mui.svg";
import scss from "../assets/sass-icon.svg";
import jest from "../assets/jest.svg";
import rtl from "../assets/rtl.png";
import python from "../assets/python.svg";
import fastapi from "../assets/fastapi.svg";
import mongodb from "../assets/mongodb.svg";
import graphql from "../assets/graphql.png";

export const skillsIcon = [
  {
    name: "html",
    icon: htmlIcon,
  },
  {
    name: "css",
    icon: cssIcon,
  },
  {
    name: "scss",
    icon: scss,
  },
  {
    name: "js",
    icon: jsIcon,
  },
  {
    name: "node",
    icon: nodeIcon,
  },
  {
    name: "react",
    icon: reactIcon,
  },
  {
    name: "mui",
    icon: mui,
  },
  {
    name: "typescript",
    icon: typescriptIcon,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "fastapi",
    icon: fastapi,
  },
  {
    name: "mongodb",
    icon: mongodb,
  },
  {
    name: "graphql",
    icon: graphql,
  },
  {
    name: "jest",
    icon: jest,
  },
  {
    name: "reactTestingLibrary",
    icon: rtl,
  },
];

export const footerIcon = [
  linkedinIcon,
  githubIcon,
  instagramIcon,
  discordIcon,
];

export const aboutMe = {
  title: "About Me",
  name: "Mahvish Faridi",
  positions: "MERN Stack Devloper",
  skillsHeading: "Here are my main skills:",
  smallDescription:
    "'I'm a computer technician with a focus on web development with JavaScript.",
  paragraph: [
    {
      paragraph:
        "My name is Mahvish Faridi, I'm a computer technician with a great passion for programming. I am passionate about delivering solutions that add to people's lives and at the same time challenge me. Improved my skills as a Front-End and Back-End developer",
    },
    {
      paragraph:
        "I develop websites and applications using HTML, CSS, and JavaScript. I am familiar with developing layouts that provide me. I'm always improving myself with each project I get my hands on.",
    },
    {
      paragraph:
        "I am a dedicated person who pursues his dreams, hardworking and results oriented, I always seek to achieve my best version.",
    },
  ],
  constactButton: "Contact Me",
};
export const portfolio = {
  title: "My Portfolio",
  portfolio: [
    {
      projectTitle: "FCalendar",
      projectDescription:
        "A web application made during the FCamara training program Hackathon . This application is to help with the return from remote work to face-to-face work.",
      technology: ["node", "express", "MySql", "ejs"],
      links: [
        {
          url: "",
          image: github,
        },
        {
          url: "",
          image: externalLinkIcon,
        },
      ],
    },
    {
      projectTitle: "Github Searcher",
      projectDescription:
        "A nicer version to view your GitHub profile, includes data visualization, repositories, sharing and more.",
      technology: ["React", "StyledComponent"],
      links: [
        {
          url: "",
          image: github,
        },
        {
          url: "",
          image: externalLinkIcon,
        },
      ],
    },
    {
      projectTitle: "Sunnyside Agency",
      projectDescription:
        "A landing page of a fictional company proposed by Frontend Mentor.",
      technology: ["html", "css", "javascript"],
      links: [
        {
          url: "",
          image: github,
        },
        {
          url: "",
          image: externalLinkIcon,
        },
      ],
    },
    {
      projectTitle: "Dtmoney",
      projectDescription:
        "A finance manager to analyze your earnings, expenses and have greater control over your finances.",
      technology: ["VueJs"],
      links: [
        {
          url: "",
          image: github,
        },
        {
          url: "",
          image: externalLinkIcon,
        },
      ],
    },
    {
      projectTitle: "Music Library",
      projectDescription: "Music Library",
      technology: ["HTML", "CSS", "Javascript"],
      links: [
        {
          url: "",
          image: github,
        },
        {
          url: "",
          image: externalLinkIcon,
        },
      ],
    },
  ],
};

export const contact = {
  title: "Contact Me",
  description:
    "If you've seen my potential or want to talk to me, don't hesitate to send me a message.",
  email: "mahvishfaridi96@gmail.com",
  phone: "(91) 92-120-86-786",
  getInTouch: "Get in touch using the form below",
  thankYou: "Thank you for contacting us!",
  successMessage: "E-mail Sent Successfully",
  submitButton: "Sent",
  backToTop: "Back To Top",
};
