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
              <a href="index.html">Hardik Ganatra</a>
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
              <span class="fa-brands fa-linkedin" aria-hidden="true"></span>
              <span className="sr-only">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/v8-fly">Github</a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1LCbNO_n6TKl1B5Io0lgP3cO5AnKU_i8u/view?usp=sharing"
              target="_blank"
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
      <section id="contact">
        <h2>Contact me</h2>
        <p>
          I'm always interested in working on excitiong chalenging projects
          understanding business requirements and delivering to best of my
          abilities
        </p>
        <button>Email me</button>
      </section>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))

if (module.hot) {
  module.hot.accept()
}
