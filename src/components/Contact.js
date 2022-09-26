import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "@mui/material";
export default function Contact(props) {
  return (
    <div className="w-11/12 mx-auto" ref={props.refs}>
      <h2 className="text-lg font-medium tracking-wider text-left font-poppins">
        Let's Get In Touch
      </h2>
      <div className="w-full h-1 bg-sky-500 my-2.5"></div>

      <ul className="flex flex-col gap-5 mt-10">
        <li>
          <GitHubIcon className="text-gray-900" />
          <a
            href="https://github.com/wongstephen"
            target="_blank"
            rel="noreferrer"
            className="ml-5 text-sm font-light tracking-wide text-sky-900 hover:text-sky-900"
          >
            github.com/wongstephen
          </a>
        </li>
        <li>
          <LinkedInIcon className="contact__icon" />
          <a
            href="https://www.linkedin.com/in/wongs/"
            target="_blank"
            rel="noreferrer"
            className="ml-5 text-sm font-light tracking-wide text-sky-900 hover:text-sky-900"
          >
            linkedin.com/in/wongs/
          </a>
        </li>
        <li>
          <AlternateEmailIcon className="contact__icon" />

          <a
            href="mailto: contact@wongstephenk.com"
            target="_blank"
            rel="noreferrer"
            className="ml-5 text-sm font-light tracking-wide text-sky-900 hover:text-sky-900"
          >
            contact@wongstephenk.com
          </a>
        </li>
      </ul>

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
