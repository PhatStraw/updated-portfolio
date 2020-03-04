import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaGithubSquare, FaEnvelope, FaLaptop, FaGithub} from "react-icons/fa"
import { IconContext } from "react-icons";
import "../components/index.css"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="left">
        <div className="intro">
          <h1>Hello, I'm Kevin Sims</h1>
          <p className="main-p">Full Stack Web Developer focused on making dope products through new technologies. I like building anything JavaScript related. Outside of tech I love basketball, fashion and video games. I'm interested in opportunities that deal with new and exciting technologies.</p>
          <IconContext.Provider value={{ size: "32px", className: "global-class-name" }}>
          <div className="icons">
             <a href="https://github.com/kevinsims1" className="ghIcon"><FaGithubSquare /></a>
              <a href="mailto:Kevindsims1@gmail.com" className="ghIcon"><FaEnvelope /></a>
          </div>
          </IconContext.Provider>
        </div>
      </div>


      <div className="right">
        <div className="projectHeader">
          <h2 className="projectsH2">
            Projects
          </h2>
        </div>
        <div className="projects">
          <div className="item">
            <h4>
              JavaScript
            </h4>
            <h2>
              RV Nav
            </h2>
            <p>
              Rv'ers face problems other drivers with smaller vehicles do not, we made a app to help.
            </p>
            <div className="icons">
              <a href="https://www.rvnav.com/" className="ghIcon"><FaLaptop /></a>
              <a href="mailto:Kevindsims1@gmail.com" className="ghIcon"><FaGithub /></a>
            </div>
          </div>

          <div className="item">
            <h4>
              JavaScript
            </h4>
            <h2>
              Youtube Clone
            </h2>
            <p>
              Search for your favorite videos on Youtube, using this "Youtube Clone".
            </p>
            <div className="icons">
              <a href="https://kevinsims1.github.io/u-tube/" className="ghIcon"><FaLaptop /></a>
              <a href="mailto:Kevindsims1@gmail.com" className="ghIcon"><FaGithub /></a>
            </div>
          </div>

          <div className="item">
            <h4>
              JavaScript
            </h4>
            <h2>
              Weather App
            </h2>
            <p>
              Sure we've got weather apps on our phones, but what about our desktops? Check the weather of a city in any country using this desktop weather app.
            </p>
            <div className="icons">
              <a href="https://kevinsims1.github.io/weather-app/" className="ghIcon"><FaLaptop /></a>
              <a href="mailto:Kevindsims1@gmail.com" className="ghIcon"><FaGithub /></a>
            </div>
          </div>

          <div className="item">
            <h4>
              JavaScript
            </h4>
            <h2>
              Donor Manager
            </h2>
            <p>
              This app if for people who are apart of a non profit, and need a way to keep track of their donors and the amount they donated.
            </p>
            <div className="icons">
              <a href="https://donor-management-fe.netlify.com/signup" className="ghIcon"><FaLaptop /></a>
              <a href="mailto:Kevindsims1@gmail.com" className="ghIcon"><FaGithub /></a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
