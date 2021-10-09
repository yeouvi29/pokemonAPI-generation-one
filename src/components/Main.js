import { useState, useEffect } from "react";
import randomColor from "randomcolor";

import Pokedex from "./Pokedex";

import classes from "./Main.module.css";

const Main = () => {
  // state that manages fetched page data from pokeapi
  const [pageData, setPageData] = useState({
    isFetching: true,
    currentUrl: "https://pokeapi.co/api/v2/generation/1/",
    pokedexData: [],
    color: [],
  });

  // when the state of pageData.isFetching or pageData.currentUrl is changed, fetching the new data with the url that is stored in pageData.currentUrl
  useEffect(() => {
    const getPokemons = async (url) => {
      try {
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            const colorArr = new Array(data["pokemon_species"].length)
              .fill("")
              .map(() => randomColor());
            setPageData({
              isFetching: false,
              currentUrl: "https://pokeapi.co/api/v2/generation/1/",
              pokedexData: data["pokemon_species"],
              color: colorArr,
            });
          });
      } catch (err) {
        setPageData((prevState) => ({
          isFetching: false,
          currentUrl: "https://pokeapi.co/api/v2/generation/1/",
          pokedexData: prevState.pokedexData,
          color: prevState.color,
        }));
        console.log(err.message);
      }
    };

    if (pageData.isFetching) getPokemons(pageData.currentUrl);
  }, [pageData.isFetching, pageData.currentUrl]);

  return (
    <div className={classes.main}>
      <Pokedex pokedexData={pageData.pokedexData} color={pageData.color} />
    </div>
  );
};

export default Main;
