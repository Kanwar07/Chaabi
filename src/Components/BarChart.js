import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./PieChart.css";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function BarChart() {
  const data = {
    labels: [
      "3 Jun",
      "4 Jun",
      "5 Jun",
      "6 Jun",
      "7 Jun",
      "8 Jun",
      "9 Jun",
      "10 Jun",
      "11 Jun",
      "12 Jun",
      "13 Jun",
      "14 Jun",
    ],
    datasets: [
      {
        label: "Active Workers",
        data: [100, 150, 150, 225, 250, 200, 225, 100, 250, 300, 350, 400],
        backgroundColor: "#0D62FF",
        borderColor: "white",
        borderWidth: 1,
        barThickness: 10,
      },
    ],
  };
  const options = {};
  return (
    <>
      <Bar className="barchart" data={data} options={options}></Bar>
    </>
  );
}

export default BarChart;
