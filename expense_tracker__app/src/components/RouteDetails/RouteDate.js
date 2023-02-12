import "./RouteDate.css";
import React from "react";
function RouteDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="route-date">
      <div className="route-date__month">{month}</div>
      <div className="route-date__day">{day}</div>
      <div className="route-date__year">{year}</div>
    </div>
  );
}
export default RouteDate;
