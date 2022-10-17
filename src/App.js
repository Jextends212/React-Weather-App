import React, {useState} from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import './App.css';
import { SearchBar } from './Components/Searchbar';
import Cards from './Components/Cards';
import { Info } from './Components/InfoCity';


const apiKey = '4ae2636d8dfbdc3044bede63951a019b';



function App() {

  const [cities, setCities] = useState([]);

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onSearch(city){

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {

      if(data.main){

        const newCity ={
          min: Math.round(data.main.temp_min),
            max: Math.round(data.main.temp_max),
            img: data.weather[0].icon,
            id: data.id,
            wind: data.wind.speed,
            temp: data.main.temp,
            name: data.name,
            weather: data.weather[0].main,
            clouds: data.clouds.all,
            latitud: data.coord.lat,
            longitud: data.coord.lon
        };
        setCities(cities => [...cities, newCity]);
      }else{
        alert("Ciudad no encontrada");
      }
    });
  }

  
  return (

    <Router>
    <div className="App">


      <Route exact path= "/">

      <SearchBar onSearch = {onSearch}></SearchBar>

      <Cards cities={cities}
          onClose={onClose}></Cards>
      </Route>


      <Route path= "/ciudad/:id" >
      
      <Info cities={cities}/>

      </Route>
      
      
    </div>
    </Router>
  );
}

export default App;
