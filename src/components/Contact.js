import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "@mui/material";
export default function Contact(props) {
  return (
    <div className="contact__container" ref={props.refs}>
      <h2 className="body__h2">Let's Get In Touch</h2>
      <p className="contact__subtitle">
        Reach out and let's start a conversation
      </p>
      <ul className="contact__ul">
        <li>
          <GitHubIcon className="contact__icon" />
          <Link
            underline="hover"
            href="https://github.com/wongstephen"
            color="inherit"
            target="_blank"
            rel="noopener"
          >
            <span className="contact__links">github.com/wongstephen</span>
          </Link>
        </li>
        <li>
          <LinkedInIcon className="contact__icon" />
          <Link
            underline="hover"
            href="https://www.linkedin.com/in/wongs/"
            color="inherit"
            target="_blank"
            rel="noopener"
          >
            <span className="contact__links">linkedin.com/in/wongs/</span>
          </Link>
        </li>
        <li>
          <AlternateEmailIcon className="contact__icon" />
          <Link
            underline="hover"
            href="mailto: contact@wongstephenk.com"
            color="inherit"
            target="_blank"
            rel="noopener"
          >
            <span className="contact__links">contact@wongstephenk.com</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
