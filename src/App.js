import React from "react";
import {DeliveryGuy, Flash} from "./assets";
import NavBar from "./NavBar";

function App() {

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <>
      <NavBar/>
      <div className="w-full flex-col-reverse justify-between 2xl:flex h-auto px-16 py-6">
          <div className="w-1/2">
            <div className="w-1/2 font-extrabold text-black text-4xl">
                Your <img src={Flash} className="w-6 inline h-6"/> lightning-fast delivery partner.
            </div>

            <p className="text-base opacity-60 text-black my-10">
              Ship n' drive is a logistics company providing package delivery, courier, and express mail service.
              We help business owners to send packages, letters, mails, documents, parcels, etc. to their desired location.
            </p>

            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Enter pickup Location" disabled className="my-2 rounded border border-slate-300 px-3 w-3/4 py-3 focus:border-orange-500 focus:outline-none focus:ring-orange-500"/>
              <input type="text" placeholder="Enter destination" disabled className="my-2 rounded border border-slate-300 px-3 w-3/4 py-3 focus:border-orange-500 focus:outline-none focus:ring-orange-500"/>
              <button 
                type="submit"
                className="text-white w-3/4 bg-orange-500 mt-3 rounded py-3 h-auto transition-all duration-500 hover:border hover:border-orange-500 hover:text-black hover:bg-white">Request Pickup</button>
                <p 
                  className="text-sm opacity-50">
                    Send anywhere. Ocean freight, road, air available.
                </p>
            </form>
          </div>

          <img src={DeliveryGuy} className="w-1/2 h-full"/>
      </div>
    </>
  );
}

export default App;
