import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  // meta,
  // starbucks,
  // tesla,
  healthsous,
  highradius,
  tata,
  whatfix,
  // shopify,
  carrent,
  // jobit,
  npmpackage,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Angular Developer",
    company_name: "Tata Technologies",
    icon: tata,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using Angular and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "HighRadius",
    icon: highradius,
    iconBg: "#383E56",
    date: "Jan 2023 - Aril 2023",
    points: [
      "Operational Efficiency: Improved efficiency by 45%, developing an Invoice Management App.",
      "Responsive Dashboard: Reduced CRUD processing time by 40% with a responsive Receivables Dashboard.",
      "Collaborative Development: Contributed to React.js web applications in cross-functional teams.",
      "Code Reviews: Provided constructive feedback, maintaining code quality.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Whatfix |Intern",
    icon: whatfix,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Utilized diverse front-end technologies to develop impactful projects, showcasing versatility.",
      "Specialized in crafting responsive websites for optimal user experiences across devices.",
      "Collaborated with cross-functional teams, contributing to the creation of high-quality products.",
      "Actively participated in code reviews, providing constructive feedback for continuous improvement.",
    ],
  },

  {
    title: "Wordpress Developer",
    company_name: "Healthsous | Intern",
    icon: healthsous,
    iconBg: "#383E56",
    date: "Jan 2021 - April 2022",
    points: [
      "Utilized React.js and diverse technologies for the development and maintenance of web applications.",
      "Designed captivating UI/UX experiences using Figma, ensuring visually stunning and user-friendly interfaces.",
      "Executed effective SEO strategies, enhancing website visibility and optimizing online presence.",
      "Authored compelling blogs, contributing to the website's content strategy and user engagement.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "NPM Package",
    description:
      "Seamless currency conversion with our npm project. Real-time rates, user-friendly interface—perfect for travelers, businesses, or the globally curious. Unlock precision in every exchange.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: npmpackage,
    source_code_link: "https://github.com/Akanksha0421/cs-currency-converter",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
