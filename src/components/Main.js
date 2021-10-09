import { useState, useEffect } from "react";
import randomColor from "randomcolor";

import Pokedex from "./Pokedex";

import classes from "./Main.module.css";

const Main = () => {
  // state that manages fetched the pokemon generation one data from pokeapi
  const [generationOne, setGenerationOne] = useState({
    isFetching: true,
    pokedexData: [],
    color: [],
  });

  // when the state of generationOne.isFetching, fetching the pokemon getneration one's data
  useEffect(() => {
    const getPokemons = async (url) => {
      try {
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            const colorArr = new Array(data["pokemon_species"].length)
              .fill("")
              .map(() => randomColor());
            setGenerationOne({
              isFetching: false,
              pokedexData: data["pokemon_species"],
              color: colorArr,
            });
          });
      } catch (err) {
        setGenerationOne((prevState) => ({
          isFetching: false,
          pokedexData: prevState.pokedexData,
          color: prevState.color,
        }));
        console.log(err.message);
      }
    };

    if (generationOne.isFetching)
      getPokemons("https://pokeapi.co/api/v2/generation/1/");
  }, [generationOne.isFetching]);

  return (
    <div className={classes.main}>
      <Pokedex
        pokedexData={generationOne.pokedexData}
        color={generationOne.color}
      />
    </div>
  );
};

export default Main;
