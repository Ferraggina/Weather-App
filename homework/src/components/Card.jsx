import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <div className="card">
      <div className="btn-close " id="closeIcon">
        <button onClick={onClose} className="btn btn-sm btn-danger">
          X
        </button>
      </div>
      <div className="card-body">
        <Link to={`/ciudad/${id}`}>
          <h5 className="card-title">{name}</h5>

          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4" id="minStyle">
              <p>Min</p>
              <p>{min}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4" id="maxStyle">
              <p>Max</p>
              <p>{max}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img
                className="iconClima"
                src={`http://openweathermap.org/img/wn/${img}@2x.png`}
                alt="Imagen"
                width="80"
                height="80"
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
