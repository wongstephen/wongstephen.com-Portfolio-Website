import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function Contact(props) {
  return (
    <div className="w-11/12 mx-auto my-20 max-w-7xl" ref={props.refs}>
      <h2 className="pt-10 pb-5 text-3xl tracking-wider text-center font-base font-poppins">
        Let's Collaborate
      </h2>
      <div className="w-10/12 h-[3px] max-w-[300px] mx-auto bg-color1/50"></div>

      <div className="lg:flex lg:gap-5">
        <div className="flex justify-center w-full max-w-md max-h-[28rem] mx-auto">
          <img
            src={require("../assets/laptop-gdfce25047_640.jpeg")}
            alt="contact me"
            className="w-full mx-auto my-10"
          />
        </div>

        <div>
          <p className="max-w-3xl mx-auto my-10 text-xl font-light leading-9 font-poppins">
            Whether it's brainstorming new ideas or troubleshooting existing
            issues, I'm committed to finding the best solution for you. So if
            you're looking for a software engineer that goes beyond developing
            apps, contact me today.
            <br /> <br /> I'll be happy to discuss your needs and see how I can
            help.
          </p>

          <ul className="flex flex-col max-w-sm gap-5 mx-auto mt-10 lg:mx-0">
            <li>
              <GitHubIcon className="text-sky-700" />
              <a
                href="https://github.com/wongstephen"
                target="_blank"
                rel="noreferrer"
                className="ml-5 font-light tracking-wide transition-all duration-500 sm:text-lg lg:text-xl text-sky-700 hover:text-color2"
              >
                github.com/wongstephen
              </a>
            </li>
            <li>
              <LinkedInIcon className="text-sky-700" />
              <a
                href="https://www.linkedin.com/in/wongs/"
                target="_blank"
                rel="noreferrer"
                className="ml-5 font-light tracking-wide transition-all duration-500 sm:text-lg lg:text-xl text-sky-700 hover:text-color2"
              >
                linkedin.com/in/wongs/
              </a>
            </li>
            <li>
              <AlternateEmailIcon className="text-sky-700" />

              <a
                href="mailto: contact@wongstephenk.com"
                target="_blank"
                rel="noreferrer"
                className="ml-5 font-light tracking-wide transition-all duration-500 sm:text-lg lg:text-xl text-sky-700 hover:text-color2"
              >
                contact@wongstephenk.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>

          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form> */}
    </div>
  );
}
