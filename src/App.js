import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./components/Main";
import ScrollButton from "./layout/ScrollButton";

import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
