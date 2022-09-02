import React from "react";

export default function Header(props) {
  return (
    <header>
      <div className="header__img">
        <img
          src={require("../assets/DALL·E 2022-08-31 13.47.57 - corgi wearing Victorian clothing portrait painting.png")}
          alt="hero"
        />
      </div>
      <div className="aboutme__div">
        <h1 className="header__h1">Hi, I'm Stephen</h1>
        <h2 className="header__subtitle">Frontend Software Engineer</h2>
        <p>
          Hi there! I'm a frontend software engineer who makes great looking,
          fast and performant websites.
          <br />
          <br />I create frontend solutions using CSS, HTML5, JavaScript, and
          ReactJS/React Native. My skills go beyond that with being able to back
          all these technologies with NodeJS, Express and MongoDB.
        </p>
        <div>Let's create someting together</div>
        <button className="button__contact" onClick={props.clickEvent}>
          Contact Me
        </button>
      </div>
    </header>
  );
}
