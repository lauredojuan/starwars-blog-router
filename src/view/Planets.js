import React, { useState, useEffect } from "react";
import { Card } from "../component/Card";

export const Planets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(
    () => {
      fetch("https://swapi.dev/api/planets/")
        .then((data) => data.json()) //convert incoming JSON formated response into an object
        .then((response) => {
          setPlanets(response.results);
        }); //here it re-set the variable characters with the incoming data}
    },
    [] // <---- thanks to this empty array the use effect will be called only once
  );

  return (
    <div className="character-card">
      {planets.length > 1 ? (
        planets.map((planet, index) => (
          <Card
            key={index}
            imageSrc={`https://loremflickr.com/250/200/planets?random=${
              index + 1
            }`}
            first={`${index + 1} ). `}
            name={`Name:  ${planet.name}`}
            third={`Rotation period:  ${planet.rotation_period}`}
            fourth={`Terrain:  ${planet.terrain}`}
            fifth={`Diameter:  ${planet.diameter}`}
            sixth={`Population:  ${planet.population}`}
            seventh={`Climate:  ${planet.climate}`}
          />
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};
