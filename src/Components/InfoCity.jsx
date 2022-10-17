import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from "./Search.module.css";

const {imagen, main,containerindividual,h55}= styles;


export function Info({cities}){

    const {id} = useParams();

    const results = cities.filter(function (city) { return city.id == id; });
    const city = (results.length > 0) ? results[0] : null;

    //data.main.temp

    return(
        <div>
            
            <Link to= "/">
            <div className={main}>
            <h1 ><img className= {imagen} src='https://icones.pro/wp-content/uploads/2021/07/icone-meteo-jaune.png' alt='Reference Image'></img>Weather App.com</h1>
            </div> 
            </Link>

            <div className={containerindividual}>
            <h1>Current City: </h1>
            <h3>{city.name}</h3>

            
            
            <h4>Main Temperature:</h4>
            <h5 className={h55}>{Math.round(city.temp - 273.15)}C°</h5>
            

            <h4>Weather:</h4>
            <h5 className={h55}>|| <strong>Condition:</strong>   {city.weather} || <strong>Clouds:</strong>  {city.clouds}%  || <strong>Wind:</strong> {city.wind} kts ||</h5>


            







            </div>

            
        </div>
    )

}