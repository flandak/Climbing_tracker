import React from "react";
import Chart from "../Chart/Chart";

const RoutesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
const monthSums = Array(12).fill(0); // initialize array with 12 zeros for each month

  for (const route of props.routes) {
    const routeMonth = route.date.getMonth(); // starting at 0 => January => 0
    monthSums[routeMonth] += 1;
  }

  // update chartDataPoints with month sums
  for (let i = 0; i < chartDataPoints.length; i++) {
    chartDataPoints[i].value = monthSums[i];
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default RoutesChart;
