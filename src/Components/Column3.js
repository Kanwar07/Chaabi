import { Stack } from "@mui/material";
import "./Column3.css";
import arrowUp from "./Assets/arrowUp.png";
import circle from "./Assets/circle.png";
import DonutChart from "./DonutChart";
import BarChart1 from "./BarChart1";
import greencircle from "./Assets/greencircle.png";
import redcircle from "./Assets/redcircle.png";

function Column3() {
  return (
    <>
      <Stack direction="row">
        <div className="column3a">
          <Stack direction="column">
            <div className="text3a">Monthly Training Activity</div>
            <div>
              <Stack direction="row" className="smalltext3a1">
                <div>
                  <img src={arrowUp} alt="arrowUp" />
                </div>
                <div className="smalltext3a">16% more enrollees this month</div>
              </Stack>
            </div>
            <div>
              <Stack direction="column" className="text3a1">
                <div className="text3b">
                  <img src={circle} alt="circle" />
                  Course a
                </div>
                <div className="smalltext3b">
                  23 Workers Took This Course This Week
                </div>
              </Stack>
            </div>
            <div>
              <Stack direction="column" className="text3a1">
                <div className="text3b">
                  <img src={circle} alt="circle" />
                  Course b
                </div>
                <div className="smalltext3b">
                  253 Workers Took This Course This Week
                </div>
              </Stack>
            </div>
            <div>
              <Stack direction="column" className="text3a1">
                <div className="text3b">
                  <img src={circle} alt="circle" />
                  Course a
                </div>
                <div className="smalltext3b">
                  253 Workers Took This Course This Week
                </div>
              </Stack>
            </div>
            <div>
              <Stack direction="column" className="text3a1">
                <div className="text3b">
                  <img src={circle} alt="circle" />
                  Course a
                </div>
                <div className="smalltext3b">
                  253 Workers Took This Course This Week
                </div>
              </Stack>
            </div>
          </Stack>
        </div>
        <div className="column3b">
          <Stack direction="column">
            <div className="text3c">Quiz Passing %</div>
            <Stack direction="row">
              <DonutChart />
              <Stack direction="column">
                <div className="passed">
                  <img
                    className="greencircle"
                    src={greencircle}
                    alt="greencircle"
                  />
                  <div className="smalltext3c">
                    passed <br />
                    1423 workers
                  </div>
                </div>
                <div className="failed">
                  <img className="redcircle" src={redcircle} alt="redcircle" />
                  <div className="smalltext3c">
                    failed <br /> 134 workers
                  </div>
                </div>
              </Stack>
            </Stack>
          </Stack>
        </div>
        <div className="column3c">
          <Stack direction="column">
            <Stack
              direction="row"
              display="flex"
              justifyContent="space-between"
            >
              <div className="text3c">Daily Training Completions</div>
              <div className="text3c1">Last 14 Days</div>
            </Stack>
            <Stack>
              <div className="barchart1">
                <BarChart1 />
              </div>
            </Stack>
          </Stack>
        </div>
      </Stack>
    </>
  );
}

export default Column3;
