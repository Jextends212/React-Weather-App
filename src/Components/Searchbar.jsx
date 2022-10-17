import React, {useState} from 'react';
import styles from "./Search.module.css";

const {imagen,main, boton} = styles;


export function SearchBar({onSearch}){

  const [city, setCity] = useState("");

  

    return (
        <div>

          <div className={main}>

         <h1><img className= {imagen} src='https://icones.pro/wp-content/uploads/2021/07/icone-meteo-jaune.png'alt='Img'></img> Weather App.com</h1>

         <br></br>

         </div>

         <form onSubmit={(e) => {
           e.preventDefault();
           onSearch(city);
           setCity("")

    }}>

        <label><strong>Busca una ciudad:</strong> </label>
        
      <input
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
        
      />
      <input className= {boton} type="submit" value="Agregar" />
    </form>

    <br></br>

</div> 

    )
    

}