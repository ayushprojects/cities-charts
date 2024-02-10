import React from "react";
import { Chart, registerables } from "chart.js";
import { Chart as ChartComponent } from "react-chartjs-2";
import { TreemapController } from "chartjs-chart-treemap";

Chart.register(...registerables);
Chart.register(TreemapController, TreemapController);

function TreeMap() {
  const config = {
    type: "treemap",
    data: {
      datasets: [
        {
          label: "My treemap dataset",
          tree: [15, 6, 6, 5, 4, 3, 2, 2],
          borderColor: "green",
          borderWidth: 1,
          spacing: 0,
          backgroundColor: "red",
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "My treemap chart",
        },
        legend: {
          display: false,
        },
      },
    },
  };

  return (
    <div>
      <ChartComponent
        type={config.type}
        data={config.data}
        options={config.options}
      />
    </div>
  );
}

export default TreeMap;
