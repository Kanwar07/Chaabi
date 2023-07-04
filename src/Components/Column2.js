import { Stack } from "@mui/material";
import "./Column2.css";
import PieChart from "./PieChart";
import blue from "./Assets/blue.png";
import grey from "./Assets/grey.png";
import redcircle from "./Assets/redcircle.png";
import darkgreen from "./Assets/darkgreen.png";
import purple from "./Assets/purple.png";
import BarChart from "./BarChart";

function Column2() {
  return (
    <>
      <Stack direction="row">
        <Stack>
          <div className="column2a">
            <div className="text2a">Chapter Wise Status</div>
            <div>
              <PieChart />
            </div>
            <div>
              <Stack direction="row" className="smalltext2a">
                <Stack direction="column">
                  <div>
                    <img src={blue} alt="blue" />
                    Finished Training
                  </div>
                  <div>
                    <img src={purple} alt="purple" />
                    Chapter B
                  </div>
                  <div>
                    <img src={redcircle} alt="redcircle" />
                    Haven’t Started Yet
                  </div>
                </Stack>
                <Stack direction="column" className="smalltext2a1">
                  <div>
                    <img src={grey} alt="grey" />
                    Chapter A
                  </div>
                  <div>
                    <img src={darkgreen} alt="darkgreen" />
                    Chapter C
                  </div>
                </Stack>
              </Stack>
            </div>
          </div>
        </Stack>
        <div className="column2b">
          <Stack direction="column">
            <Stack
              direction="row"
              display="flex"
              justifyContent="space-between"
            >
              <div className="text2b">
                Last 14 Days Active Workers in Training
              </div>
              <div className="text2b1">Last 14 Days</div>
            </Stack>
            <Stack>
              <div className="barchart">
                <BarChart />
              </div>
            </Stack>
          </Stack>
        </div>
      </Stack>
    </>
  );
}

export default Column2;
