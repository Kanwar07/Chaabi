import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function BarChart() {
  const data = {
    labels: ["S", "M", "T", "W", "T", "F", "S", "S", "M", "T", "W"],
    datasets: [
      {
        label: "Training Completions",
        data: [35, 50, 45, 70, 45, 75, 45, 35, 50, 45],
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
      <Bar data={data} options={options}></Bar>
    </>
  );
}

export default BarChart;
