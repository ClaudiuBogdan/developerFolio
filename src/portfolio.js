import emoji from "react-easy-emoji";
import UniSevillaLogo from "./assets/images/uniSevillaLogo.jpg"
import UdacityLogo from "./assets/images/udacityLogo.png"
import UnicreditLogo from "./assets/images/unicreditLogo.jpeg"
import MtsLogo from "./assets/images/mtsLogo.png"
import PersidiusLogo from "./assets/images/persidiusLogo.jpg"
import SaayaHealthLogo from "./assets/images/saayaHealthLogo.webp"
import NextuLogo from "./assets/images/nextuLogo.webp"
import AndroidDeveloperBadge from "./assets/images/androidDeveloperBadge.png"
import FreeCodeCampLogo from "./assets/images/freeCodeCampLogo.jpeg"

const illustration = {
    animated: true
}

const greeting = {
    /* Your Summary And Greeting Section */
    username: "Claudiu C. Bogdan",
    title: "Senior React.js Developer",
    subTitle: emoji("Experienced software developer willing to take the responsibility of delivering quality software products and services. Team player and eager learner, with experience in delivering a wide range of projects, from web games to enterprise-grade applications. Focused on cost efficiency, reliability, scalability, and maintainability, I am constantly keeping my skills up to date with the best technologies and software development methodologies. Looking for new challenges that can help your company deliver quality software or prototype new products."),
    resumeLink: "https://claudiuconstantinbogdan.me/resume_claudiu_constantin_bogdan.pdf"
};

// Your Social Media Link

const socialMediaLinks = {

    github: "https://github.com/ClaudiuBogdan",
    linkedin: "https://www.linkedin.com/in/claudiuconstantinbogdan/",
    gmail: "claudiu.engineer@gmail.com",
    gitlab: "https://gitlab.com/claudiu.engineer",
    facebook: "https://www.facebook.com/claudiuconstantin.bogdan",
    // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
    title: "What I do",
    subTitle: "FULL STACK DEVELOPER WHO WANTS TO SOLVE IMPORTANT PROBLEMS TROUGH THE POWER OF TECHNOLOGY",
    skills: [
        emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
        emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
        emoji("⚡ Scalable distributed architecture for client and server-side software applications")
    ],

    /* Make Sure You include correct Font Awesome Classname to view your icon
    https://fontawesome.com/icons?d=gallery */

    softwareSkills: [
        {
            skillName: "HTML-5",
            fontAwesomeClassname: "fab fa-html5"
        },
        {
            skillName: "CSS3",
            fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
            skillName: "SASS",
            fontAwesomeClassname: "fab fa-sass"
        },
        {
            skillName: "JavaScript",
            fontAwesomeClassname: "fab fa-js"
        },
        {
            skillName: "ReactJs",
            fontAwesomeClassname: "fab fa-react"
        },
        {
            skillName: "NodeJs",
            fontAwesomeClassname: "fab fa-node"
        },
        {
            skillName: "Java",
            fontAwesomeClassname: "fab fa-java"
        },
        {
            skillName: "npm",
            fontAwesomeClassname: "fab fa-npm"
        },
        {
            skillName: "sql-database",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            skillName: "digital ocean",
            fontAwesomeClassname: "fab fa-digital-ocean"
        },
        {
            skillName: "python",
            fontAwesomeClassname: "fab fa-python"
        },
        {
            skillName: "docker",
            fontAwesomeClassname: "fab fa-docker"
        }
    ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
      {
          schoolName: "Universidad De Sevilla",
          logo: UniSevillaLogo,
          subHeader: "Aerospace Engineering Degree",
          duration: "September 2012 - April 2016 (not graduated)",
          desc: "",
          descBullets: [
              "Applying analytical methods (engineering mathematics – algebra, differentiation, function, geometry, trigonometry, statistics)\n",
              "Critical Thinking - Using logic and reasoning to identify the strengths and weaknesses of alternative solutions, conclusions or approaches to problems.\n",
              "Understanding aeronautical sciences – stress, strain, static and dynamic systems, motion, force, electrical power and resistance, mass and weight\n",
              "Working efficiently and effectively in an engineering environment\n",
              "Using and communicating technical information\n"]
      },
      {
          schoolName: "Udacity Nanodegree",
          logo: UdacityLogo,
          subHeader: "Associate Android Developer",
          duration: "January 2017 - December 2017",
          desc: "",
          descBullets: [
              "Writing tests to verify that the application's logic and user interface are performing as expected, and executing those tests using the developer tools.",
              "Implementation of the visual and navigational components of an application's design.",
              "Understanding of Android's top-level application components (Activity, Service, Broadcast Receiver, Content Provider) and the lifecycle associated with each one.",
              "Determining appropriate use cases for local persisted data, and designing solutions to implement data storage using files, preferences, and databases.",
              "Extending applications to integrate with interfaces outside the core application experience through notifications and app widgets."]
      }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
      {
          Stack: "Frontend",  //Insert stack or technology you have experience in
          progressPercentage: "75%"  //Insert relative proficiency in percentage
      },
      {
          Stack: "Backend",
          progressPercentage: "90%"
      },
      {
          Stack: "Software Architecture",
          progressPercentage: "80%"
      }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
      {
          role: "Software Engineer",
          company: "UniCredit Services",
          companylogo: UnicreditLogo,
          date: "April 2019 – September 2019",
          desc: "Developed and maintained scalable applications used in multiple EU countries to calculate the different metrics (AIRB, LGD, EAD, etc) used by UniCredit to offer its financial products (loans, mortgages, etc).",
          descBullets: [
              "Develop, test and debug financial models used in pricing web engine, known as Global Pricing Tool.",
              "Develop automated tests with Selenium for Global Pricing Tool web interface",
              "Maintain and develop the data layer with Teradata and Hazelcast",
              "Develop and maintain Continuous Integration and Continuous Delivery using Jenkins, Docker, and Linux.",
              "Technologies: Python, Scala, SBT, Selenium, Docker, Jenkins, Linux, Teradata, Hazelcast.",
          ]
      },
      {
          role: "Chief Technology Officer ",
          company: "Mind Treat Studios",
          companylogo: MtsLogo,
          date: "July 2018 – May 2020",
          desc: "I have developed most of the studio creative projects, from mobile application, games, web applications, up to electronic circuits and projection mapping. I've also conducted the technical interview for software developers.",
          descBullets: [
              "Developing, refactoring and debugging Android applications implementing Android Architecture Components and Dagger.",
              "Designing application architecture/design patterns: MVC, MVVM",
              "Developing Virtual Reality game with Unity and Vuforia",
              "Developing web games with Phaser 3 engine and JavaScript.",
              "Programming embedded systems (Arduino) to control lights, solenoid valves.",
          ]
      },
      {
          role: "Senior Software Engineer",
          company: "Persidius Systems",
          companylogo: PersidiusLogo,
          date: "May 2020 – January 2021",
          desc: "As part of the core development team, I contributed to the system architecture, design, planning, and implementation. I have also been involved in DevOps to deploy and scale different services in Kubernetes cluster",
          descBullets: [
              "Build a logistic map with Google Maps API with real - time data visualization",
              "Implement GraphQL / Apollo Client queries and mutations",
              "Use React Functional Components and React hooks",
              "Implemented WebSockets with GrapQL subscriptions for real - time position tracking",
              "Generate statistical data for different use cases",
              "Develop a document life - cycle management for digital tax declaration",
              "Implement bi - temporal data structure for effective and assertive data timelines",
              "Optimize search functionality with ElasticSearch",
              "DevOps with Kubernetes cluster",
          ]
      },
  ]
};

/*Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
      {
          image: SaayaHealthLogo,
          link: "http://saayahealth.com/"
      },
      {
          image: NextuLogo,
          link: "http://nextu.se/"
      }
  ]
};

const projects = {
    title: "Projects",
    subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
    projects: [
        {
            name: "EOS Server/Front-End",
            logo: PersidiusLogo,
            link: 'https://app.myara.ro/',
            subHeader: "Persidius Systems",
            duration: "May 2020 - January 2021",
            desc: "",
            descBullets: [
                "Build a logistic map with Google Maps API with real-time data visualization ",
                "Implement GraphQL/Apollo Client queries and mutations ",
                "Use React Functional Components and React hooks",
                "Develop statistics chart for data visualization ",
                "Implemented WebSockets with GrapQL subscriptions for real-time position tracking",
                "Use i18next library for internationalization ",
                "Implement GraphQL Server",
                "Implement WebSockets events with GrapQL subscription ",
                "Generate statistical data for different use cases ",
                "Develop a document life-cycle management for tax declaration ",
                "Implement bi-temporal data structure for effective and assertive data timelines ",
                "Optimize search functionality with ElasticSearch ",
                "DevOps with Kubernetes cluster",
            ]
        },
        {
            name: "Global Pricing Tool",
            logo: UnicreditLogo,
            link: 'https://www.gtb.unicredit.eu/global-transaction-banking/products-solutions/europeangate',
            subHeader: "Unicredit",
            duration: "April 2019 - September 2019",
            desc: "",
            descBullets: [
                "Develop, test, and debug financial models used in pricing web engine, known as Global Pricing Tool.",
                "Develop automated tests with Selenium for Global Pricing Tool web interface.",
                "Maintain and develop the data layer with Teradata and Hazelcast.",
                "Develop and maintain Continuous Integration and Continuous Delivery using Jenkins, Docker, and Linux.",
                "Technologies: Python, Scala, SBT, Selenium, Docker, Jenkins, Linux, Teradata, Hazelcast.",
            ]
        },
        {
            name: "PortalDent",
            logo: MtsLogo,
            link: 'https://portaldent.ro/',
            subHeader: "Dr Leahu",
            duration: "January 2020 - April 2020",
            desc: "",
            descBullets: [
                "Video media streaming with HLS (HTML Live Streaming)",
                "Multiplatform Application with Ionic/Angular and Capacitor",
                "Responsive design",
                "Display Encrypted PDF Documents (difficult to access source document)",
                "Manage online courses and their content",
                "Manage course access with ABAC and RBAC",
                "Media streaming and video encoding",
                "Course access with ABAC and RBAC",
                "REST API for courses and accounts management.",
            ]
        },
        {
            name: "Carrefour Aniversary 20",
            logo: MtsLogo,
            link: 'https://www.iqads.ro/articol/47023/carrefour-romania-si-mind-treat-studios-stabilesc-recordul-pentru-cea-mai-mare',
            subHeader: "Carrefour",
            duration: "May 2019 - July 2019",
            desc: "",
            descBullets: [
                "Voucher management system",
                "Single Player and Multiplayer sessions",
                "Clock sync between different players",
                "Voucher wallet",
                "2D Game with Phaser3",
                "Voucher QR scan",
                "Voucher management ",
                "Login based on the phone number and SMS code",
                "Algorithm for voucher distribution based on daily hour and available vouchers",
                "Rooms for multiplayer games",
                "Import API for vouchers and sync with retail",
                "Scalable system with 10.000 concurrent connections",
            ]
        },
        {
            name: "Yummy Galaxy",
            logo: MtsLogo,
            link: 'https://yummy.asdl.ro/',
            subHeader: "Dr Leahu",
            duration: "November 2019 - April 2020",
            desc: "",
            descBullets: [
                "2D Game Mechanic with physics engine",
                "Multiplatform game with Capacitor and Angular ",
                "In-app purchase",
                "Social login with Facebook",
                "Advanced game animations",
            ]
        },
        {
            name: "AccessTaxi",
            logo: MtsLogo,
            link: 'https://www.facebook.com/ACCES-TAXI-1161232880652888',
            subHeader: "TransContinental",
            duration: "July 2018 - December 2018",
            desc: "",
            descBullets: [
                "Reduced the number of bugs by 90%",
                "Refactored application architecture to implement MVVM with Android Architecture",
                "Improve overall performance by more than 50%",
                "Implemented pixel-perfect design.",
                "Implemented Dagger2 and RxJava.",
            ]
        },
        {
            name: "Sound of Colours",
            logo: MtsLogo,
            link: 'https://oskarsounds.ro',
            subHeader: "Oskar",
            duration: "January 2019 - April 2019",
            desc: "",
            descBullets: [
                "Integrated Web App with Spotify API",
                "Used audio analysis data to create real-time animation.",
                "Deployed Single Page Application with Node.js, MongoDB, and Docker",
                "Implemented responsive web design.",
                "Created share and print functionality.",
            ]
        },
        {
            name: "Mind Treat Studios Website",
            logo: MtsLogo,
            link: 'https://m75.ro',
            subHeader: "Mind Treat Studios",
            duration: "November 2018 - December 2018",
            desc: "",
            descBullets: [
                "Created modular web application for MTS studio.",
                "Implemented swipe/scroll gesture in Phaser3",
                "Created an import module for adding new page levels.",
            ]
        },
        {
            name: "Marsupius",
            logo: MtsLogo,
            link: '',
            subHeader: "Mind Treat Studios",
            duration: "October 2018 - November 2018",
            desc: "",
            descBullets: [
                "Debugged and completed VR project based on Vuforia and Unity3D.",
                "Developed Android version of the application.",
                "Improved Vuforia target detection."
            ]
        }
    ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

    title: emoji("Certifications 🏆 "),
    subtitle: "",

    achievementsCards: [
        {
            title: "Google Associate Android Developer",
            subtitle: "The Associate Android Developer Certification is a performance-based exam where developers write real apps to show their skills.",
            image: AndroidDeveloperBadge,
            footerLink: [
                {
                    name: "Certification",
                    url: "https://www.credential.net/3huwgcjl?key=2ad2328f2cb19a163c9ebe1cba7e3fa7a0e830b8090c220a593044fc996306c0"
                },
            ]
        },
        {
            title: "Full Stack Web Developer",
            subtitle: "Learn to design and develop powerful modern web applications that form the foundation for the apps, websites, and systems that people and businesses use every day.",
            image: UdacityLogo,
            footerLink: [{
                name: "Certification",
                url: "https://confirm.udacity.com/VC3GF94F"
            }]
        },

        {
            title: "JavaScript Algorithms and Data Structures",
            subtitle: "JavaScript Algorithms and Data Structures will teach you basic JavaScript in a series of challenges. It will teach you how to assign variables, arrays, create functions, and some of the various loop types used in JavaScript. ",
            image: FreeCodeCampLogo,
            footerLink: [
                {
                    name: "Certification",
                    url: "https://www.freecodecamp.org/certification/claudiubogdan/javascript-algorithms-and-data-structures"
                },
            ]
        }
    ]
};

const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+44-20-3290-7140",
    email_address: "claudiu.bogdan@devostack.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @

};
export {
    illustration,
    greeting,
    socialMediaLinks,
    skillsSection,
    educationInfo,
    techStack,
    workExperiences,
    openSource,
    bigProjects,
    achievementSection,
    contactInfo,
    twitterDetails,
    projects
};
