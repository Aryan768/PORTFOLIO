import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Backend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <BackendIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Freelancer",
    icon: <FreelancerIcon />,
  },
  {
    title: "Leadership",
    icon: <LeaderShipIcon />,
  },
];

const technologies = {
  languages: [
    
    
    
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "C++",
      icon: "/assets/tech/C++.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    
  
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    
 
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
 
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Socket.IO",
      icon: "/assets/tech/socketio.svg" ,
      link: "",
    },
    {
      name: "Peer.js",
      icon: "/assets/tech/peerjs.avif" ,
      link: "https://peerjs.com/#:~:text=The%20PeerJS%20library&text=PeerJS%20wraps%20the%20browser's%20WebRTC,connection%20to%20a%20remote%20peer.",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "Styled-Components",
      icon: "/assets/tech/styled-components.png",
      link: "https://styled-components.com/",
    },
    {
      name: "Framer-motion",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },

    {
      name: "Prisma",
      icon: "/assets/tech/prisma.svg",
      link: "https://www.prisma.io/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/Node.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
  ],
  Cloud: [
    {
      name: "AWS",
      icon : "/assets/tech/aws.svg",
      link : "https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/"
    },
    {
      name : "Render",
      icon : "/assets/tech/render.png",
      link : "https://render.com/"
    }
  ]
};

const experiences = [
  {
    title: "Freelance",
    company_name: "Uber Scaled Solutions",
    icon: "/assets/company/uber-15.svg",
    iconBg: "#E6DEDD",
    date: "July 2024 - Present",
    points: [
      "Conducting Advance Prompt Engineering for Uber, focusing on creating and optimizing queries.",
      "Improving AI response quality, efficiency, and relevance to align with user requirements.",
      "Ensuring prompt engineering aligns with business objectives and enhances user requirements.",
      
    ],
  },
  {
    title: "Intern ",
    company_name: "Gurugram Police Cyber Security ",
    icon: "/assets/company/police.svg",
    iconBg: "#E6DEDD",
   
    points: [
      "Enhanced user authentication in an internal portal using Passport.js, OAuth, and Sign In with Google.",
      "Implemented secure user sessions and cookie management, ensuring data integrity and privacy compliance",
      "Collaborated on feature design, optimizing the user experience for seamless access and authentication.",
      "Collaborated with a frontend intern throughout the internship to deliver a comprehensive solution .",
    ],
  },
  {
    title: "Developer(Backend) + Member CSI JEMTEC",
    company_name: "Tech team member at CSI JEMTEC",
    icon: "/assets/company/gdsc-logo.svg",
    iconBg: "#E6DEDD",
    date: "February 2022 - July 2023",
    points: [
      "Successfully planned and executed induction programs, providing new members with crucial information about the organization's goals and values.",
      "Involved in demonstration of web development expertise by conducting API Integration,Web3, CSS workshops, equipping participants with practical web design and styling skills.",
      "Played a crucial role in promoting JIMS events and actively collaborated with cross-functional teams to deliver high-quality projects, fostering teamwork and innovation.",
      "Actively engaged with the community, assisted in workshops, and contributed to planning and managing events, ensuring their success and growth.",
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
    name: "WatchWise",
    description:
      "WatchWise is a web-based platform offering video transcription (video to text) and video analysis. Upload or provide a video link for accurate transcription, leveraging AWS S3.Analyze any video or playlist link, including sentiment analysis of comments and automated playlist duration calculation. ",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "fabricjs",
        color: "orange-text-gradient",
      },
      {
        name: "liveblocks",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/watchwise.png",
    source_code_link: "https://github.com/Aryan768/WatchWise/tree/new-feature-branch",
    deployed_link: "https://https://watchwise4.onrender.com/",
  },
  {
    name: "Zoom Clone",
    description:
      "Created a web-based application with Realtime Audio/Video rooms and chat functionality.Created using Peer.js, WebRTC and chat functionality using socket. Worked with Node.js and Express.js for backend of the application.  ",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "EJS",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
      {
        name: "OAuth",
        color: "orange-text-gradient",
      },
      {
        name: "Socket",
        color: "yellow-text-gradient",
      },
      {
        name: "Peer.js",
        color: "pink-text-gradient",
      }
    ],
    image: "/assets/projects/zoom.png",
    source_code_link: "https://github.com/Aryan768/Zoom-Clone-",
    deployed_link: "https://github.com/Aryan768/Zoom-Clone-",
  },
  {
    name: "Memory Puzzle",
    description:
      "Developed a memory based game using React where upon loading the game a grid of cards is displayed ,each containing a unique image .Click on card to reveal its hidden image.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
      {
        name: "tanstack/react-query",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/MemoryPuzzle.png",
    source_code_link:
      "https://github.com/Aryan768/Memory-Puzzle",
    deployed_link:
      "https://aryanspuzzle.netlify.app/",
  },
 
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/Aryan768",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/aryan-bhatia-80994022b/",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://x.com/aryanthesmart1?s=09",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/aryan.bhatia.7/",
  },
];

const heroTexts = [
  "Freelancer",
  500,
  "Full-Stack developer",
  500,
  "Backend developer",
  600,
  "Frontend developer",
  400,
  
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
