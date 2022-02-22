import React, { Component } from "react";
// import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import MeowWoofThumbnail from "./thumbnail.jpg";
import HomePage from "./home-page.jpg";
import indexPage from "./index-page.jpg";
import DogListPage from "./dog-list-page.jpg";

class MeowWoof extends Component {
  scrollToTop = () => {
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
       });
  };
  componentDidMount() {
    this.scrollToTop();
  }
  render() {
    return (

      <div className="show-page">
        <div className="description">
          <h2>MeowWoof App</h2>
          <p>
            Meow Woof Rescue Mission was a group project. It is a full-stack
            application that uses JavaScript, Express, and MongoDB to allow
            users to login and save their foster pet's information to the
            database and view other available pets.
          </p>
          <a href="https://meow-woof-app.herokuapp.com/" target="_blank">
            View Meow Woof site
          </a>
          <br />
          <a
            href="https://github.com/chrissyeason/Animal-AdoptionApp"
            target="_blank"
          >
            github.com/chrissyeason/Animal-AdoptionApp
          </a>
        </div>
        <div className="img-container">
          <img src={HomePage} />
        </div>
        <div className="img-container">
          <img src={indexPage} />
        </div>
        <div className="img-container">
          <img src={DogListPage} />
        </div>

        <div className="space"></div>

        {/* // <img src={MeowWoofThumbnail} color="white" onClick={this.toggle} /> */}
      </div>
    );
  }
}

export default MeowWoof;
