import React from "react";
import { Stack } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Column1 from "./Column1";
import Column2 from "./Column2";
import Column3 from "./Column3";

function MainPage() {
  return (
    <>
      <Stack direction="row">
        <Sidebar />
        <Stack direction="column">
          <div>
            <Header />
          </div>
          <div>
            <Column1 />
          </div>
          <div>
            <Column2 />
          </div>
          <div>
            <Column3 />
          </div>
        </Stack>
      </Stack>
    </>
  );
}

export default MainPage;
