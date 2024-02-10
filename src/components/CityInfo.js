import React from "react";
import Bar from "./Bar";
import { Doughnut, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

import {
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
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

// Shuffle function to randomly shuffle an array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Randomly select four cities and their corresponding population data
const selectedCities = shuffle(data).slice(0, 4); // Select four random cities
const labels = selectedCities.map((city) => city.city);
const populations = selectedCities.map((city) => city.population);

const doughnutData = {
  labels: labels,
  datasets: [
    {
      label: "Population",
      data: populations,
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
      ],
      hoverOffset: 4,
    },
  ],
};
const lineData = {
  labels: labels,
  datasets: [
    {
      label: "Temperature",
      data: selectedCities.map((city) => city.temprature),
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
    },
  ],
};

export default function CityInfo() {
  return (
    <>
      <Bar />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}>
        <div style={{ width: "400px", height: "600px", margin: "40px  " }}>
          <Doughnut data={doughnutData} />
        </div>
        <div style={{ width: "400px", height: "400px" }}>
          <Line data={lineData} />
        </div>
      </div>
    </>
  );
}
