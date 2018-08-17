import React, { Component } from 'react';
import './../App.css';
import Statistique from './Statistique';
class Healthcare extends Component {
    constructor(props)
    {
        super(props)
        this.listeStat=[
            {
                urlIm:"https://www.docplanner.com/img/flag.png",
                nameStat:"Leader in 8 countries",
                IntroStat:"Poland, Turkey, Spain, Italy, Mexico, Brazil, Argentina and Chile"
            },
            {
                urlIm:"https://www.docplanner.com/img/patients.png",
                nameStat:"20 million unique patients",
                IntroStat:"visit us every month"
            },
            {
                urlIm:"https://www.docplanner.com/img/visits.png",
                nameStat:"600 000 appointments",
                IntroStat:"booked last month"
            },
            {
                urlIm:"https://www.docplanner.com/img/doctors.png",
                nameStat:"35 000 active doctors",
                IntroStat:"trust in our solutions"
            }
        ] 
    }
  
  render() {
    return (
        
      <div className="platform-container" >

        <div className="platform-intro">
                <h1 className="title-exemple">The world's <br />biggest healthcare platform</h1>
                <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
                <img className="big-logo" src="https://scontent.ftun6-1.fna.fbcdn.net/v/t1.15752-9/38838036_339395400167355_655040610662612992_n.png?_nc_cat=0&oh=b7b47a4ac52ad9974ebe1f4b88699261&oe=5BC6F505" />
        </div> 
        <div className="platform-items-o">
       {this.listeStat.map((el,i)=>{
            if(i<2)
           return(
             <Statistique statOne={el.urlIm} statTwo={el.nameStat} statTh={el.IntroStat}/>
  
           )
           
       })}
        </div>
        <div className="platform-items-t">
        {this.listeStat.map((el,i)=>{
           if(i>=2)
           return(
                <Statistique statOne={el.urlIm} statTwo={el.nameStat} statTh={el.IntroStat} />
           )
       })}
       </div>

      </div>
    );
  }
}

export default Healthcare;
