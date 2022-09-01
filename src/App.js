import NavBar from "./components/NavBar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "@mui/material";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <div className="main__container">
        <header>
          <div className="header__img">
            <img
              src={require("./assets/DALL·E 2022-08-31 13.47.57 - corgi wearing Victorian clothing portrait painting.png")}
              alt="hero"
            />
          </div>
          <div className="aboutme__div">
            <h1 className="header__h1">Hi, I'm Stephen</h1>
            <h2 className="header__subtitle">Frontend Web Developer</h2>
            <p>
              Hi there! I'm a frontend web developer who makes great looking,
              fast and performant websites.
              <br />
              <br />I create frontend solutions using CSS, HTML5, JavaScript,
              and ReactJS/React Native. My skills go beyond that with being able
              to back all these technologies with NodeJS, Express and MongoDB.
            </p>
            <div>Let's create someting together</div>
            <button className="button__contact">Contact Me</button>
          </div>
        </header>

        <div className="project__div">
          <h2 className="body__h2 body__h2-project">Recent Projects</h2>
          <ul className="project__ul">
            {/* Recyclr */}
            <li>
              <div>
                <div className="project__img">
                  <img
                    src={require("./assets/recyclr.png")}
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
                    description of whether or not an object is recyclable
                    through a simple photo upload process.
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
                    src={require("./assets/jupiterdeals-project.png")}
                    alt="Recyclr iOS App"
                  />
                </div>
                <div className="project__description">
                  <p className="project__title">Jupiter Deals</p>

                  <p className="project__technologies">
                    React.js, JavaScript, MongoDB, Mongoose, Express.js, &
                    Node.js.
                  </p>
                  <p>
                    Jupiter Deals is a website that allows you to view the
                    latest deals from around the internet. You can setup your
                    own custom CMS and manage the content (deals) from this
                    webpage.
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
                    src={require("./assets/growlerzseattle.png")}
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
        <div className="contact__container">
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
      </div>
    </div>
  );
}

export default App;
