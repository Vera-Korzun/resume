import { tel, email, linkedIn, git } from "./icons.js";

export const contacts = [
  {
    icon: tel(),
    link: "tel:46765771605",
    name: "Phone",
    value: "+46765771605",
  },
  {
    icon: email(),
    link: "mailto:veraminich@gmail.com",
    name: "Email",
    value: "veraminich@gmail.com",
  },
  {
    icon: linkedIn(),
    link: "https://www.linkedin.com/in/vera-korzun-176ab598/",
    name: "Linkedin",
    value: "linkedin.com/in/vera-korzun-176ab598/",
  },
  {
    icon: git(),
    link: "https://github.com/Vera-Korzun",
    name: "GitHub",
    value: "github.com/Vera-Korzun",
  },
];

export const techSkills = [
  "HTML5",
  "CSS3",
  "GIT",
  "WebPack",
  "JavaScript",
  "React.js",
];

export const softSkills = [
  "Desire to learn",
  "Critical thinking",
  "Problem solving",
  "Teamwork",
  "Results-oriented",
  "Enthusiasm",
];

export const languages = [
  {
    name: "Russian",
    value: "native",
  },
  {
    name: "Swedish",
    value: "proficient",
  },
  {
    name: "English",
    value: "basic",
  },
];

export const education = [
  {
    name: "School of Business of Belarusian State University",
    type: "Finance",
    specialization: "financier",
    year: "2010-2012",
    place: "Minsk, Belarus",
  },
  {
    name: "Belarusian State University",
    type: "Radiophysics and computer technologies",
    specialization: "physicist-engineer",
    year: "2005-2010",
    place: "Minsk, Belarus",
  },
];

export const course = [
  {
    name: "GoIT",
    type: "Fullstack JS Developer",
    year: "2020-Present",
    place: "Kiev, Ukraine",
  },
  {
    name: "UTI",
    type: "Foreign technicians and engineers",
    year: "2017",
    place: "Gothenburg, Sweden",
  },
];

export const experience = [
  {
    work: "KorInfoTech AB",
    name: "consultant",
    year: "2018-Present",
    place: "Gothenburg,Sweden",
    competence: ["Accounting"],
  },
  {
    work: "ABSOLUTBANK",
    name:
      "from technical support specialist to senior technical support specialist",
    year: "2010-2015",
    place: "Minsk,Belarus",
    competence: [
      "Administration and technical support of main program module",
      "Commissioning of the company's software package",
      "Creation of financial reports",
      "Development and improvement of internal processes",
      "Communication with internal and external customers",
      "Control of agreements with suppliers in connection with automated handling of financial data",
      "Technical support of bank employees",
      "Administration servers and program modules",
    ],
  },
];

export const projects = [
  {
    name: "SlimMom",
    link: "https://vera-korzun-teamproject-3.netlify.app/",
    technology: "React.js",
    description:
      "Web-app for diet-planning and calories calculation. The teamproject is built with React and Redux.",
  },
  {
    name: "OLX SHOP",
    link: "https://vera-korzun.github.io/Project-2/",
    technology: "Javascript",
    description:
      "Online shop. The teamproject is built with webpack, written in vanilla javascript.",
  },
  {
    name: "HELLEN",
    link: "https://vera-korzun.github.io/Project-1/",
    technology: "HTML, CSS",
    description:
      "Information portal for english teaching school. The teamproject is built with JS, HTML, SASS, FlexBox.",
  },
];
