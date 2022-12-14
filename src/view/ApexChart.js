import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
// import { ApexOptions } from "apexcharts";

export const BarChart = () => {

  const [chartOpt, setChartOpt] = useState({
    options: {
      chart: {
        animations: {
          enabled: false
        },
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  })

  return (
    <ReactApexChart
      options={chartOpt.options}
      series={chartOpt.series}
      type="bar"
      width="500"
    />
  )
}