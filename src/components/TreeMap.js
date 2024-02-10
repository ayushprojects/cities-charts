import React from "react";
import Bar from "./Bar.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { color } from "chart.js/helpers";
import { TreemapController, TreemapElement } from "chartjs-chart-treemap";
import { Chart } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TreemapController,
  TreemapElement
);

const data = [
  { city: "Mumbai", temprature: 5, population: 40000 },
  { city: "Pune", temprature: 4, population: 70029 },
  { city: "Bhopal", temprature: 30, population: 365667 },
  { city: "Indore", temprature: 11, population: 48843 },
  { city: "Hydrabad", temprature: 36, population: 344443 },
  { city: "Chennai", temprature: 3, population: 34665 },
  { city: "Jabalpur", temprature: 35, population: 44644 },
  { city: "Thane", temprature: 40, population: 99577 },
  { city: "Jaipur", temprature: 34, population: 947736 },
  { city: "Jodhpur", temprature: 14, population: 444432 },
  { city: "Surat", temprature: 39, population: 23525 },
  { city: "Kanpur", temprature: 28, population: 43543 },
  { city: "Lakhnow", temprature: 18, population: 345435 },
  { city: "Delhi", temprature: 19, population: 34556 },
];

export default function TreeMap() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/CityInfo");

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Assessment 2",
      },

      legend: {
        display: false,
      },
      tooltip: {
        displayColors: false,
        callbacks: {
          title(items) {
            return items[0].raw._data.city;
          },
          label(item) {
            const {
              _data: { temprature, population },
            } = item.raw;
            return [
              `Temprature: ${temprature} \u00B0C `,
              `Population: ${population}`,
            ];
          },
        },
      },
    },
    onClick: (event, elements) => {
      handleClick();
    },
  };

  const config = {
    type: "treemap",
    data: {
      datasets: [
        {
          tree: data,
          key: "population",
          labels: {
            display: true,
            formatter: (context) => context.raw._data.city,
          },
          backgroundColor(context) {
            if (context.type !== "data") return "transparent";
            const { temprature } = context.raw._data;
            return temprature >= 15
              ? color("red").rgbString()
              : color("blue").alpha(temprature).rgbString();
          },
        },
      ],
    },
  };
  return (
    <>
      <Bar />
      <div
        className="container"
        style={{
          height: "600px",
          display: "flex",
          margin: "auto",
        }}
      >
        <Chart
          type="treemap"
          data={config.data}
          options={options}
          height={400} // Set an initial height for the chart
          width={800} // Set an initial width for the chart
          redraw={true}
        />
      </div>
    </>
  );
}
