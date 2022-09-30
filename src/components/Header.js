import React from "react";

export default function Header(props) {
  return (
    <header className="w-full">
      {/* Hero Section */}
      <div className="max-h-[800px]  bg-color1 ">
        <div className="py-10 mx-auto md:pt-20 md:py-0 md:flex bg-color1 max-w-7xl ">
          <div className="sm:min-w-[24rem]">
            <img
              className="w-full h-auto max-w-7xl"
              src={require("../assets/laptop-gc663ffd81_1920.jpeg")}
              alt="hero"
            />
          </div>
          <div className="z-0 flex flex-col items-center justify-center w-11/12 max-w-xl py-16 mx-auto bg-white shadow-xl md:mx-0 md:self-center md:h-44 md:px-5 md:right-48 md:flex-0 md:relative rounded-br-3xl rounded-tl-3xl">
            <h1 className="text-3xl font-bold tracking-wider lg:text-5xl">
              Hi, I'm Stephen!
            </h1>
          </div>
        </div>
      </div>

      {/* About Me */}
      <div className="flex flex-col items-center w-10/12 max-w-3xl gap-10 mx-auto my-10">
        <img
          className="shadow-xl max-w-[300px] rounded-3xl"
          src={require("../assets/headshot-sm.png")}
          alt="hero"
        />
        <p className="text-4xl leading-tight tracking-wider text-center font-base font-poppins">
          I'm always up for a new challenge.
        </p>

        <p className="text-base font-light tracking-wide font-poppins">
          As a software engineer, I develop apps that are easy to use and
          effective at solving problems. But my work doesn't stop there. I also
          listen to your situation and work to solve problems together. I
          believe that collaboration is key to success, and I'm always willing
          to go the extra mile to ensure that our project is a success.
        </p>
        <div className="cursor-pointer">
          <button
            className="px-8 py-4 mx-auto tracking-wider text-white transition-all duration-500 border rounded-lg cursor-pointer hover:bg-color2 hover:shadow bg-color1"
            onClick={props.clickEvent}
          >
            Let's Collaborate
          </button>
        </div>
      </div>
    </header>
  );
}

/* I create frontend apps with React.js, React
          Native, JavaScript, CSS, and HTML5, JavaScript.
          
          I go beyond to provide
          backend solutions with technologies including NodeJS, Express and
          MongoDB. In addition, I bring apps to life with RESTful APIs and
          styling using Tailwind. */
