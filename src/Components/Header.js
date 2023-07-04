import { Stack } from "@mui/material";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="head">
        <Stack direction="column">
          <div className="parent">
            <div className="Heading">Hello, Puneet Dhiman</div>
            <div className="para">
              Following is Your Organization’s Performance Summary
            </div>
          </div>
        </Stack>
      </div>
    </>
  );
}

export default Header;
