import React from "react";
import Sidebar from "../../Components/Sidebar/sidebar";
import { Chart } from "react-google-charts";
import { GiHamburgerMenu } from "react-icons/gi";

export default function HomePage() {
  const data = [
    ["Year", "Sales", "Expenses"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
  ];

  const options = {
    title: "Company Performance",
    titleTextStyle: {
      color: "#FFFFFF",
    },
    chartArea: { width: "80%", height: "80%" },
    backgroundColor: "transparent",
    hAxis: {
      title: "Year",
      textStyle: { color: "#FFFFFF" },
      titleTextStyle: { color: "#FFFFFF" },
    },
    vAxis: {
      minValue: 0,
      textStyle: { color: "#FFFFFF" },
      titleTextStyle: { color: "#FFFFFF" },
    },
    legend: {
      textStyle: { color: "#FFFFFF" },
    },
  };

  return (
    <div className="h-screen">
      {/* Side Nav Bar */}
      <Sidebar />

      <div className="flex items-center justify-between mt-5 lg:ml-[350px] mr-10 sm: ml-[20px]">
        <div className="flex items-center gap-5">
          <div className="flex">
            <label htmlFor="sidebar-mobile-fixed" className="sm:hidden">
              <GiHamburgerMenu size={25}/>
            </label>
          </div>
          <p className="text-[24px] font-bold">Analytics</p>
        </div>
        <input class="input input-solid sm: w-[50%]" placeholder="Primary" />
      </div>

      <div className="mt-10 sm: ml-[20px] sm: mr-5 lg:ml-[350px] lg:mr-10">
        <div className="grid sm: grid-cols-2 sm: grid-rows-3 sm: gap-5 lg:grid-cols-3 lg:grid-rows-2 lg:gap-10">
          <div class="card">
            <div class="card-body">
              <p className="font-bold text-[15px]">Users</p>
              <p className="ml-auto font-bold text-[30px]">140</p>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <p className="font-bold text-[15px]">Referral Users</p>
              <p className="ml-auto font-bold text-[30px]">140</p>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <p className="font-bold text-[15px]">Today's Organic Users</p>
              <p className="ml-auto font-bold text-[30px]">140</p>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <p className="font-bold text-[15px]">The Week Users</p>
              <p className="ml-auto font-bold text-[30px]">140</p>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <p className="font-bold text-[15px]">This Month Users</p>
              <p className="ml-auto font-bold text-[30px]">140</p>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <p className="font-bold text-[15px]">Last Month Users</p>
              <p className="ml-auto font-bold text-[30px]">140</p>
            </div>
          </div>
        </div>

        {/* Graph */}
        <Chart
          chartType="AreaChart"
          width="100%"
          height="450px"
          data={data}
          options={options}
          className="mt-20"
        />
      </div>
    </div>
  );
}
