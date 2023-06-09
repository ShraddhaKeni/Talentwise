import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";
import { Helmet } from 'react-helmet'

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center"}}>{projects.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio" style={{backgroundColor:"rgb(65 73 74)",boxShadow: "5px 10px"}}>
        <Fade left duration={1000} distance="40px">
        <Helmet>
            <title>Talentwise - Our Clients</title>
            <meta name="description" content="Our Clients" />
          </Helmet>
          <div className="row">
            <div className="twelve columns collapsed">
              <h1 style={{color:"#fff"}}>Our Clients</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
      
    );
  }
}

export default Portfolio;
