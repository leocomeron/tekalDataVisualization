import { Fragment } from "react";
import TekalPhoto from "../../store/ImagenTekal.jpeg";
import classes from "./Home.module.css";

import Header from "./Header";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <img className={classes.img} src={TekalPhoto}></img>
    </Fragment>
  );
};

export default Home;
