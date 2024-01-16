import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { data } from "constant"; // Assuming 'constants' is the correct path
import { Icon } from "components";
import Chart from "react-apexcharts";
import { getActiveFIRS, getClosedFIRS, getCompletedFIRS, getPendingFIRS } from "features";
import { Link } from "react-router-dom";

export const Admin = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const firState = useSelector((state) => state.fir);

  const pendingFIRs = firState.pendingFir.length;
  const activeFIRs = firState.activeFir.length;
  const completedFIRs = firState.completedFir.length;
  const closedFIRs = firState.closedFir.length;

  
  const [donutState, setDonutState] = useState();
 
  useEffect(()=>{
    dispatch(getPendingFIRS());
    dispatch(getActiveFIRS());
    dispatch(getCompletedFIRS());
    dispatch(getClosedFIRS());

    setDonutState({
      options: {
        series: [activeFIRs, completedFIRs, closedFIRs, pendingFIRs],
        labels: ["Active", "Completed", "Closed", "Pending"],
      },
      series: [activeFIRs, completedFIRs, closedFIRs, pendingFIRs],
      chartOptions: {
        labels: ["Active", "Completed", "Closed", "Pending"],
      },
    });
  
  },[pendingFIRs, activeFIRs, completedFIRs, pendingFIRs])

  

  

  const [barState, setBarState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
      },
      title: {
        text: "Monthwise Completed FIRs",
      },
    },
    series: [
      {
        name: "Completed FIRs",
        data: [6, 4, 9, 10, 7, 6, 7, 9, 11, 0, 0, 0],
      },
    ],
  });

  let characters = document.querySelectorAll(".char");

  for (let i = 0; i < characters.length; i++) {
    characters[i].classList.add("translate-y-full");
  }
  gsap.to(".char", { y: 0, stagger: 0.05, delay: 0.02, duration: 0.5 });

  return (
    <div className=" xl:flex-1 xl:overflow-y-auto xl:ml-52 xs:ml-0 lg:flex-1 lg:overflow-y-auto lg:ml-52 md:flex-1 md:overflow-y-auto md:ml-52 sm:flex-1 sm:overflow-y-auto sm:ml-52">
    <div
      className={`mt-0 flex flex-col sm:flex-row justify-between items-center `}
    >
      <h1 className=" xl:ml-20 sm:ml-0 max-w-sm text-4xl top-0 font-bold font-custom text-center justify-center  bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500 ">
          Admin Dashobard
        </h1>

        <div className="flex justify-self-auto mt-2 xl:mr-8 sm:mr-0 sm:mt-0">
          <p className=" font-custom-blue font-semibold font-custom  ">
          <Link to="/faqs">FAQ</Link> | <Link to="/contactus">Contact Us</Link>
          </p>

          <h1 className=" max-w-sm ml-20 mr-1 text-xl font-bold font-custom text-center justify-center  bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500  mx-auto ">
            {user?.name}
          </h1>
          <div className="mt-1">
            <Icon src="/icons/account.png" />
          </div>
        </div>
      </div>
      <hr className="h-2 mt-4 -ml-5 bg-custom-blue"></hr>
      <h1 className=" bg-gray-100 hover:text-white mt-2 mb-2 px-2 hover:bg-black p-3 py-6 rounded-2xl xl:ml-4 xl:mr-4 sm:ml-0 sm:mr-0 text-sm sm:text-sm md:text-sm lg:text-sm font-bold font-custom text-center transform scale-100 hover:scale-95 transition-transform duration-300 ease-in-out">
              Hey {user?.name}, Welcome to your dasboard, In this Dashboard you can do
        all the operations, which an SHO level officer can perform. You can
        visualize the FIRs through graphs on this dashboard and much more.
      </h1>


      <div className="flex flex-col md:flex-row ">
        
      <div className="mx-3 my-4 h-48 sm:mx-4 sm:my-2 md:mx-6 md:my-2 lg:mx-8 lg:my-2 xl:mx-2 xl:my-2" style={{ flex: '1 1 calc(50% - 1rem)', zIndex: 998 }}>
      <div className="mb-5 block max-w-xs p-4 border text-black border-gray-200 rounded-lg shadow-md bg-red-500  hover:text-white transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">  
      <div className="flex">
        <h1 className="font-custome font-bold text-3xl mt-2 ml-4 text-white">
          Pending <br></br>Cases{" "}
        </h1>
    <div className="w-10 h-10 rounded-full bg-white mt-2 ml-24 flex items-center justify-center">
      <Icon src="./icons/pending.png" />
    </div>
  </div>
  <div className="flex">
    <h3 className="mt-16 ml-4 font-bold text-white text-4xl">{pendingFIRs}</h3>
    <Link to="/pendingFIRs" className="mt-20 ml-36 font-semibold text-white text-sm">
      View All
    </Link>
  </div>
</div>
</div>

<div className="mx-3 my-4 h-48 sm:mx-4 sm:my-2 md:mx-6 md:my-2 lg:mx-8 lg:my-2 xl:mx-2 xl:my-2" style={{ flex: '1 1 calc(50% - 1rem)', zIndex: 998 }}>
      <div className="mb-5 block max-w-xs p-4 border text-black border-gray-200 rounded-lg shadow-md bg-blue-500  hover:text-white transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">  
      <div className="flex">
        <h1 className="font-custome font-bold text-3xl mt-2 ml-4 text-white">
          Active <br></br>Cases{" "}
        </h1>
    <div className="w-10 h-10 rounded-full bg-white mt-2 ml-28 flex items-center justify-center">
      <Icon src="./icons/active.jpg" />
    </div>
  </div>
  <div className="flex">
    <h3 className="mt-16 ml-4 font-bold text-white text-4xl">{activeFIRs}</h3>
    <Link to="/activeFIRs" className="mt-20 ml-36 font-semibold text-white text-sm">
      View All
    </Link>
  </div>
</div>
</div>

<div className="mx-3 my-4 h-48 sm:mx-4 sm:my-2 md:mx-6 md:my-2 lg:mx-8 lg:my-2 xl:mx-2 xl:my-2" style={{ flex: '1 1 calc(50% - 1rem)', zIndex: 998 }}>
      <div className="mb-5 block max-w-xs p-4 border text-black border-gray-200 rounded-lg shadow-md bg-green-500  hover:text-white transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">  
      <div className="flex">
        <h1 className="font-custome font-bold text-3xl mt-2 ml-4 text-white">
          Completed <br></br>Cases{" "}
        </h1>
    <div className="w-10 h-10 rounded-full bg-white mt-2 ml-14 flex items-center justify-center">
      <Icon src="./icons/completed.png" />
    </div>
  </div>
  <div className="flex">
    <h3 className="mt-16 ml-4 font-bold text-white text-4xl">{completedFIRs}</h3>
    <Link to="/completedFIRs" className="mt-20 ml-36 font-semibold text-white text-sm">
      View All
    </Link>
  </div>
</div>
</div>
     
<div className="mx-3 my-4 h-48 sm:mx-4 sm:my-2 md:mx-6 md:my-2 lg:mx-8 lg:my-2 xl:mx-2 xl:my-2" style={{ flex: '1 1 calc(50% - 1rem)', zIndex: 998 }}>
      <div className="mb-5 block max-w-xs p-4 border text-black border-gray-200 rounded-lg shadow-md bg-yellow-500  hover:text-white transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">  
      <div className="flex">
        <h1 className="font-custome font-bold text-3xl mt-2 ml-4 text-white">
          Closed <br></br>Cases{" "}
        </h1>
    <div className="w-10 h-10 rounded-full bg-white mt-2 ml-28 flex items-center justify-center">
      <Icon src="./icons/cross.png" />
    </div>
  </div>
  <div className="flex">
    <h3 className="mt-16 ml-4 font-bold text-white text-4xl">{closedFIRs}</h3>
    <Link to="/closedFIRs" className="mt-20 ml-36 font-semibold text-white text-sm">
      View All
    </Link>
  </div>
</div>
</div>
</div>
     
        <div className="flex  flex-col sm:flex-row mt-5">
    {donutState && (
      <div className="sm:mb-20 sm:mr-2 mb-10 xl:ml-40 mt-2 h-80 shadow-2xl">
          <div className="col-4 xl:py-5 xl:px-5">
            <Chart
              options={donutState.options}
              series={donutState.series}
              type="donut"
              width="420"
            />
          </div>
        </div>
      )}
    <div className="sm:mb-20 sm:mr-2 mb-20 xl:mr-10 xl:ml-10 mt-2  h-80 shadow-2xl">
          <div className="col-4 py-8 px-5">
            <Chart
              options={barState.options}
              series={barState.series}
              type="bar"
              width="420"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
