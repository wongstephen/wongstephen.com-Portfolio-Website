import React from "react";
import { ProjectItem } from "./presentation/ProjectItem";

export default function Projects() {
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-lg font-medium tracking-wider text-left font-poppins">
        Recent Projects
      </h2>
      <div className="w-full h-1 bg-sky-500 my-2.5"></div>

      <ul className="">
        {/* Tool Library */}
        <ProjectItem
          data={{
            title: "Tool Library",
            photo: `${require("../assets/tool-library-thumb.png")}`,
            tech: "React.js, JavaScript, Tailwind, MongoDB, Express.js, & Node.js.",
            description:
              "My goal was to make a tool inventory system that is convenient and easy to use. Tool Library allows users to input their tools and track who borrowed them, when they were borrowed, and when they were returned. It is designed to be a responsive site with a minimalistic aesthetic.",
            wwwLink: "https://toollibrary.netlify.com",
            githubLink: "https://github.com/wongstephen/toolloaner-frontend",
            demoCreds: "guest@user.com",
            demoPassword: "password",
          }}
        />
        {/* Recyclr */}
        <ProjectItem
          data={{
            title: "Recyclr iOS App",
            photo: `${require("../assets/recyclr-thumb.png")}`,
            tech: "React Native, React.js, JavaScript, MongoDB, Express.js, & Node.js.",
            description:
              "Recyclr is a native iOS app that provides an accurate description of whether or not an object is recyclable through a simple photo upload process. Not only is the app easy to use and visually stunning, but it also serves as a fun and engaging educational tool for teaching people about recycling.",
            wwwLink: "https://recyclr.netlify.com",
            githubLink: "https://github.com/recyclr-app",
            demoCreds: "",
            demoPassword: "",
          }}
        />

        {/* Jupiter Deals */}
        <ProjectItem
          data={{
            title: "Jupiter Deals",
            photo: `${require("../assets/jupiter-deals-thumb.png")}`,
            tech: "React.js, JavaScript, MongoDB, Mongoose, Express.js, & Node.js",
            description:
              "Jupiter Deals is a website that allows you to view the latest deals from around the internet. You can set up your own custom CMS and manage the content (deals) from this webpage.",
            wwwLink: "https://jupiterdeals.netlify.com",
            githubLink: "https://github.com/Jupiter115",
            demoCreds: "",
            demoPassword: "",
          }}
        />

        {/* Growlerz */}

        <ProjectItem
          data={{
            title: "Growlerz Seattle Dog Park",
            photo: `${require("../assets/growlerz-thumb.png")}`,
            tech: "React.js, JavaScript, Headless CMS, GraphQL",
            description:
              "he Growlerz Indoor Dog Park, Seattle is a dog park that provides a safe and fun environment for dogs to play.",
            wwwLink: "https://growlerzseattle.netlify.app/",
            githubLink: "https://github.com/wongstephen/growlerzseattle",
            demoCreds: "",
            demoPassword: "",
          }}
        />
      </ul>
    </div>
  );
}
