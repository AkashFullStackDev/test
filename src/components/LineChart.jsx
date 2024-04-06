import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const MyChart = ({data1, data2}) => {
    console.log("Data1",data1)
    console.log("Data2",data2)
    const [X, setX] = useState([]);
    const [Y, setY] = useState([]);
    useEffect(()=>{
        const a = data1.map(data=>data.RandomNumber);
        const b = data2.map(data=>data.RandomNumber);
        setX(a);
        setY(b);
    },[])
    
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: X.slice(0, 50),
          datasets: [
            {
              label: 'Y',
              data: Y.slice(0, 50),
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 100,
              point: {
                radius: 2,
                borderWidth: 1,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgb(75, 192, 192)',
              },
            },
          ],
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: 'X',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Y',
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [X, Y]);

  return <canvas ref={chartRef} />;
};

export default MyChart;
