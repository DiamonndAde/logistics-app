import React from "react";
import ElectricMopedOutlinedIcon from "@mui/icons-material/ElectricMopedOutlined";
import { orange } from "@mui/material/colors";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full flex py-3 px-16 justify-between">
      <div className="flex gap-10 items-center">
        <Link className="flex items-center gap-px" to="/">
          <ElectricMopedOutlinedIcon
            fontSize="large"
            sx={{ color: orange[700] }}
          />
          <button className="text-xl font-extrabold">Ship 'n Drive</button>
        </Link>
        <button className="font-bold hover:text-orange-500 transition-all ease-out duration-500">
          Services
        </button>
        <button className="font-bold hover:text-orange-500 transition-all ease-out duration-500">
          Tracking
        </button>
        <button className="font-bold hover:text-orange-500 transition-all ease-out duration-500">
          Locations
        </button>
      </div>
      <div className="flex gap-5 justify-end">
        <button className="text-black font-bold">
          <Link
            to="/login"
            className="hover:text-orange-500 transition-all ease-out duration-500"
          >
            Login
          </Link>
        </button>
        <button className="bg-black hover:bg-orange-500 transition-all ease-out duration-500 text-white rounded-md px-3 py-3">
          <Link to="/Home">Sign Up</Link>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
