import React from "react";

export default function Header(props) {
  return (
    <header className="w-11/12 mx-auto md:flex md:gap-10">
      <div className="sm:min-w-[24rem] my-5">
        <img
          className="w-full h-auto max-w-sm rounded-lg"
          src={require("../assets/headshot-sm.png")}
          alt="hero"
        />
      </div>
      <div className="flex flex-col gap-2.5 my-5">
        <h1 className="text-4xl font-medium tracking-wide text-sky-900">
          Hi, I'm Stephen
        </h1>
        <h2 className="my-0 font-light tracking-widest font-poppins">
          Frontend Software Engineer
        </h2>
        <p className="text-base font-light tracking-wide font-poppins">
          Hi there! I'm a frontend software engineer, who makes great looking,
          fast, and performant websites.
          <br />
          <br />I create frontend apps with React.js, React Native, JavaScript,
          CSS, and HTML5, JavaScript. I go beyond to provide backend solutions
          with technologies including NodeJS, Express and MongoDB. In addition,
          I bring apps to life with RESTful APIs and styling using Tailwind.
          <br />
          <br />{" "}
          <span className="font-medium">Let's create something together!</span>
        </p>
        <div className="cursor-pointer">
          <button
            className="w-full my-2.55 py-2.5 border rounded-lg hover:bg-sky-700 hover:shadow  transition-none bg-sky-500 text-white tracking-wider"
            onClick={props.clickEvent}
          >
            Contact Me
          </button>
        </div>
      </div>
    </header>
  );
}
