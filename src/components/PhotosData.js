import { useState, useEffect, Fragment } from "react";
import BasicModal from "./UI/Modal";
import classes from "./PhotosData.module.css";
import Header from "./UI/Header";

const PhotosData = () => {
  const [values, setValues] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dev-cognitive-dashboard-server.herokuapp.com/techtest");
      const responseData = await response.json();

      setValues(responseData);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      <Header />
      {loading && <p className={classes.loadingText}>Loading ...</p>}
      <div className={classes.wrapper}>
        {values.map((item) => {
          let m1 = Number(item.perc_score_m1);
          let m2 = Number(item.perc_score_m2);
          let m3 = Number(item.perc_score_m3);
          let mediaScore = (m1 + m2 + m3) / 3;

          //Solo mostrar imagenes y que contengan datos
          if ((item.type === 0) & (m1 !== 0)) {
            return (
              <Fragment>
                <div className={classes.imgDiv} key={item.id}>
                  <img className={classes.img} width="200" height="200" src={item.url_original} alt={item.name}></img>

                  <div className={classes.modal}>
                    <BasicModal
                      m1={m1.toFixed(2)}
                      m2={m2.toFixed(2)}
                      m3={m3.toFixed(2)}
                      mediaScore={mediaScore.toFixed(2)}
                      image={item.url_original}
                      type={item.type}
                    />
                  </div>
                </div>
              </Fragment>
            );
          }
          return null;
        })}
      </div>
    </Fragment>
  );
};
export default PhotosData;
