import React from "react";
import ElectricMopedOutlinedIcon from "@mui/icons-material/ElectricMopedOutlined";
import { orange } from "@mui/material/colors";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full flex p-5">
      <div className="flex gap-10 items-center w-2/3">
        <Link className="flex items-center gap-px" to="/">
          <ElectricMopedOutlinedIcon
            fontSize="large"
            sx={{ color: orange[700] }}
          />
          <button className="text-xl font-extrabold">Ship 'n Drive</button>
        </Link>
        <button className="font-bold">Services</button>
        <button className="font-bold">Trackings</button>
        <button className="font-bold">Locations</button>
      </div>
      <div className="flex w-1/3 gap-5 justify-center">
        <button className="text-black font-bold">
          <Link to="/login">Login</Link>
        </button>
        <button className="bg-black hover:bg-orange-500 transition-all ease-out duration-500 text-white rounded-md px-2">
          <Link to="/">Sign Up</Link>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
