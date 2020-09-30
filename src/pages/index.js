import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaGithubSquare, FaEnvelope, FaLaptop, FaGithub} from "react-icons/fa"
import { IconContext } from "react-icons";
import "../components/index.css"
import gfs from '../img/grailsforsell.png'
import weather from '../img/weather.png'
import donor from '../img/donor.png'
import utube from '../img/utube.png'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="left">
        <div className="intro">
          <h1>Kevin Sims</h1>
          <p className="main-p">Full Stack Web Developer focused on making dope products through new technologies. I like building anything JavaScript related. Outside of tech I love basketball, fashion and video games. I'm interested in opportunities that deal with new and exciting technologies.</p>
          <IconContext.Provider value={{ size: "32px", className: "global-class-name" }}>
          <div className="icons">
             <a href="https://github.com/phatstraw" className="ghIcon"><FaGithubSquare /></a>
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
            <div className='item-wrap'>
            <h2>
              Grails For Sell
            </h2>
            <img src={gfs} />
            </div>
            
            <p>
             Fully functional e-commerce site. Includes a cart, add items for admin users, as well as signup/signin.
            </p>
            <div className="icons">
              <a href="https://ksks2121.netlify.app/" className="ghIcon"><FaLaptop /></a>
              <a href="https://github.com/phatstraw/grailsforsell" className="ghIcon"><FaGithub /></a>
            </div>
          </div>

          <div className="item">
            <div className='item-wrap'>
            <h2>
              Youtube Clone
            </h2>
            <img src={utube} />
            </div>
           
            <p>
              Search for your favorite videos on Youtube, using this "Youtube Clone".
            </p>
            <div className="icons">
              <a href="https://phatstraw.github.io/u-tube/" className="ghIcon"><FaLaptop /></a>
              <a href="https://github.com/phatstraw/u-tube" className="ghIcon"><FaGithub /></a>
            </div>
          </div>

          <div className="item">
            <div className='item-wrap'>
            <h2>
              Weather App
            </h2>
            <img src={weather} />
            </div>
            
            <p>
              Sure we've got weather apps on our phones, but what about our desktops? Check the weather of a city in any country using this desktop weather app.
            </p>
            <div className="icons">
              <a href="https://phatstraw.github.io/weather-app/" className="ghIcon"><FaLaptop /></a>
              <a href="https://github.com/phatstraw/weather-app" className="ghIcon"><FaGithub /></a>
            </div>
          </div>

          <div className="item">
            <div className='item-wrap'>
            <h2>
              Donor Manager
            </h2>
            <img src={donor} />
            </div>
            
            <p>
              This app if for people who are apart of a non profit, and need a way to keep track of their donors and the amount they donated.
            </p>
            <div className="icons">
              <a href="https://donor-management-fe.netlify.com/signup" className="ghIcon"><FaLaptop /></a>
              <a href="https://github.com/phatstraw/OpenSource-marketplace-BE" className="ghIcon"><FaGithub /></a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
