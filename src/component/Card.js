import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Card = (props) => {
  return (
    <Context.Consumer>
      {(context) => {
        return (
          <div className="card-style">
            <img src={props.imageSrc} alt="..." />
            <div>
              <p className="parag">{props.first}</p>
              <p className="parag">{props.name}</p>
              <p className="parag">{props.third}</p>
              <p className="parag">{props.fourth}</p>
              <p className="parag">{props.fifth}</p>
              <p className="parag">{props.sixth}</p>
              <p className="parag">{props.seventh}</p>
              <button>See Details</button>
              <button onClick={() => context.actions.addFavorite(props.name)}>
                Add to Favorites
              </button>
            </div>
          </div>
        );
      }}
    </Context.Consumer>
  );
};
Card.propTypes = {
  name: PropTypes.string,
  third: PropTypes.string,
  fourth: PropTypes.string,
  fifth: PropTypes.string,
  sixth: PropTypes.string,
  seventh: PropTypes.string,
  character: PropTypes.string,
  imageSrc: PropTypes.string,
};
