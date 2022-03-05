import React from "react";

export default function Ciudad({ city }) {
  return (
    <div className="container col-lg-1" id="ciudad">
      <div className="card ">
        <h2>{city.name}</h2>
        <div className="info">
          <div>Temperatura: {city.temp} ºC</div>
          <div>Clima: {city.weather}</div>
          <div>Viento: {city.wind} km/h</div>
          <div>Cantidad de nubes: {city.clouds}</div>
          <div>Latitud: {Math.round(city.latitud)}º</div>
          <div>Longitud: {Math.round(city.longitud)}º</div>
        </div>
      </div>
    </div>
  );
}
