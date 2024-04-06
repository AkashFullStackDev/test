import React, { useEffect, useState } from "react";
import MyChart from "../components/chart/Chart";

import "./style.css";

const ChartContainer = () => {
  const [X, setX] = useState([]);
  const [Y, setY] = useState([]);

  const fetchData = async (API) => {
    try {
      const response = await fetch(API);
      if (response) {
        console.log("Data found");
        return await response.json();
      } else {
        console.log("Else error");
        return null;
      }
    } catch (err) {
      console.log("Catch error");
      return null;
    }
  };

  useEffect(() => {
    const data1 = fetchData("https://retoolapi.dev/gDa8uC/data");
    const data2 = fetchData("https://retoolapi.dev/o5zMs5/data");
    if(Array.isArray(data1) && Array.isArray(data2)){
        setX(data1);
        setY(data2);
    }
  }, []);

  return (
    <div className="main">
      <h1>Chart</h1>
      {X&&Y?<MyChart data1={X} data2={Y} />:null}
    </div>
  );
};

export default ChartContainer;
