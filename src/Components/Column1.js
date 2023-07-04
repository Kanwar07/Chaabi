import { Stack } from "@mui/material";
import Green from "./Assets/Green.png";
import Red from "./Assets/Red.png";
import "./Column1.css";
import trendUp from "./Assets/trendUp.png";
import trendDown from "./Assets/trendDown.png";

function Column1() {
  return (
    <>
      <Stack direction="row">
        <div className="column1a">
          <Stack direction="column">
            <div className="text1a">In Training Workers</div>
            <Stack className="layout" direction="row">
              <Stack ml={2} mr={10} mt={4} direction="column">
                <div className="number">3,354</div>
                <div className="smalltext">
                  <div className="green" mr={4}>
                    <img src={trendUp} alt="trendUp" />
                    <span>20%</span>
                  </div>
                  <div>234</div>
                </div>
              </Stack>
              <Stack mt={1} direction="column">
                <img className="img" src={Green} alt="Green" />
                <div className="days">
                  <span>M</span>
                  <span>T</span>
                  <span>W</span>
                  <span>T</span>
                  <span>F</span>
                  <span>S</span>
                  <span>S</span>
                </div>
              </Stack>
            </Stack>
          </Stack>
        </div>
        <div className="column1b">
          <Stack direction="column">
            <div className="text1b">Video Watch-Time (Hrs)</div>
            <Stack className="layout" direction="row">
              <Stack ml={2} mr={10} mt={4} direction="column">
                <div className="number">2,433</div>
                <div className="smalltext">
                  <div className="red" mr={4}>
                    <img src={trendDown} alt="trendDown" />
                    <span>20%</span>
                  </div>
                  <div>435</div>
                </div>
              </Stack>
              <Stack mt={1} direction="column">
                <img className="img" src={Red} alt="Red" />
                <div className="days">
                  <span>M</span>
                  <span>T</span>
                  <span>W</span>
                  <span>T</span>
                  <span>F</span>
                  <span>S</span>
                  <span>S</span>
                </div>
              </Stack>
            </Stack>
          </Stack>
        </div>
        <div className="column1c">
          <Stack direction="column">
            <div className="text1c">% Workers Passing Quiz</div>
            <Stack className="layout" direction="row">
              <Stack ml={2} mr={10} mt={4} direction="column">
                <div className="number">95%</div>
                <div className="smalltext">
                  <div className="green" mr={4}>
                    <img src={trendUp} alt="trendUp" />
                    <span>20%</span>
                  </div>
                  <div>24%</div>
                </div>
              </Stack>
              <Stack mt={1} direction="column">
                <img className="img" src={Green} alt="Green" />
                <div className="days">
                  <span>M</span>
                  <span>T</span>
                  <span>W</span>
                  <span>T</span>
                  <span>F</span>
                  <span>S</span>
                  <span>S</span>
                </div>
              </Stack>
            </Stack>
          </Stack>
        </div>
        <div className="column1d">
          <Stack direction="column">
            <div className="text1d">Avg. Days Taken</div>
            <Stack className="layout" direction="row">
              <Stack ml={2} mr={10} mt={4} direction="column">
                <div className="number">6</div>
                <div className="smalltext">
                  <div className="green" mr={4}>
                    <img src={trendUp} alt="trendUp" />
                    <span>20%</span>
                  </div>
                  <div>3</div>
                </div>
              </Stack>
              <Stack mt={1} direction="column">
                <img className="img" src={Green} alt="Green" />
                <div className="days">
                  <span>M</span>
                  <span>T</span>
                  <span>W</span>
                  <span>T</span>
                  <span>F</span>
                  <span>S</span>
                  <span>S</span>
                </div>
              </Stack>
            </Stack>
          </Stack>
        </div>
      </Stack>
    </>
  );
}

export default Column1;
