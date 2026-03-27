import { FaMoon } from "react-icons/fa";
import Squers from "./assets/images/squers.svg";
import Lines from "./assets/images/Lines.svg";
import Personal_photo from "./assets/images/Personal_photo.png";
import Circle from "./assets/images/Circle.png";
import Dots from "./assets/images/dots.png";
import icons from "./assets/images/icons2.png";
import CV from "./assets/CV.pdf";
import TimeLine from "./assets/images/TimeLine.svg";
import rightDots from "./assets/images/rightDots.svg";
import leftDots from "./assets/images/leftDots.svg";
import AboutBox from "./assets/images/AboutBox.png";
import Athar from "./assets/images/Projects/Athar.jpg";
import Search from "./assets/images/Projects/search_engines.webp";
import File from "./assets/images/Projects/FileManagement.jpg";
import Social from "./assets/images/Projects/PostBlug.jpg";
import Travel from "./assets/images/Projects/Travel.jpeg";
import Home from "./assets/images/Projects/HomeService.jpeg";
import Task from "./assets/images/Projects/TaskImage.jpeg";

import { LuMoveUpRight } from "react-icons/lu";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaGithub, FaTelegramPlane } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

import Icon from "./components/ui/Icon";
import {
  FiCode,
  FiLayout,
  FiServer,
  FiDatabase,
  FiLayers,
  FiTool,
} from "react-icons/fi";

export const AboutDescription = `
Solution-oriented Full Stack Developer and Software Engineer specializing in Laravel and React.
Experienced in building scalable systems, robust REST APIs, and efficient database solutions.
Strong background in backend architecture, clean code practices, and delivering end-to-end projects across the SDLC.
`;
export const navItems = {
  name: "Zaid",
  sections: [
    { label: "Home", id: "home" },
    { label: "About Me", id: "about" },
    { label: "Education", id: "education" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ],
  icon: <FaMoon />,
};

export const HeroItem = {
  title: "Hello, I’m Zaid",
  subtitle: "Full Stack Developer",
  description:
    "focused on building reliable backend systems and modern frontend experiences using Laravel and React.",
  button: "Download CV",
  lines: Lines,
  Squers: Squers,
  personal_photo: Personal_photo,
  Circle: Circle,
  Dots: Dots,
  CV: CV,
};

export const AboutItem = {
  titleComponent: {
    title: "About Me",
    subtitle: "Get to know me",
    // description: "description",
  },
  icons,
  description: AboutDescription,
  languages: [
    {
      name: "Laravel",
      value: 90,
    },
    {
      name: "React",
      value: 85,
    },
    {
      name: "HTML CSS JS",
      value: 80,
    },
    {
      name: "MySQL",
      value: 90,
    },
    {
      name: "TailwindCSS,  BootStrap",
      value: 75,
    },
  ],
};

export const SkillsItem = {
  titleComponent: {
    title: "Technical Skills",
    subtitle: "Skills & Expertise",
    description: "Technologies and tools I work with",
  },

  skills: [
    {
      name: "Programming Languages:",
      icon: <FiCode />,
      value: "PHP, JavaScript, Java, C++, HTML5, CSS",
    },
    {
      name: "Front-end Development:",
      icon: <FiLayout />,
      value: "React, TailwindCSS, Responsive UI Development",
    },
    {
      name: "Back-end Development:",
      icon: <FiServer />,
      value: "Laravel, RESTful APIs",
    },
    {
      name: "Databases:",
      icon: <FiDatabase />,
      value: "MySQL, MongoDB",
    },
    {
      name: "Architecture:",
      icon: <FiLayers />,
      value:
        "MVC, 3-Tier Architecture, Service & Repository Pattern, SOLID Principles, Clean Code",
    },
    {
      name: "Tools & Platforms:",
      icon: <FiTool />,
      value:
        "Git, GitHub, Redis, Stripe, Firebase, Cloudinary, Google Cloud, DigitalOcean",
    },
  ],
};

export const AchievementsItem = {
  titleComponent: {
    // title: "Achievements",
    subtitle: "Achievements",
    // description: "My personal and professional achievements",
  },
  items: [
    "Solved 300+ problems on Codeforces",
    "Participant in Damascus Collegiate Programming Contest (DCPC)",
    "Participant in World Robot Olympiad (WRO)",
  ],
};

export const EducationTrainingData = {
  titleComponent: {
    title: "Education & Training",
    subtitle: "My Journey",
    // description: "My educational background and training experiences",
  },
  items: [
    {
      type: "Education",
      title: "Bachelor of Science in Software Engineering",
      organization: "University of Damascus, Damascus, Syria",
      date: "Jan 2020 -May 2025",
    },
    {
      type: "Training",
      title: "Backend & Web Development Training",
      organization: "BeeDelivery Private Joint Stock Company",
      date: "Aug 14, 2024 – Dec 5, 2024",
      description:
        "Completed a 4-month intensive training program focused on backend and web development.",
      skills: ["Laravel", "RESTful APIs", "JavaScript", "jQuery", "MySQL"],
    },
  ],
};

export const ExperienceItem = {
  titleComponent: {
    title: "Career Journey",
    subtitle: "Professional Experience",
    // description: "My work history and notable projects",
  },
  timeLine: TimeLine,
  rightDots: rightDots,
  leftDots: leftDots,
  length: 3,
  experience: [
    {
      id: 1,
      title: "Teaching Assistant",
      company: "Damascus University – Faculty of Informatics",
      date: "Oct 2025 – Present",
      description:
        "Assist in teaching programming courses and support students during lab sessions by debugging code and explaining core concepts. Apply and reinforce advanced Java OOP and clean code practices while developing mentoring and communication skills.",
    },
    {
      id: 2,
      title: "Internship Trainee",
      company: "BeeDelivery Private Joint Stock Company",
      date: "August 14, 2024 – December 5, 2024",
      description:
        "Completed a 4-month intensive training program focused on backend and web development. Hands-on experience in Laravel, RESTful APIs, JavaScript & jQuery, and MySQL. Completed two projects: a post blog system and a task management application.",
    },
    {
      id: 3,
      title: "Competitive Programming Contestant",
      company: "ICPC",
      date: "2021",
      description:
        "Competed in the International Collegiate Programming Contest (ICPC), one of the most prestigious programming competitions worldwide. Participated in 4 contests, solving complex algorithmic problems under time pressure. Achievements: 500+ problems solved, best rank 16/31, 4x contests. Strong skills in C++, algorithms, data structures, problem solving, and mathematics.",
    },
  ],
};

export const AboutBoxItem = {
  backGround: AboutBox,
  title: "Try me out, risk free!",
  description:
    "I'm always looking for new challenges and opportunities to grow. If you'd like to work together or just say hi, feel free to reach out. I promise to respond as soon as I can.",
  button: "Contact ",
};

export const ProjectsData = {
  titleComponent: {
    title: "portfolio ",
    subtitle: "Featured Projects",
    description: "My Creative Works Latest Projects",
  },
  button: {
    name: "view github",
    icon: <LuMoveUpRight />,
    url: "https://github.com/zaid-kreshati",
  },
  projects: [
    {
      id: 1,
      name: "Athar – Community & Complaint Management System (API)",
      image: Athar,
      date: "2025",
      technologies: [
        "Laravel",
        "MySQL",
        "Spatie",
        "RBAC",
        "Stripe",
        "Cloudinary",
        "Google Cloud",
        "Google Maps",
        "DigitalOcean",
      ],
      highlights: [
        "Role-based system (admin, client, provider)",
        "Dynamic priority scoring",
        "Optimized with caching and indexing",
      ],

      description: [
        "Built a scalable complaint management platform with role-based access (admin, client, provider)",
        "Implemented dynamic priority scoring based on urgency, attachments, and location",
        "Enhanced performance with indexing, caching, and scalable architecture",
      ],
      github: "https://github.com/zaid-kreshati/The-Community-",

    },
    {
      id: 2,
      name: "Search Engine Project (Full Stack + ML)",
      image: Search,
      date: "2025",
      technologies: [
        "Python",
        "FastAPI",
        "React",
        "MongoDB",
        "BERT",
        "Scikit-learn",
      ],
      highlights: ["Implemented BM25, TF-IDF, BERT", "70.1% MAP score"],
      description: [
        "Built full search engine with FastAPI backend and React frontend",
        "Implemented BM25, TF-IDF, and BERT ranking algorithms",
        "Processed large datasets with embeddings and query expansion",
        "Achieved 70.1% MAP score on BEIR-Quora benchmark",
      ],
      github: "https://github.com/zaid-kreshati/Search-engine",
    },
    {
      id: 3,
      name: "File Management System (Full Stack)",
      image: File,
      technologies: ["Laravel", "MySQL", "Blade", "Bootstrap"],
      date: "2024",
      description: [
        "Developed secure file-sharing system with version control",
        "Implemented check-in/check-out locking system",
        "Optimized performance with caching and pagination",
      ],
      github: "https://github.com/zaid-kreshati/File-management",
    },
    {
      id: 4,
      name: "Social Media Blog Platform (Full Stack)",
      image: Social,
      date: "2024",
      technologies: [
        "Laravel",
        "MySQL",
        "Blade",
        "Redis",
        "Two-Factor Authentication",
      ],
      description: [
        "Built full blogging platform with service/repository architecture",
        "Added tagging, nested comments, and Redis caching",
        "Implemented admin analytics dashboard",
      ],
      github: "https://github.com/zaid-kreshati/Post-blog",
    },
    {
      id: 5,
      name: "Travelova – Travel Booking System (API)",
      image: Travel,
      date: "2023",
      technologies: ["Laravel", "MySQL", "REST API", "Laravel Passport"],
      description: [
        "Developed backend for travel booking system",
        "Managed hotels, cars, flights, and destinations",
        "Implemented booking workflow and favorites feature",
      ],
      github: "https://github.com/zaid-kreshati/TourismApp",
    },
    {
      id: 6,
      name: "Task Management System",
      date: "2023",
      image: Task,
      technologies: ["Laravel", "Stripe", "Queue"],
      highlights: [
        "Subtasks, categories, payments",
        "Scheduler & notifications",
      ],
      description: [
        "Built task management system with subtasks, categories, and payments",
        "Implemented scheduler for task automation and notifications",
      ],
      github: "https://github.com/zaid-kreshati/Task-management",
    },
    {
      id: 7,
      name: "Homy Home (API)",
      date: "2023",
      image: Home,
      technologies: ["Laravel", "Firebase"],
      highlights: ["Real-time notifications", "Booking & rating system"],
      description: [
        "Built home service API with real-time notifications",
        "Implemented booking workflow and rating system",
      ],
      github: "https://github.com/zaid-kreshati/Home-Service",
    },
  ],
};

export const LanguagesItem = {
  titleComponent: {
    // title: "Languages",
    subtitle: "Languages",
  },
  items: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Excellent" },
  ],
};

export const ContactData = {
  titleComponent: {
    title: "Get In Touch",
    subtitle: "Contact",
  },
  contacts: [
    {
      id: 1,
      name: "Phone",
      icon: <Icon Icon={Phone}></Icon>,
      value: "+963 934 226 600",
    },

    {
      id: 2,
      name: "Email",
      icon: <Icon Icon={Mail}></Icon>,
      value: "zed.kreshati.2001@gmail.com",
    },

    {
      id: 3,
      name: "Location",
      icon: <Icon Icon={MapPin}></Icon>,
      value: "Damascus, Syria",
    },
  ],
};

export const ContactFormData = {
  title: "Contact Me",
  fields: [
    {
      name: "name",
      type: "text",
      placeholder: "Full Name",
      required: true,
      size: "medium",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email Address",
      required: true,
      size: "medium",
    },
    {
      name: "phone",
      type: "tel",
      placeholder: "Phone Number",
      required: false,
      size: "large",
    },
    {
      name: "message",
      type: "textarea",
      placeholder: "Your Message...",
      required: true,
      size: "large",
    },
  ],
  buttonText: "Send Message",
};

export const FooterData = {
  copyright: "@ 2026. All Rights Reserved",
  developmentBy: "Zaid Kreshati",
  socialMedia: [
    {
      id: 1,
      name: "Facebook",
      icon: <Icon Icon={FaFacebookF}></Icon>,
      url: "https://www.facebook.com/zed.kreshati/",
    },
    {
      id: 2,
      name: "GitHub",
      icon: <Icon Icon={FaGithub}></Icon>,
      url: "https://github.com/zaid-kreshati",
    },
    {
      id: 3,
      name: "LinkedIn",
      icon: <Icon Icon={RiLinkedinFill}></Icon>,
      url: "https://www.linkedin.com/in/zaid-kreshati-38789b28b",
    },
    {
      id: 4,
      name: "Telegram",
      icon: <Icon Icon={FaTelegramPlane}></Icon>,
      url: "https://t.me/zaid_kreshati",
    },
    {
      id: 5,
      name: "Instagram",
      icon: <Icon Icon={BsInstagram}></Icon>,
      url: "https://www.instagram.com/zaid_kreshati",
    },
  ],
};
