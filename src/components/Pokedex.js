import { useState, useEffect, useRef } from "react";
import PokemonCard from "./PokemonCard";
import ScrollButton from "../layout/ScrollButton";
import classes from "./Pokedex.module.css";

const Pokedex = (props) => {
  const scrollTopRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  // send datas that are passed from Main component to child compoenents
  const pokemonDatas = props.pokedexData.map((data, i) => (
    <PokemonCard
      key={i}
      url={`https://pokeapi.co/api/v2/pokemon/${data.name}/`}
      color={props.color[i]}
    />
  ));

  const clickHandler = () => {
    setIsClicked(true);
  };

  useEffect(() => {
    if (isClicked) {
      let scrollRef = scrollTopRef.current;
      setIsClicked(false);
      return () => {
        scrollRef.scrollIntoView({ behavior: "smooth" });
      };
    }
  }, [isClicked]);

  return (
    <div className={classes["cards--container"]}>
      <div ref={scrollTopRef}></div>
      <div className={classes["cards--container-inner"]}>{pokemonDatas}</div>
      <ScrollButton onClick={clickHandler} />
    </div>
  );
};

export default Pokedex;
