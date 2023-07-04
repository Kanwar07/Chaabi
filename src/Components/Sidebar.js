import React from "react";
import "./Sidebar.css";
import { Button, Stack } from "@mui/material";
import Chaabi from "./Assets/Chaabi.png";
import Dashboard from "./Assets/Dashboard.png";
import Training from "./Assets/Training.png";
import User from "./Assets/User.png";
import Common from "./Assets/Common.png";
function Sidebar() {
  return (
    <>
      <Stack direction="row">
        <div className="bar">
          <Stack direction="column">
            <Button className="chaabi">
              <img src={Chaabi} alt="Chaabi" />
            </Button>
            <div>
              <hr />
            </div>
            <div className="nav">
              <Button className="button">
                <img src={Dashboard} alt="Dashboard" />
                <span className="main">Dashboard</span>
              </Button>
              <Button className="button1">
                <img src={Training} alt="Training" />
                Trainings
              </Button>
              <Button className="button1">
                <img src={User} alt="User" />
                Users
              </Button>
              <Button className="button1">
                <img src={Common} alt="Common" />
                Analytics
              </Button>
              <Button className="button1">
                <img src={Common} alt="Common" />
                My Account
              </Button>
              <Button className="button1">
                <img src={Common} alt="Common" />
                Support
              </Button>
            </div>
          </Stack>
        </div>
      </Stack>
    </>
  );
}

export default Sidebar;
