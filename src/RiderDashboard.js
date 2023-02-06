import React, { useEffect, useState } from 'react';
import { styles } from './constants/styles';

const RiderDashboard = () => {
    const [activeComponent, setActiveComponent] = useState([]);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [storeName, setStoreName] = useState("");
    const [storeLogo, setStoreLogo] = useState("");

    function showActiveComponent(e, comp) {
        e.stopPropagation();
        setActiveComponent([comp]);
    }

    function handleClick() {
        setIsNavOpen((prev) => !prev);
    }

    function handleLogOut() {
        // async function logUserOut() {
        //   const res = await userLogout();
        //   console.log(res);
        //   if (res) {
        //     userLoggedOut();
        //     onUserLogOut();
        //     navigate("/");
        //   }
        // }
        // logUserOut();
    }
        
    return (
        <div className="w-full overflow-hidden">
            <div className="w-full flex">
                {/* {Sidebar} */}
                <div
                className={`w-full lg:w-1/5 shrink-0 overflow-hidden left-0 top-0 h-screen border-r border-brand-gray-300 ${
                    isNavOpen ? "-translate-x-[0]" : "-translate-x-[100%]"
                } lg:-translate-x-[0] z-10 bg-white transition-transform duration-500 overflow-y-scroll`}
                >
                    <div className="border-b flex items-center justify-between p-4 mb-[10px]">
                        <h1 className="font-bold text-[16px] ">{storeName}</h1>
                        {/* <img src={storeLogo} alt="Profile Image" className={storeLogo === "" ? "w-[32px]" : "w-[40px] h-[40px] rounded-full"} /> */}
                    </div>
                    <div
                        className={`${styles.dbNavItem}`}
                        // onClick={(e) => showActiveComponent(e, <MyStore />)}
                    >
                        {/* <DbIcon src={store} /> */}
                        <h2>Overview</h2>
                    </div>
                    <div
                        className={`${styles.dbNavItem}`}
                        // onClick={(e) => showActiveComponent(e, <MyOrders />)}
                    >
                        {/* <DbIcon src={orders} /> */}
                        <h2>Notifications</h2>
                    </div>
                    <div
                        className={`${styles.dbNavItem}`}
                        // onClick={(e) => showActiveComponent(e, <MyCustomers />)}
                    >
                        {/* <DbIcon src={customers} /> */}
                        <h2>Messages</h2>
                    </div>
                    <div
                        className={`${styles.dbNavItem}`}
                        // onClick={(e) => showActiveComponent(e, <Finances />)}
                    >
                        {/* <DbIcon src={finances} /> */}
                        <h2>Journey Planner</h2>
                    </div>
                    <div
                        className={`${styles.dbNavItem}`}
                        // onClick={(e) => showActiveComponent(e, <StoreReviews />)}
                    >
                        {/* <DbIcon src={review} /> */}
                        <h2>My Journeys</h2>
                    </div>
                    <div className="border-b border-t p-4 mb-[10px]">
                        <h1 className="font-bold text-[16px] text-brand-gray">Account</h1>
                    </div>
                    <div
                        className={`${styles.dbNavItem}`}
                        // onClick={(e) => showActiveComponent(e, <UserAccount />)}
                    >
                        {/* <DbIcon src={user_account} /> */}
                        <h2>View Account</h2>
                    </div>
                    <div
                        className={`${styles.dbNavItem}`}
                        // onClick={(e) => showActiveComponent(e, <UserAccount />)}
                    >
                        {/* <DbIcon src={user_account} /> */}
                        <h2>Edit Account</h2>
                    </div>
                    <div
                        className={`${styles.dbNavItem}`}
                        // onClick={(e) => showActiveComponent(e, <UserAccount />)}
                    >
                        {/* <DbIcon src={user_account} /> */}
                        <h2>Sign Out</h2>
                    </div>
                </div>
                <div className="lg:w-4/5 w-full shrink-0 bg-brand-gray-200 min-h-screen p-[24px] lg:px-10 lg:py-5 top-0 right-0">
                    <div>{activeComponent[0]}</div>
                    {/* <p>This is it.</p> */}
                </div>
            </div>
        </div>
    )
}

export default RiderDashboard;