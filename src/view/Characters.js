import React, { useState, useEffect } from "react";
import { Card } from "../component/Card";

export const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(
    () => {
      fetch("https://swapi.dev/api/people/")
        .then((data) => data.json()) //convert incoming JSON formated response into an object
        .then((response) => {
          setCharacters(response.results);
        }); //here it re-set the variable characters with the incoming data
    },
    [] // <---- thanks to this empty array the use effect will be called only once
  );

  return (
    <div style={{ margin: "0 auto" }}>
      <div className="character-card">
        {characters.length > 1 ? (
          characters.map((character, index) => (
            <Card
              key={index}
              imageSrc={`https://loremflickr.com/250/200/starwars?random=${
                index + 1
              }`}
              first={`${index + 1} ). `}
              name={`Name:  ${character.name}`}
              third={`Gender:  ${character.gender}`}
              fourth={`Height:  ${character.height}`}
              fifth={`Hair color:  ${character.hair_color}`}
              sixth={`Skin color:  ${character.skin_color}`}
              seventh={`Eye color:  ${character.eye_color}`}
            />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};
