import { Fragment, useEffect, useState } from "react";
import Table from "./UI/Table";
import { PieChart, Pie, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import classes from "./CalculatedData.module.css";

const CalculatedData = () => {
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

  const sectors = [...new Set(values.map((o) => o.sector))].filter((el) => el !== "Food and Beverage");
  const types = [...new Set(values.map((o) => o.type))];

  let processedData = [];

  for (let s of sectors) {
    let type = 0;

    for (const t of types) {
      let counter = 0;
      let sumaM1 = 0;
      let sumaM2 = 0;
      let sumaM3 = 0;
      let m1MediaScore = 0;
      let m2MediaScore = 0;
      let m3MediaScore = 0;
      let sectorMediaScore = 0;
      type = t;

      values.map((item) => {
        if ((item.sector === s) & (item.type === t)) {
          sumaM1 = sumaM1 + item.perc_score_m1;
          sumaM2 = sumaM2 + item.perc_score_m2;
          sumaM3 = sumaM3 + item.perc_score_m3;
          counter++;

          m1MediaScore = sumaM1 / counter;
          m2MediaScore = sumaM2 / counter;
          m3MediaScore = sumaM3 / counter;
          sectorMediaScore = (m1MediaScore + m2MediaScore + m3MediaScore) / 3;
        }
        return null;
      });

      if (sectorMediaScore !== 0) {
        let object = {
          sector: s,
          type: type,
          m1MediaScore: Number(m1MediaScore.toFixed(2)),
          m2MediaScore: Number(m2MediaScore.toFixed(2)),
          m3MediaScore: Number(m3MediaScore.toFixed(2)),
          mediaScore: Number(sectorMediaScore.toFixed(2)),
          quantity: counter,
        };
        processedData.push(object);
      }
    }
  }

  let pieChartData = [];
  processedData.map((i) => {
    let obj = {
      quantity: i.quantity,
      name: `${(i.sector === "" && "Not defined") || i.sector} - ${(i.type === 0 && "Photo") || "Video"}`,
    };
    pieChartData.push(obj);
    return null;
  });

  let histogramData = [];
  processedData.map((i) => {
    let obj = {
      photoScore: (i.type === 0 && i.mediaScore) || null,
      videoScore: (i.type === 1 && i.mediaScore) || null,
      name: `${(i.sector === "" && "Not defined") || i.sector}`,
    };
    histogramData.push(obj);
    return null;
  });

  return (
    <Fragment>
      {(loading && <p className={classes.loadingText}>Loading ...</p>) || (
        <div className={classes.container}>
          <div>
            <Table processedData={processedData} />
            <div className={classes.wrapper}>
              <div>
                <p className={classes.chartTitle}>QUANTITY PIE CHART</p>
                <PieChart width={400} height={300}>
                  <Pie
                    dataKey="quantity"
                    isAnimationActive={false}
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  />
                  <Tooltip />
                </PieChart>
              </div>
              <div>
                <p className={classes.chartTitle}>MEDIA SCORE HISTOGRAM</p>
                <BarChart
                  width={700}
                  height={300}
                  data={histogramData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="photoScore" fill="#8884d8" />
                  <Bar dataKey="videoScore" fill="#82ca9d" />
                </BarChart>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default CalculatedData;
