import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function NavBar() {
  return (
    <nav className="navBar__container">
      <div className="navBar__icon-container">
        <a
          href="https://www.linkedin.com/in/wongs/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon className="navBar__icons" />
        </a>
        <a
          href="https://github.com/wongstephen"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon className="navBar__icons" />
        </a>
        <a
          href="mailto: contact@wongstephenk.com"
          target="_blank"
          rel="noreferrer"
        >
          <AlternateEmailIcon className="navBar__icons" />
        </a>
      </div>
    </nav>
  );
}
