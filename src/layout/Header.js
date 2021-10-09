import pikachu from "./../assets/pikachu_icon-icons.com_67535.png";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <a className={classes["logo--container"]} href="/">
        <h1 className={classes.logo}>
          Pokémon <span>Gen. I</span>
        </h1>
        <img className={classes.pikachu} src={pikachu} alt="pikachu" />
      </a>
    </div>
  );
};

export default Header;
