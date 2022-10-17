import React from 'react';
import Card from './Card.jsx';
import styles from "./Card.module.css";

const { cards} = styles;

export default function Cards ({cities, onClose}){


    return(

        <div className={cards}>
        {cities.map(c => <Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            lat={c.latitud}
            long={c.longitud}
            id = {c.id}
            temp= {c.temp}
            wind={c.wind}
            clouds={c.clouds}
            weather={c.weather}
            key={c.id}
            
          /> )}
      </div>

        
    )
}