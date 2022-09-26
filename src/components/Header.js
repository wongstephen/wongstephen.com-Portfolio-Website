import React from "react";

export default function Header(props) {
  return (
    <header className="w-11/12 mx-auto md:flex md:gap-10">
      {/* image */}
      <div className="max-w-sm mx-auto my-5 overflow-auto shadow-lg rounded-3xl bg-gradient-to-br from-sky-500 to-sky-700 max-h-96">
        <img className="" src={require("../assets/headshot.png")} alt="hero" />
      </div>
      {/* header content */}
      <div className="flex flex-col gap-5 my-5">
        <h1 className="text-4xl font-medium tracking-wide text-sky-900">
          Hi, I'm Stephen
        </h1>
        <h2 className="font-light tracking-widest font-poppins">
          Frontend Software Engineer
        </h2>
        <p className="font-light tracking-wide font-poppins">
          Hi there! I'm a frontend software engineer, who makes great looking,
          fast, and performant websites.
          <br />
          <br />I create frontend apps with CSS, HTML5, JavaScript, and
          ReactJS/React Native. My skills go beyond that to provide backend
          solutions with technologies including NodeJS, Express and MongoDB.
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
