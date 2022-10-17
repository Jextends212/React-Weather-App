import React from 'react';
import styles from "./Card.module.css";
import {Link} from "react-router-dom";

const { globalcontainer, span,link} = styles;

export default function Card(props){

    return(
       
<div>

  
<div className={globalcontainer}>
<button onClick={props.onClose} >X</button>
<Link className= {link} to={`/ciudad/${props.id}`}>
  <span className= {span} >
  
  <h4>{props.name}</h4>
  
  </span>

  <img  src = {`http://openweathermap.org/img/wn/${props.img}@2x.png`} width="300" height="300" alt= {props.name}></img>

<div>
  <h4>Temperature:</h4>
  <h5>Min: | Max:  </h5>
  <p> {Math.round(props.min - 273.15)}C° | { Math.round(props.max -273.15)}C° </p>
  </div>

  <div>
<h4>Latitude:      |  Longitude: </h4>
<p>  {props.lat}  | {props.long}</p>

</div></Link>
  </div>

  

  </div>
    )
}