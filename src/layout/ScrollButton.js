import classes from "./ScrollButton.module.css";
const ScrollButton = (props) => {
  return (
    <button onClick={props.onClick} className={classes["scroll-to-top"]}>
      TOP
    </button>
  );
};

export default ScrollButton;
