import React, { Component } from 'react';
import './../App.css';

class Statistique extends Component {
  
  render() {
    return (
        
      <div className="statistique-container" >
            <div class=" statistic-item">
              <img class="statistic-img" src={this.props.statOne} />
              <h3 class="statistic-title">{this.props.statTwo}</h3>
              <p class="statistic-content">{this.props.statTh}</p>
            </div>
               
      </div>
    );
  }
}

export default Statistique;