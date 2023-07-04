import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./PieChart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
  const data = {
    datasets: [
      {
        label: "Poll",
        data: [34, 22, 20, 7, 22],
        backgroundColor: ["lightblue", "white", "white", "white", "white"],
        borderColor: [
          "lightblue",
          "lightgrey",
          "lightgrey",
          "lightgrey",
          "lightgrey",
        ],
      },
    ],
    labels: [],
  };

  const options = {};
  return (
    <>
      <Pie className="piechart" data={data} options={options}></Pie>
    </>
  );
}

export default PieChart;
