import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./DonutChart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

function DonutChart() {
  const data = {
    datasets: [
      {
        label: "Poll",
        data: [1423, 134],
        backgroundColor: ["green", "red"],
        borderColor: ["green", "red"],
      },
    ],
    labels: [],
  };

  const options = {};
  return (
    <>
      <Doughnut className="donutchart" data={data} options={options}></Doughnut>
    </>
  );
}

export default DonutChart;
