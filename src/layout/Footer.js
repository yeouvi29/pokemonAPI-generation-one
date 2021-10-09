import { useEffect } from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={classes.footer}>
      <p>&copy; Emily K. 2021</p>
    </div>
  );
};

export default Footer;
