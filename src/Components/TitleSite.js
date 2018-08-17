import React, { Component } from 'react';
import './../App.css';

class TitleSite extends Component {
  render() {
    return (
      <div className="main-title">
        <img className="icone-title" src="https://www.docplanner.com/img/sygnet.png" />
        <h1 className="title-exemple" >Making the healthcare experience more human</h1>
        <div className="introduction-site">
            <p className="p1">We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.</p>
            <p className="p2">We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.</p>
        </div>
      </div>
    );
  }
}

export default TitleSite;
