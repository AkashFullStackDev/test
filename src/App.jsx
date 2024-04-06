import React, {useState, useEffect} from 'react';
import LineChart from './components/LineChart';

const App = () => {
  const [X, setX] = useState();
  const [Y, setY] = useState();

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

  const setData = async () => {
    const data1 = await fetchData("https://retoolapi.dev/gDa8uC/data");
    const data2 = await fetchData("https://retoolapi.dev/o5zMs5/data");
    if(Array.isArray(data1) && Array.isArray(data2)){
        setX(data1);
        setY(data2);
    }
  }

  useEffect( () => {
    setData();
  }, []);

  return (
    <div>
      <h1>Chart</h1>
      {X&&Y?<LineChart data1={X} data2={Y} />:null}
    </div>
  );
};

export default App;
