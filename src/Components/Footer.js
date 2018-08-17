import React, { Component } from 'react';
import './../App.css';

class Footer extends Component {
  render() {
    return (
      <div className="footeer-container">
         <hr />
            <h5 class="footer-up">We are leaders in 8 countries: <a href="">Poland</a>,<a href=""> Turkey</a>, <a href="">Spain</a>, Italy, Mexico, Brazil, Argentina en Chile</h5>
            <h5>This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.</h5>
            <h5>www.docplanner.com © 2018</h5>
      </div>
    );
  }
}

export default Footer;