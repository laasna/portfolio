/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Laasna Ratna Abbina",
  title: "Cloud Engineer, AI learner (Gen AI, RAG)",
  subTitle: emoji(
    "I am a passionate Cloud Engineer with hands-on experience in cloud platforms and emerging AI technologies such as Generative AI and Retrieval-Augmented Generation (RAG). I thrive on solving complex problems and continuously expanding my skills to deliver scalable and innovative solutions. Dedicated to learning and growth, I enjoy applying AI to real-world challenges."
  ),
  resumeLink:
  "https://drive.google.com/file/d/1ALuvNLCqpwgW3RONbvfpIUqG9vGJjPrC/view?usp=sharing", // <--- UPDATE THIS LINE,
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/laasna",
  linkedin: "https://www.linkedin.com/in/laasna-ratna-abbina/",
  gmail: "laasnaratnaabbina@gmail.com", // UPDATED
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

// Skills Section

const skillsSection = {
  title: "Technical Expertise",
  subTitle:
    "Focused on Cloud Engineering, AI, and Modern Web Technologies to build scalable solutions.",
  skills: [
    emoji("⚡ Cloud Engineering & Infrastructure Automation using GCP and Terraform"),
    emoji("⚡ Building AI solutions with Generative AI & Retrieval-Augmented Generation (RAG)"),
    emoji("⚡ Developing scalable full-stack web applications using React and Node.js"),
    emoji("⚡ Implementing CI/CD pipelines and containerization with Docker")
  ],
  softwareSkills: [
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "nodejs", fontAwesomeClassname: "fab fa-node" },
    { skillName: "terraform", fontAwesomeClassname: "fas fa-cubes" },
    { skillName: "google-cloud", fontAwesomeClassname: "fab fa-google" },
    { skillName: "vertex-ai", fontAwesomeClassname: "fas fa-robot" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "js", fontAwesomeClassname: "fab fa-js" },
    { skillName: "html5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "aws", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "firebase", fontAwesomeClassname: "fas fa-fire" }
  ],
  display: true
};

// Education Section (UPDATED as per your logos and details)

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Wilmington University",
      logo: require("./assets/images/wilmingtonLogo.png"),
      subHeader: "Master of Science in Information Systems and Technology (IST)",
      duration: "2023 - 2024",
      desc: "Graduated with First Class Honors.",
      descBullets: [],
    },
    {
      schoolName: "Marri Laxman Reddy Institute Of Technology And Management (MLRITM)",
      logo: require("./assets/images/mlritmLogo.png"),
      subHeader: "Bachelor of Technology in Electronics and Communication Engineering (ECE)",
      duration: "2015 - 2019",
      desc: "Graduated with First Class Honors.",
      descBullets: [],
    }
  ]
};

// Top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend/Design", progressPercentage: "90%" },
    { Stack: "Backend", progressPercentage: "70%" },
    { Stack: "Programming", progressPercentage: "60%" }
  ],
  displayCodersrank: false
};

// Work experience section - ✅ SHORTENED & FORMATTED

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Cloud Engineer Intern",
      company: "Dalave LLC",
      companylogo: require("./assets/images/dalaveLogo.png"),
      date: "April 2025 – Present",
      desc: [
        "Designed scalable solutions on GCP using Terraform and CI/CD.",
        "Built AI-based React apps using Vertex AI and Agent Engine.",
        "Automated blog-to-video pipeline for content repurposing.",
        "Developed smart chat agents and callback features for websites.",
        "Created tools like RAG app, stock analyzer, and sentiment dashboards."
      ]
    },
    {
      role: "Project Engineer",
      company: "Avid IT Solutions",
      date: "Dec 2020 - Dec 2022",
      desc: [
        "Built distributed applications and backend services.",
        "Collaborated with teams on scalable cloud-based solutions.",
        "Used C++ and Java to develop high-performance systems."
      ]
    },
    {
      role: "Junior Software Trainee",
      company: "Amity IT Solutions",
      date: "Aug 2019 - Dec 2020",
      desc: [
        "Supported full-stack feature development in Agile teams.",
        "Handled debugging, QA, and code reviews.",
        "Worked on OOP, multi-threading, and RESTful APIs."
      ]
    }
  ]
};

// Open Source Section

const openSource = {
  showGithubProfile: true,
  display: false // Set to false to remove from navigation
};

// Big Projects Section (unchanged, just cleaned)

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some startups and companies that I helped to create their tech",
  projects: [
    {
      projectName: "Travel Concierge App",
      projectDesc: "An AI-powered travel concierge that suggests personalized itineraries.",
      footerLink: [{ name: "GitHub", url: "https://github.com/laasna/travel-concierge-clean" }]
    },
    {
      projectName: "RAG React App",
      projectDesc: "This is a simple React app demonstrating Retrieval-Augmented Generation with blog Q&A.",
      footerLink: [{ name: "GitHub", url: "https://github.com/laasna/rag-react-app" }]
    },
    {
      projectName: "Dalave Company Site",
      projectDesc: "The Dalave site project built with React and Node.js.",
      footerLink: [{ name: "GitHub", url: "https://github.com/laasna/dalave-site" }]
    },
    {
      projectName: "News Agent",
      projectDesc: "Provides news updates filtered by specific date and day.",
      footerLink: [{ name: "GitHub", url: "https://github.com/laasna/windsor-news-agent" }]
    },
    {
      projectName: "Stock Analyzer",
      projectDesc: "Analyzes live stock sentiment with real-time positive/negative percentages.",
      footerLink: [{ name: "GitHub", url: "https://github.com/laasna/stock-sentiment" }]
    },
    {
      projectName: "Dog Bark Translator",
      projectDesc: "AI interprets dog barks to describe possible meanings.",
      footerLink: [] // Removed placeholder link as requested
    },
    {
      projectName: "Goal Planner",
      projectDesc: "An AI-powered daily planner app generating personalized day-wise plans based on your goals.",
      footerLink: [{ name: "GitHub", url: "https://github.com/laasna/goal-planner-app" }]
    },
    {
      projectName: "Quiz React App",
      projectDesc: "An AI quiz app that suggests quizzes and recommendations based on user mood and age.",
      footerLink: [{ name: "GitHub", url: "https://github.com/laasna/quiz-react-app" }]
    }
  ],
  display: true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "", // Removed subtitle content
  achievementsCards: [], // Emptied the array as requested
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true",
  blogs: [], // Emptied the array as requested
  display: false // Set to false to hide the section
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),
  talks: [], // Emptied the array as requested
  display: false // Set to false to hide the section
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [], // Emptied the array as requested
  display: false // Set to false to hide the section
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+13606107648", // UPDATED
  email_address: "laasnaratnaabbina@gmail.com" // UPDATED
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", // You mentioned you wanted to update this if you have a handle, but didn't provide one. Keeping "twitter" for now.
  display: true
};

const isHireable = true; // UPDATED to true as requested

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};