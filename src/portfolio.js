
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
    /* Your Summary And Greeting Section */
    username: "Claudiu C. Bogdan",
    title: "Hi all, I'm Claudiu C. Bogdan",
    subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with TypeScript / Reactjs / Nodejs / Android SDK and some other cool libraries and frameworks."),
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
          logo: require("./assets/images/uniSevillaLogo.jpg"),
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
          logo: require("./assets/images/udacityLogo.png"),
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
          companylogo: require("./assets/images/unicreditLogo.jpeg"),
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
          companylogo: require("./assets/images/mtsLogo.png"),
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
          companylogo: require("./assets/images/persidiusLogo.jpg"),
          date: "May 2020 – January 2021",
          desc: ""
      },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
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
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    // number: "+92-3243454077",
    email_address: "claudiu.engineer@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
