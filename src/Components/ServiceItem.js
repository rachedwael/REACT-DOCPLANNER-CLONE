import React, { Component } from 'react';
import './../App.css';

class ServiceItem extends Component {
  render() {
    return (
      <div className="service-container" style={{backgroundColor:this.props.col}} >
            <h4 className="service-responsable">{this.props.serviceFor}</h4>
            <h2 className="title-Service">{this.props.serviceTitle}</h2>
            <img src={this.props.imageService} className="img-service" />
            <div>{this.props.listItem}</div>
      </div>
    );
  }
}

export default ServiceItem;
