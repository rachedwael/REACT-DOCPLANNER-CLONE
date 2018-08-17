import React, { Component } from 'react';
import './../App.css';

class CountryItem extends Component {
  render() {
    return (
        <div class="country-item">
        <a href="">
        <img class="country-img" src= {this.props.statOne}/>
        <div class="inf-country">
        <h4 class="country-name">{this.props.statTwo}</h4>
        <button type="button" class="btn-open">See openings</button>
        </div>
        </a>
        </div>
    );
  }
}

export default CountryItem;
