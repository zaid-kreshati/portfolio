import { FaMoon } from "react-icons/fa";
import Squers from "./assets/images/squers.svg";
import Lines from "./assets/images/Lines.svg";
import Blur from "./assets/images/Blur.svg";
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
import { LuMoveUpRight } from "react-icons/lu";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF,FaGithub, FaTelegramPlane } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

import ContactIcon from "./components/ContactIcon";
import {
  FiCode,
  FiLayout,
  FiServer,
  FiDatabase,
  FiLayers,
  FiTool,
} from "react-icons/fi";

export const AboutDescription =
  "Full Stack Developer  specializing in Laravel and React, experienced in building scalable REST APIs and modern responsive web applications. Strong background in backend architecture, database optimization, and clean code practices.";

export const navItems = {
  name: "Zaid",
  sections: ["Home", "About me", "Education", "Projects", "Contact"],
  icon: <FaMoon />,
};

export const HeroItem = {
  title: "Hello, I’m Zaid",
  subtitle: "Full Stack Developer",
  description:
    "focused on building reliable backend systems and modern frontend experiences using Laravel and React.",
  button: "Download CV",
  lines: Lines,
  Blur: Blur,
  Squers: Squers,
  personal_photo: Personal_photo,
  Circle: Circle,
  Dots: Dots,
  CV: CV,
};

export const AboutItem = {
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
  ],
};

export const SkillsItem = {
  title: "Technical Skills",
  description: "Skills & Expertise",
  description2: "Technologies and tools I work with",
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

export const EducationTrainingData = {
  title: "Education & Training",
  items: [
    {
      type: "Education",
      title: "Bachelor of Science in Software Engineering",
      organization: "University of Damascus, Damascus, Syria",
      date: "Jan 2020 -May 2025",
      description: "",
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
  title: "Professional Experience",
  timeLine: TimeLine,
  rightDots: rightDots,
  leftDots: leftDots,
  length: 2,
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
      title: "Teaching Assistant",
      company: "Damascus University – Faculty of Informatics",
      date: "Oct 2025 – Present",
      description:
        "Assist in teaching programming courses and support students during lab sessions by debugging code and explaining core concepts. Apply and reinforce advanced Java OOP and clean code practices while developing mentoring and communication skills.",
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
  title: "portfolio ",
  description: "My Creative Works Latest Projects",
  button: {
    name: "view github",
    icon: <LuMoveUpRight />,
    url: "https://github.com/your-username",
  },
  projects: [
    {
      id: 1,
      name: "Athar – Community & Complaint Management System (API)",
      image: Athar,
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
      description: [
        "Built a scalable complaint management platform with role-based access (admin, client, provider)",
        "Implemented dynamic priority scoring based on urgency, attachments, and location",
        "Enhanced performance with indexing, caching, and scalable architecture",
      ],
      github: "https://github.com/your-username/Athar",
    },
    {
      id: 2,
      name: "Search Engine Project (Full Stack + ML)",
      image: Search,
      technologies: [
        "Python",
        "FastAPI",
        "React",
        "MongoDB",
        "BERT",
        "Scikit-learn",
      ],
      description: [
        "Built full search engine with FastAPI backend and React frontend",
        "Implemented BM25, TF-IDF, and BERT ranking algorithms",
        "Processed large datasets with embeddings and query expansion",
        "Achieved 70.1% MAP score on BEIR-Quora benchmark",
      ],
      github: "https://github.com/your-username/Search-engine",
    },
    {
      id: 3,
      name: "File Management System (Full Stack)",
      image: File,
      technologies: ["Laravel", "MySQL", "Blade", "Bootstrap"],
      description: [
        "Developed secure file-sharing system with version control",
        "Implemented check-in/check-out locking system",
        "Optimized performance with caching and pagination",
      ],
      github: "https://github.com/your-username/File-management",
    },
    {
      id: 4,
      name: "Social Media Blog Platform (Full Stack)",
      image: Social,
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
      github: "https://github.com/your-username/Post-blog",
    },
    {
      id: 5,
      name: "Travelova – Travel Booking System (API)",
      image: Travel,
      technologies: ["Laravel", "MySQL", "REST API", "Laravel Passport"],
      description: [
        "Developed backend for travel booking system",
        "Managed hotels, cars, flights, and destinations",
        "Implemented booking workflow and favorites feature",
      ],
      github: "https://github.com/your-username/TourismApp",
    },
  ],
};

export const ContactData = {
  title: "Contact ",
  description: "Let’s Discuss Your Project",
  contacts: [
    {
      id: 1,
      name: "Phone",
      icon: <ContactIcon Icon={Phone}></ContactIcon>,
      value: "+963 934226600",
    },

    {
      id: 2,
      name: "Email",
      icon: <ContactIcon Icon={Mail}></ContactIcon>,
      value: "zed.kreshati.2001@gmail.com",
    },

    {
      id: 3,
      name: "Location",
      icon: <ContactIcon Icon={MapPin}></ContactIcon>,
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
      icon: <ContactIcon Icon={FaFacebookF }></ContactIcon>,
      url: "https://www.facebook.com/your-username",
    },
    {
      id: 2,
      name: "GitHub",
      icon: <ContactIcon Icon={FaGithub }></ContactIcon>,
      url: "https://github.com/your-username",
    },
    {
      id: 3,
      name: "LinkedIn",
      icon: <ContactIcon Icon={RiLinkedinFill}></ContactIcon>,
      url: "https://www.linkedin.com/in/your-username",
    },
    {
      id: 4,
      name: "Telegram",
      icon: <ContactIcon Icon={ FaTelegramPlane}></ContactIcon>,
      url: "https://t.me/your-username",
    },
    {
      id: 5,
      name: "Instagram",
      icon: <ContactIcon Icon={BsInstagram}></ContactIcon>,
      url: "https://www.instagram.com/your-username",
    },
  ],
};
