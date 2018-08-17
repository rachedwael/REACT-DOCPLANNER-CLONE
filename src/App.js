import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Components/Header';
import TitleSite from './Components/TitleSite';
import ServiceItem from './Components/ServiceItem';
import Company from './Components/Company';
import Healthcare from './Components/Healthcare';
import Country from './Components/Country';
import Footer from './Components/Footer';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.urlImage="https://scontent.ftun6-1.fna.fbcdn.net/v/t1.15752-9/38894221_668592916838860_3417149063861108736_n.png?_nc_cat=0&oh=3905646607cc4b3bbc5846979f5aa37e&oe=5BFA9710"
  }
  createListe=()=>{
    return (
      <select className="country-list">
                                  <option>Choose country</option>
                                  <option >Argentina</option>
                                  <option >Australia</option>
                                  <option >Brazil</option>
                                  <option >Chile</option>
                                  <option >Colombia</option>
      </select>
    )


  }
  render() {
    return (
      <div className="App">
        <Header />
        <TitleSite />
        <div className="serv-cont">

        <ServiceItem 
          serviceFor={"For Patient"} 
          listItem={this.createListe()} 
          serviceTitle={"Find a doctor, book a visit and solve any health-related doubt"} 
          imageService={"https://www.docplanner.com/img/screen-marketplace@2x.png"}
          col={" #00ccb1"}/>

        <ServiceItem  serviceFor={"For doctors"}
         serviceTitle={"Save time managing visits and cut no-shows by half"}
         imageService={"https://www.docplanner.com/img/screen-saas@2x.png"}
         col={"#3d83df"}
         />
        
        </div>   
        <Company iconeDoc={this.urlImage}/>
        <Healthcare />
        <Country />
        <Footer />
      </div>
    );
  }
}

export default App;
