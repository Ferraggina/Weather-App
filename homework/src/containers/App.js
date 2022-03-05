import React, { useState } from "react";

import "./App.css";
import Nav from "../components/Nav.jsx";
import Cards from "../components/Cards.jsx";
import City from "../components/City.jsx";
import { Route } from "react-router-dom";

const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((city) => city.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`
    )
      .then((d) => d.json())
      .then((data) => {
        if (data.main !== undefined) {
          const ciudad = {
            id: data.id,
            name: data.name,
            min: Math.floor(data.main.temp_min - 273.15),
            max: Math.ceil(data.main.temp_max - 273.15),
            img: data.weather[0].icon,
            wind: data.wind.speed,
            temp: Math.round(data.main.temp - 273.15),
            weather: data.weather[0].main,
            clouds: data.clouds.all,
            latitud: data.coord.lat,
            longitud: data.coord.lon,
          };
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else return null;
  }
  return (
    <div className="App">
      <Route path="/" render={() => <Nav onSearch={onSearch} />} />
      <Route
        exact
        path="/"
        render={() => <Cards cities={cities} onClose={onClose} />}
      />

      <Route
        exact
        path="/ciudad/:ciudadId"
        render={({ match }) => <City city={onFilter(match.params.ciudadId)} />}
      />
    </div>
  );
}

export default App;
