import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import {
  FaDev,
  FaDiscord,
  FaEye,
  FaFacebookF,
  FaRegListAlt,
  FaRegNewspaper,
  FaRegUser,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { MdComputer, MdDashboard } from "react-icons/md";
import { SiFigma, SiFirebase, SiFiverr, SiNextdotjs, SiNodedotjs, SiSkype } from "react-icons/si";
import About from "./components/aboutPage/About";
import Blogs from "./components/blogsPage/Blogs";
import DevBlogs from "./components/blogsPage/DevBlogs";
import Contact from "./components/contactPage/Contact";
import GuestBook from "./components/guestbookPage/GuestBook";
import Resume from "./components/resumePage/Resume";
import Stats from "./components/statistics/Stats";
import Works from "./components/worksPage/Works";
import {
  ClientData,
  MenuData,
  ServiceData,
  SocialMedia,
  StatisticsData,
  TestimonialData,
} from "./types";

export const menus: MenuData[] = [
  {
    id: 1,
    label: "about",
    Icon: FaRegUser,
    Component: About,
  },
  {
    id: 2,
    label: "resume",
    Icon: FaRegListAlt,
    Component: Resume,
  },
  {
    id: 3,
    label: "projects",
    Icon: FaEye,
    Component: Works,
  },
  {
    id: 4,
    label: "blog",
    Icon: FaRegNewspaper,
    Component: DevBlogs,
  },
  // {
  //   id: 5,
  //   label: "stats",
  //   Icon: MdDashboard,
  //   Component: Stats,
  // },
  {
    id: 6,
    label: "contact",
    Icon: FiSend,
    Component: Contact,
  },
  {
    id: 7,
    label: "guest book",
    Icon: MdComputer,
    Component: GuestBook,
  },
];

export const socialMedia: SocialMedia[] = [
  {
    id: 1,
    Icon: FaFacebookF,
    label: "Facebook",
    logoColor: "#3b5998",
    mediaUrl: "http://fb.com/yantee98.g4",
    info: "Follow me on Facebook",
    name: "facebook",
  },
  {
    id: 2,
    Icon: AiOutlineGithub,
    label: "Github",
    logoColor: "#171515",
    mediaUrl: "https://github.com/hoojinguyen",
    info: "Star my projects on Github",
    name: "github",
  },
  {
    id: 3,
    Icon: AiFillLinkedin,
    label: "Linkedin",
    logoColor: "#0072b1",
    mediaUrl: "https://www.linkedin.com/in/yantee98",
    info: "Let's connect on Linkedin",
    name: "linkedin",
  },

  {
    id: 4,
    Icon: SiSkype,
    label: "Skype",
    logoColor: "#0072b1",
    mediaUrl: "https://join.skype.com/invite/FHry8Qh0vN4c",
    info: "Hire me on fiverr as freelancer",
    name: "skype",
  },
];

export const services: ServiceData[] = [
  {
    id: 1,
    title: "Front-end",
    Icon: SiNextdotjs,
    description: "Modern and mobile-ready website that will help you reach all of your marketing.",
  },
  {
    id: 2,
    title: "Back-end",
    Icon: SiNodedotjs,
    description: "Back-end with a NoSQL DB and API written in a standard express router or tRPC.",
  },
  {
    id: 3,
    title: "UI/UX design",
    Icon: SiFigma,
    description: "Modern user Interface trends with a highly professional and unique design.",
  },
  {
    id: 4,
    title: "Firebase",
    Icon: SiFirebase,
    description: "Fully functional firebase app with authentication, firestore, storage, etc.",
  },
];

export const clients: ClientData[] = [
  {
    id: 1,
    linkLocation: "https://www.linkedin.com/",
    imgLocation: "/images/lin.png",
  },
  {
    id: 2,
    linkLocation: "https://www.freelancer.com/",
    imgLocation: "/images/freelancer.png",
  },
  {
    id: 3,
    linkLocation: "https://www.upwork.com/",
    imgLocation: "/images/upwork.png",
  },
  {
    id: 4,
    linkLocation: "https://www.envato.com/",
    imgLocation: "/images/envato.png",
  },
];

export const quoteData: TestimonialData = {
  id: "quote",
  quote:
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  userName: "Martin Fowler",
  userProfession: "Software Developer",
  userImage: { url: "/images/martin.jpg" },
};

export const statisticsData: StatisticsData[] = [
  {
    title: "stack",
    info: "MERN or T3",
  },
  {
    title: "projects",
    info: "70+",
  },
  {
    title: "clients",
    info: "40+",
  },
];

export const skills = {
  frontend: [
    {
      id: 1,
      title: "HTML5",
      iconImage: { url: "/svg/html.svg" },
    },
    {
      id: 2,
      title: "CSS3",
      iconImage: { url: "/svg/css.svg" },
    },
    {
      id: 3,
      title: "Javascript",
      iconImage: { url: "/svg/javascript.svg" },
    },
    {
      id: 4,
      title: "ReactJS",
      iconImage: { url: "/svg/react.svg" },
    },
    {
      id: 5,
      title: "NextJS",
      iconImage: { url: "/svg/nextJS.svg" },
    },
    {
      id: 6,
      title: "VueJS",
      iconImage: { url: "/svg/vue.svg" },
    },
    {
      id: 7,
      title: "NuxtJS",
      iconImage: { url: "/svg/nuxtJS.svg" },
    },
  ],
  backend: [],
  devtools: [],
  softskills: [],
};
