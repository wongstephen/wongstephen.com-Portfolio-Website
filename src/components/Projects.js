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
            title: "BorrowNinja",
            photo: `${require("../assets/tool-library-thumb.png")}`,
            tech: "React.js, JavaScript, Tailwind, MongoDB, Express.js, & Node.js.",
            description:
              "Tool Library is the perfect solution for keeping track of your tools in an easy and efficient way. With a user-friendly system, you can input your tools and monitor who borrows them, when they're borrowed, and when they're returned. Say goodbye to lost or misplaced tools and hello to an organized and streamlined system.",
            wwwLink: "https://borrowninja.com",
            githubLink: "https://github.com/wongstephen/toolloaner-frontend",
            demoCreds: "demo@borrowninja.com",
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
              "Recyclr is the perfect solution for quickly and accurately determining if something is recyclable. With this iOS app, you can simply upload a photo of an object and receive a quick answer on whether or not it can be recycled. It's an easy and effective way to educate people about recycling. Give Recyclr a try and start making a positive impact on the environment today.",
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
              "Jupiter Deals is the ultimate destination for finding the best deals on the web. Our website allows you to easily view the latest deals from around the internet, so you can save big on your next purchase. With Jupiter Deals, you'll never have to worry about overpaying again. Start shopping smarter with us today.",
            wwwLink: "https://jupiter.wongstephenk.com",
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
              "Growlerz Dog Park in Seattle is the perfect place for your dog to play and socialize in a safe and fun environment. The turfed play area is suitable for dogs of all ages and sizes, and our day care and taproom services are top-notch. If you want to ensure that your dog has a great time while you're away, give Growlerz a try. ",
            wwwLink: "https://growlerz.wongstephenk.com/",
            githubLink: "https://github.com/wongstephen/growlerz2022",
            demoCreds: "",
            demoPassword: "",
          }}
        />
      </ul>
    </div>
  );
}
