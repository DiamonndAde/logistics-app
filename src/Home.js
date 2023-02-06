import React from "react";
import user from "./assets/images/users.png";
import rider from "./assets/images/rider.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="grid place-items-center w-full mt-5">
      <div className="flex flex-col justify-start items-center w-4/5">
        <h1 className="font-bold text-2xl tracking-widest text-orange-700">
          ARE YOU A SHIPPER OR A RIDER?
        </h1>
        <div className="w-full flex mt-5 h-1/2 overflow-hidden">
          <div className="w-1/2 relative group">
            <Link to="/shipper-signup">
              <img
                className="w-full h-full transition-all group-hover:scale-110 ease-out duration-500"
                src={user}
                alt="Shipper"
              />
              <div className="absolute h-full group-hover:bg-black/75 w-full top-0 left-0 text-7xl flex justify-center items-center">
                <h1 className="text-orange-700 invisible group-hover:visible transition-all group-hover:scale-110 ease-out duration-100">
                  SHIPPER
                </h1>
              </div>
            </Link>
          </div>
          <div className="w-1/2 relative group">
            <Link to="/rider-signup">
              <img
                className="w-full h-full transition-all group-hover:scale-110 ease-out duration-500"
                src={rider}
                alt="Rider"
              />
              <div className="absolute h-full group-hover:bg-black/75 w-full top-0 left-0 text-7xl flex justify-center items-center transition-all">
                <h1 className="text-orange-700 invisible group-hover:visible transition-all group-hover:scale-110 ease-out duration-100">
                  RIDER
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
