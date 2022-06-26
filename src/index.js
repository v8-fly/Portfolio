import React from "react"
import ReactDOM from "react-dom"
import "./styles/app.css"

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <h1>
              {/* //fa-solid fa-star */}
              <a href="index.html">
                <span className="fa-solid fa-guitar" aria-hidden="true"></span>
                <span className="heading">Hardik Ganatra</span>
              </a>
            </h1>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/hardik-ganatra-5503a7172/">
              <span className="fa-brands fa-linkedin" aria-hidden="true"></span>
              <span className="sr-only">LinkedIn</span>
            </a>
          </li>
          <li>
            <span
              className="fa-brands fa-github-square"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Github</span>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1LCbNO_n6TKl1B5Io0lgP3cO5AnKU_i8u/view?usp=sharing"
              target="_blank"
              className="button"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <section id="intro">
        <p className="name">
          Hi, my name is <span>Hardik Ganatra</span>
        </p>
        <h2>I am a Developer</h2>
        <p>I build interactive , beautiful , high performant websites</p>
        <p>
          Currently I am working for{" "}
          <a href="https://www.jpmorganchase.com/" target="_blank">
            JP MORGAN & CHASE
          </a>
        </p>
      </section>
      <div className="section-blue">
        <section id="Projects">
          <h2>Projects I'm proud of</h2>
          <div className="text"></div>
          <article>
            <div className="text">
              <h4>Latest Project</h4>
              <h3>Wall of Wonder</h3>
              <p className="blackbox">
                Description of the project. This should be fairly concise while
                also describing the key components that you developed or worked
                on. It can be as long as you need it to be but should at least
                be a few sentences long. Be sure to include specific links
                anywhere in the description. A link looks like this, and
                multiple links look like this and like this.
              </p>
              <h4>Technologies used include:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>SVG</li>
              </ul>
            </div>
            <img
              src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-1.png"
              alt="Screenshot of the Wall of Wonder."
            />
          </article>
        </section>
      </div>
      <section id="contact">
        <h2>Contact me</h2>
        <p>
          I'm always interested in working on excitiong chalenging projects
          understanding business requirements and delivering to best of my
          abilities
        </p>
        <button>Email me</button>
      </section>

      <footer>
        <h2>HARDIK GANATRA : DEVELOPER</h2>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/hardik-ganatra-5503a7172/">
              <span className="fa-brands fa-linkedin" aria-hidden="true"></span>
              <span className="sr-only">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/hardik-ganatra-5503a7172/">
              <span className="fa-brands fa-linkedin" aria-hidden="true"></span>
              <span className="sr-only">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/hardik-ganatra-5503a7172/">
              <span className="fa-brands fa-linkedin" aria-hidden="true"></span>
              <span className="sr-only">LinkedIn</span>
            </a>
          </li>
        </ul>
        <p>
          <small>2022 Hardik Ganatra. All rights reserved.</small>
        </p>
      </footer>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))

if (module.hot) {
  module.hot.accept()
}
