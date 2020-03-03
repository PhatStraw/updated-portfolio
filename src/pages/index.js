import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaGithub } from "react-icons/fa"
import { IconContext } from "react-icons";
import "../components/index.css"

const IndexPage = () => {

  const handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className="left">
        <div className="intro">
          <h1>Hello, I'm Kevin Sims</h1>
          <p className="main-p">Id aliquet risus feugiat in ante. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Tortor at auctor urna nunc id cursus metus aliquam. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Vestibulum morbi blandit cursus risus at ultrices mi. Diam sollicitudin tempor id eu nisl nunc mi ipsum. Augue interdum velit euismod in. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo.</p>
          <IconContext.Provider value={{ size: "30px", className: "global-class-name" }}>
            <a href="https://github.com/kevinsims1" className="ghIcon"><FaGithub /></a>
          </IconContext.Provider>
        </div>
      </div>


      <div className="right">
        <div className="projects">
          <a className="item" href="https://www.rvnav.com/">
            <h4>
              JavaScript
            </h4>
            <h2>
              RV Nav
            </h2>
            <p>
              Rv'ers face problems other drivers with smaller vehicles do not, we made a app to help.
            </p>
          </a>

          <a className="item" href="https://kevinsims1.github.io/u-tube/">
            <h4>
              JavaScript
            </h4>
            <h2>
              Youtube Clone
            </h2>
            <p>
              Search for your favorite videos on Youtube, using this "Youtube Clone".
            </p>
          </a>

          <a className="item" href="https://kevinsims1.github.io/weather-app/">
            <h4>
              JavaScript
            </h4>
            <h2>
              Weather App
            </h2>
            <p>
              Sure we've got weather apps on our phones, but what about our desktops? Check the weather of a city in any country using this desktop weather app.
            </p>
          </a>

          <a className="item" href="https://donor-management-fe.netlify.com/signup">
            <h4>
              JavaScript
            </h4>
            <h2>
              Donor Manager
            </h2>
            <p>
              This app if for people who are apart of a non profit, and need a way to keep track of their donors and the amount they donated.
            </p>
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
