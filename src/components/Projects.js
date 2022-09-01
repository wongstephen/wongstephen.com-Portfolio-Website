import React from "react";

export default function Projects() {
  return (
    <div className="project__div">
      <h2 className="body__h2 body__h2-project">Recent Projects</h2>
      <ul className="project__ul">
        {/* Recyclr */}
        <li>
          <div>
            <div className="project__img">
              <img
                src={require("../assets/recyclr.png")}
                alt="Recyclr iOS App"
              />
            </div>
            <div className="project__description">
              <p className="project__title">Recyclr iOS App</p>
              <p className="project__technologies">
                React Native, React.js, JavaScript, MongoDB, Express.js, &
                Node.js.
              </p>
              <p>
                Recyclr is a native iOS app that provides an accurate
                description of whether or not an object is recyclable through a
                simple photo upload process.
              </p>
            </div>
            <div className="project__button-container">
              <a
                href="https://recyclr.netlify.com"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button__project">Visit</button>
              </a>
              <a
                href="https://github.com/recyclr-app"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button__project">Github</button>
              </a>
            </div>
          </div>
        </li>

        {/* Jupiter Deals */}
        <li>
          <div>
            <div className="project__img">
              <img
                src={require("../assets/jupiterdeals-project.png")}
                alt="Recyclr iOS App"
              />
            </div>
            <div className="project__description">
              <p className="project__title">Jupiter Deals</p>

              <p className="project__technologies">
                React.js, JavaScript, MongoDB, Mongoose, Express.js, & Node.js.
              </p>
              <p>
                Jupiter Deals is a website that allows you to view the latest
                deals from around the internet. You can setup your own custom
                CMS and manage the content (deals) from this webpage.
              </p>
            </div>
            <div className="project__button-container">
              <a
                href="https://jupiterdeals.netlify.com"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button__project">Visit</button>
              </a>
              <a
                href="https://github.com/Jupiter115"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button__project">Github</button>
              </a>
            </div>
          </div>
        </li>

        {/* Growlerz */}
        <li>
          <div>
            <div className="project__img">
              <img
                src={require("../assets/growlerzseattle.png")}
                alt="Recyclr iOS App"
              />
            </div>
            <div className="project__description">
              <p className="project__title">Growlerz Seattle</p>
              <p className="project__technologies">
                React.js, JavaScript, <br />
                Headless CMS, <br />
                GraphQL
              </p>
              <p>
                The Growlerz Indoor Dog Park, Seattle is a dog park that
                provides a safe and fun environment for dogs to play.
              </p>
            </div>
            <div className="project__button-container">
              <a
                href="https://growlerzseattle.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button__project">Visit</button>
              </a>
              <a
                href="https://github.com/wongstephen/growlerzseattle"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button__project">Github</button>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
