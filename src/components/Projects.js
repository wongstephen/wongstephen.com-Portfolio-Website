import React from "react";
import { ProjectItem } from "./presentation/ProjectItem";

export default function Projects() {
  return (
    <div className="w-full mx-auto">
      <div className="flex flex-col items-center w-full pt-20 mb-10 bg-color2">
        <img
          src={require("../assets/developer-g270178b84_640.png")}
          alt="developer"
        />
      </div>
      <h2 className="pt-10 pb-5 text-3xl tracking-wider text-center font-base font-poppins">
        Recent Projects
      </h2>
      <div className="w-10/12 h-[3px] max-w-[300px] mx-auto bg-color1/50"></div>

      <ul className="w-10/12 max-w-6xl mx-auto md:justify-center md:flex md:flex-wrap md:gap-16">
        {/* Tool Library */}
        <ProjectItem
          data={{
            title: "Tool Library",
            photo: `${require("../assets/tool-library-thumb.png")}`,
            tech: "React.js, JavaScript, Tailwind, MongoDB, Express.js, & Node.js.",
            description:
              "Looking for an easy and efficient way to keep track of your tools? Look no further than Tool Library! With this user-friendly system, you can input your tools and monitor who borrows them, when they're borrowed, and when they're returned.",
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
              "If you're looking for an easy and accurate way to find out if something is recyclable, look no further than Recyclr. This iOS app makes it a snap to upload a photo of an object and get a quick answer on whether or not it can be recycled. It's the perfect tool for teaching people about recycling.",
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
              "Looking for the best deals on the web? Look no further than Jupiter Deals! Our website allows you to view the latest deals from around the internet, so you can save big on your next purchase.",
            wwwLink: "https://jupiterdeals.netlify.com",
            githubLink: "https://github.com/Jupiter115",
            demoCreds: "",
            demoPassword: "",
          }}
        />

        {/* Growlerz */}

        <ProjectItem
          data={{
            title: "Growlerz Dog Park",
            photo: `${require("../assets/growlerz-thumb.png")}`,
            tech: "React.js, JavaScript, Headless CMS, GraphQL",
            description:
              "Looking for a safe and fun environment for your dog to play? Look no further than Growlerz Indoor Dog Park in Seattle! The turfed play area is perfect for dogs of all ages and sizes, and day care and taproom services are second to none.",
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
