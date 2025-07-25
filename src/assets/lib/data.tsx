import adobexdicon from "../../assets/icons/adobexdicon.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import vuejsicon from "../../assets/icons/vueicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
import trelloicon from "../../assets/icons/trelloicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import axiosicon from "../../assets/icons/axiosicon.svg";
import spotifyicon from "../../assets/icons/spotifyicon.svg";
import netlifyicon from "../../assets/icons/netlifyicon.svg";
import rendericon from "../../assets/icons/rendericon.svg";
import jwticon from "../../assets/icons/jwticon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import shopifyicon from "../../assets/icons/shopifyicon.svg";
import webflowicon from "../../assets/icons/webflowicon.svg";
import tastyMockup from "../../assets/img/tasty_mockup.webp";
import instorMockup from "../../assets/img/instor_mockup.webp";
import silentmoonMockup from "../../assets/img/silentmoon_mockup.webp";

import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";
import Login from "../../assets/img/login.jpg";
import spotifymockup from "../../assets/img/spotimockup.png";
import jobportalmockup from "../../assets/img/jobportalmockup.png";
export const headerIntroData = {
  title: {
    de: "Hi, ich bin Maqsood Ahmed",
    en: "Hi, I'm Maqsood Ahmed",
  },
  subtitle: "Fullstack Developer ",
  description: {
    de: "Ich bin Maqsood Ahmed, ein Fullstack-Entwickler mit dem Ziel, meine Karriere voranzutreiben und an inspirierenden Projekten teilzunehmen. Hier präsentiere ich meine Arbeiten und meine Leidenschaft für die Webentwicklung. Lassen Sie uns gemeinsam digitale Lösungen gestalten und die Zukunft formen!",
    en: "I'm Maqsood Ahmed, a full-stack developer focused on growing my career and contributing to meaningful projects. This portfolio showcases my work and passion for web development. Let's build innovative digital solutions and shape the future together.",
  },
  buttons: [
    // {
    //   name: "Contact",
    //   label: {
    //     de: "Kontaktiere mich",
    //     en: "Contact me",
    //   },
    //   icon: FiMail,
    //   color: "main-btn",
    // },
    //{
    //   name: "Projects",
    //   label: {
    //     de: "Meine Projekte",
    //     en: "My Projects",
    //   },
    //   icon: FiGithub,
    //   color: "secondary-btn",
    // },
  ],
  profilepicture:"/maqsood.jpg",
} as const;

export const projectsData = [
  {
    title: "Login-System",
    description:
      "Ein sicheres Login-System, das Benutzerregistrierung, Authentifizierung und Passwortverwaltung umfasst. Entwickelt mit React für das Frontend und einem robusten Backend zur sicheren Verarbeitung von Benutzerdaten. Dieses System sorgt für eine intuitive Benutzererfahrung und schützt Daten durch moderne Sicherheitsstandards.",
    description_EN:
      "A secure login system featuring user registration, authentication, and password management. Built with React for the frontend and a robust backend for secure handling of user data. This system provides an intuitive user experience while safeguarding data with modern security standards.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "Figma", icon: figmaicon },
      { name: "Canva", icon: canvaicon },
      { name: "Netlify", icon: netlifyicon },
      { name: "Trello", icon: trelloicon },
    ],
    image: Login,
    githuburl: "https://github.com/Maqsood-Ahmed110/Login-System",
    githubicon: FiGithub,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
 {
  title: "Email Classification Web App",
  description:
    "Eine Webanwendung zur automatischen Klassifizierung von E-Mails in verschiedene Kategorien. Entwickelt mit modernen Technologien für ein effizientes Management und eine bessere Übersicht der E-Mail-Kommunikation. Ich war verantwortlich für die Implementierung der Klassifizierungslogik und das Design der Benutzeroberfläche.",
  description_EN:
    "A web application for automatic classification of emails into different categories. Developed with modern technologies to provide efficient management and better organization of email communication. I was responsible for implementing the classification logic and designing the user interface.",
  technologies: [
    { name: "Html", icon: htmlicon },
    { name: "CSS", icon: cssicon },
    { name: "JavaScript", icon: javascripticon },
    { name: "React", icon: reacticon },
    { name: "JWT & Bcrypt", icon: jwticon },
    { name: "Axios", icon: axiosicon },
    { name: "MongoDB", icon: mongodbicon },
    { name: "Express", icon: expressiconwhite },
    { name: "Node.js", icon: nodejsicon },
    { name: "Figma", icon: figmaicon },
    { name: "Render", icon: rendericon },
  ],
  image: spotifymockup,  // You can update this image if you have a new mockup for the Email app
  githuburl: "https://github.com/Maqsood-Ahmed110/Email-classification-web-app",
  githubicon: FiGithub,
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
    projectcolor: "#FFD5BD",
  },
},

  {
  title: "Pizza Order System",
  description:
    "Ein Pizza-Bestellsystem, das es Nutzern ermöglicht, Pizzas einfach online zu bestellen und den Bestellstatus zu verfolgen. Die App wurde mit React, MongoDB, Express und Node.js entwickelt. Ich war verantwortlich für die Backend-Integration und die Datenbankmodellierung.",
  description_EN:
    "A pizza order system that allows users to easily order pizzas online and track their order status. The app was developed using React, MongoDB, Express, and Node.js. I was responsible for backend integration and database modeling.",
  technologies: [
    { name: "Html", icon: htmlicon },
    { name: "CSS", icon: cssicon },
    { name: "JavaScript", icon: javascripticon },
    { name: "React", icon: reacticon },
    { name: "JWT & Bcrypt", icon: jwticon },
    { name: "Axios", icon: axiosicon },
    { name: "MongoDB", icon: mongodbicon },
    { name: "Express", icon: expressiconwhite },
    { name: "Node.js", icon: nodejsicon },
    { name: "Figma", icon: figmaicon },
    { name: "Render", icon: rendericon },
    { name: "Trello", icon: trelloicon },
  ],
  image: jobportalmockup,  // Update this if you have a pizza system mockup image
  githuburl: "https://github.com/Maqsood-Ahmed110/Pizza-Order-System",
  githubicon: FiGithub,
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
    projectcolor: "#E3964A",
  },
},

] as const;

export const liveTickerData = {
  content: {
    de: "Weitere Projekte auf Github",
    en: "More Projects on Github",
  },
} as const;


export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Vue.js",
        hash: "#Vue.js",
        icon: vuejsicon,
        color: "#4FC08D",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      {
        title: "Adobe XD",
        hash: "#Adobe XD",
        icon: adobexdicon,
        color: "#FF61F6",
      },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "CMS",
    skills: [
      {
        title: "WordPress",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#21759B",
      },
      {
        title: "Shopify",
        hash: "#Shopify",
        icon: shopifyicon,
        color: "#7AB55C",
      },
      {
        title: "Webflow",
        hash: "#Webflow",
        icon: webflowicon,
        color: "#4353FF",
      },
    ],
  },
] as const;

export const navLinks = [
  { de: "Home", en: "Home", hash: "#home", icon: GoHome },
  { de: "Skills", en: "Skills", hash: "#skills", icon: GoStack },
  { de: "Projekte", en: "Projects", hash: "#projects", icon: GoProject },
  { de: "Über mich", en: "About me", hash: "#about-me", icon: GoPerson },
  { de: "Kontakt", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { de: "Impressum", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { de: "Datenschutz", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:abromaqsood242@gmail.com",
  text: "abromaqsood242@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/maqsood-ahmed-77000628a",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/Maqsood-Ahmed110",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:abromaqsood242@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    de: '"Es ist überhaupt nicht wichtig, es beim ersten Mal richtig zu machen. Es ist entscheidend, es beim letzten Mal richtig zu machen."',
    en: `"Success isn't about getting everything perfect from the start; it's about making sure it's perfected in the end."`,
    author: "Qalandar Bux",
  },
  {
    de: '"Das Web ist wie eine Leinwand und der Code ist die Farbe. Erschaffe dein Meisterwerk."',
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const aboutMeData = {
  title: "Über mich",
  title_EN: "About me",
  description: "Ein paar Codeschnippsel über mich",
  description_EN: "A few code snippets about me",
  paragraphs_DE: [
    {
      title: "Die Schaltkreise meines Herzens",
      description:
        "Wenn ich nicht in der digitalen Welt unterwegs bin, durchstreife ich die faszinierende Welt der Technik und Hardware. Schaltkreise und Lötstellen sind für mich wie Puzzleteile eines aufregenden Abenteuers.",
      icon: hardwareicon,
    },
    {
      title: "Auf der Überholspur des Lebens",
      description:
        "Neben dem Coden befinde ich mich gerne auf der Überholspur – im wahrsten Sinne des Wortes. Autos sind meine Leidenschaft, und ich genieße es, mit PS-starken Maschinen auf unbekannten Straßen unterwegs zu sein.",
      icon: caricon,
    },
    {
      title: "Entdeckungsfreude als Lebensmotto",
      description:
        "Meine Reise als Webentwickler ist nur ein Teil meines Lebenswegs. Ich lebe nach dem Motto, dass das Abenteuer erst beginnt, wenn man das Bekannte hinter sich lässt. Das Entdecken neuer Orte ist meine Form der kreativen Inspiration.",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "Innovating Beyond the Screen",
      description:
        "My interest in technology extends far beyond coding. I'm fascinated by the intricate workings of hardware, where each circuit and connection forms a part of the bigger picture, sparking my passion for problem-solving and innovation.",
      icon: hardwareicon,
    },
    {
      title: "Fueled by Speed and Precision",
      description:
        "Cars are my passion, and I find inspiration in the thrill of speed and the elegance of engineering. Exploring new roads gives me a sense of freedom and fuels my drive for excellence, both on the track and in my projects.",
      icon: caricon,
    },
    {
      title: "Adventure as a Source of Inspiration",
      description:
        "Exploring the unknown is my way of finding fresh ideas. Traveling to new places and experiencing different cultures enriches my perspective, adding depth and creativity to my work as a web developer.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    de: "Kontakt",
    en: "Contact",
  },
  description: {
    de: "Schreib mir eine Nachricht und ich melde mich bei dir.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        de: "Dein Name",
        en: "Your Name",
      },
      type: "text",
      validation: {
        de: "Bitte gebe deinen Namen ein",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        de: "Deine E-Mail Adresse",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        de: "Bitte gebe deine Email ein",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        de: "Dein Betreff",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        de: "Bitte gebe einen Betreff ein",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      de: "Deine Nachricht",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      de: "Bitte gebe deine Nachricht ein",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      de: "Absenden",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      de: "Ich stimme zu, dass Qalandar Bux meine personenbezogenen Daten (Name und E-Mail-Adresse) verwenden darf, um mit mir Kontakt aufzunehmen.",
      en: "I agree that Qalandar Bux may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      de: "Durch Übermittlung dieser Anfrage bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben",
      en: "By submitting this request, you acknowledge that you have read the Privacy Policy",
    },
  },
} as const;

export const toastMessages = {
  // loadingProject: {
  //   de: "🦄 Die Live Demo wird gleich geöffnet. Server werden gestartet...",
  //   en: "🦄 The live demo will open shortly. Starting servers...",
  // },
  successEmailSent: {
    de: "🦄 Vielen Dank für deine Email. Ich werde mich schnellstmöglich bei dir melden",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    de: "🦄 Leider hat der Versand deiner Email nicht geklappt. Bitte versuche es später noch einmal",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    de: "Bitte gebe deinen Namen ein",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    de: "DE",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
