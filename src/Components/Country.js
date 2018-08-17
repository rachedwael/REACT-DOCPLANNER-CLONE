import React, { Component } from 'react';
import './../App.css';
import CountryItem from './CountryItem';
class Country extends Component {
    constructor(props)
    {
        super(props)
        this.listeCountry=[
            {
                nameCountry:"Warsaw",
                imgCountry:"https://www.docplanner.com/images/warsaw.png"
            },
            {
                nameCountry:"Barcelone",
                imgCountry:"https://www.docplanner.com/images/barcelona.png"
            },
            {
                nameCountry:"Istanbul",
                imgCountry:"https://www.docplanner.com/images/istanbul.png"
            },
            {
                nameCountry:"Rome",
                imgCountry:"https://www.docplanner.com/images/rome.png"
            },
            {
                nameCountry:"Mexico city",
                imgCountry:"https://www.docplanner.com/images/mexico-city.png"
            },
            {
                nameCountry:"Ciritiba",
                imgCountry:"https://www.docplanner.com/images/curitiba.png"
            }
        ] 
    }
  
  render() {
    return (
      <div className="contry-bloc">
        <div className="country-intro">
        <h1 className="title-exemple">Improve the lives of millions. Change yours forever</h1>
        <p>More than 500 team mates share our same vision, goals and passion. With offices 
           in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for
           great talent never stops.</p>
        </div>
      <div className="country-container" >
       {this.listeCountry.map(el=>{
           return(
               <CountryItem statOne={el.imgCountry} statTwo={el.nameCountry} />
           )
       })}
      </div>
      </div>
    );
  }
}

export default Country ;
