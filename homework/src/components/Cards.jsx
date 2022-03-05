import React from "react";
import "./Cards.css";

import Card from "./Card.jsx";

export default function Cards({ cities, onClose }) {
  return (
    <div className="cards">
      {cities.map((city) => (
        <Card
          key={city.id}
          id={city.id}
          name={city.name}
          max={city.max}
          min={city.min}
          img={city.img}
          onClose={() => onClose(city.id)}
        />
      ))}
    </div>
  );
}
