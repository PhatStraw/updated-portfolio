import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/index.css"

import Weatherapp from '../img/weatherapp.png';
import Youtube from '../img/youtube.jpg';
import DonorTransparency from '../img/DonorT.png';
import SautiAM from '../img/SautiAM.jpg';
import Portfolio from '../img/Portfolio.jpg';

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
        </div>
      </div>


      <div className="right">
        <div className="projects">
          <div className="item">
            <h3>
              RV Nav
            </h3>
            <p>
            Id aliquet risus feugiat in ante. Ut tristique et egestas quis ipsum
            </p>
          </div>

          <div className="item">
            <h3>
              RV Nav
            </h3>
            <p>
            Id aliquet risus feugiat in ante. Ut tristique et egestas quis ipsum
            </p>
          </div>

          <div className="item">
            <h3>
              RV Nav
            </h3>
            <p>
            Id aliquet risus feugiat in ante. Ut tristique et egestas quis ipsum
            </p>
          </div>

          <div className="item">
            <h3>
              RV Nav
            </h3>
            <p>
            Id aliquet risus feugiat in ante. Ut tristique et egestas quis ipsum
            </p>
          </div>

          {/* <div className="item">
            <a target="_blank"
              rel="noopener noreferrer"
              href="https://kevinsims1.github.io/u-tube/">
              <img src={Youtube} alt='' />
            </a>

            <a className="btn-light" target="_blank"
              rel="noopener noreferrer"
              href="https://kevinsims1.github.io/u-tube/">
              <i className="fas fa-eye"> </i>Youtube Clone
                </a>
            <a className="btn-dark" target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/kevinsims1/u-tube">
              <i className="fab fa-github"></i>Github
                </a>
          </div>

          <div className="item">
            <a href="https://donor-management-fe.netlify.com/signup"
              target="_blank"
              rel="noopener noreferrer">
              <img src={DonorTransparency} alt='' />
            </a>

            <a className="btn-light" href="https://donor-management-fe.netlify.com/signup" target="_blank"
              rel="noopener noreferrer">
              <i className="fas fa-eye"> </i>Donor Management
                </a>
            <a className="btn-dark" href="https://github.com/kevinsims1/donormanagement-fe" target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-github"></i>Github
                </a>
          </div>

          <div className="item">
            <a target="_blank"
              rel="noopener noreferrer"
              href="https://price-api.sautiafrica.org">
              <img src={SautiAM} alt='' />
            </a>

            <a className="btn-light"
              target="_blank"
              rel="noopener noreferrer"
              href="https://price-api.sautiafrica.org">
              <i className="fas fa-eye"> </i>Open Source Marketplace Api
                </a>
            <a className="btn-dark"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/kevinsims1/OpenSource-marketplace-BE">
              <i className="fab fa-github"></i>Github
                </a>
          </div>

          <div className="item">
            <a target="_blank"
              rel="noopener noreferrer"
              href="https://kevinsims1.github.io/weather-app/">
              <img src={Weatherapp} alt='' />
            </a>

            <a className="btn-light"
              target="_blank"
              rel="noopener noreferrer"
              href="https://kevinsims1.github.io/weather-app/">
              <i className="fas fa-eye"> </i>Weather App
                </a>

            <a className="btn-dark"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/kevinsims1/weather-app">
              <i className="fab fa-github"></i>Github
                </a>
          </div>

          <div className="item">
            <a target="_blank"
              rel="noopener noreferrer"
              href="https://kevinsims.dev">
              <img src={Portfolio} alt='' />
            </a>

            <a className="btn-light"
              target="_blank"
              rel="noopener noreferrer"
              href="https://kevinsims.dev">
              <i className="fas fa-eye"> </i>Portfolio Project
                </a>
            <a className="btn-dark"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/kevinsims1/portfolio">
              <i className="fab fa-github"></i>Github
                </a>
          </div> */}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
