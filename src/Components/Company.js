import React, { Component } from 'react';
import './../App.css';

class Company extends Component {
  
  render() {
    return (
      <div className="company-container" >
            <div className="company-into"> <h1 className="title-exemple">We are a global company with local culture</h1></div>
            <ul className="company-content">
                <li class="company-item"><a class="company-link" href=""><img class="icon-png" src={this.props.iconeDoc} /> znanylekars</a></li>
                <li class="company-item"><a class="company-link" href=""><img class="icon-png" src={this.props.iconeDoc} />doctoralia</a></li>
                <li class="company-item"><a class="company-link" href=""><img class="icon-png" src={this.props.iconeDoc} />miodottore</a></li>
                <li class="company-item"><a class="company-link" href=""><img class="icon-png" src={this.props.iconeDoc} />doktorTakvimi</a></li>
                <li class="company-item"><a class="company-link" href=""><img class="icon-png" src={this.props.iconeDoc} />ismertorvos</a></li>
                <li class="company-item"><a class="company-link" href=""><img class="icon-png" src={this.props.iconeDoc} />znamylekar</a></li>
            </ul>
      </div>
    );
  }
}

export default Company;
