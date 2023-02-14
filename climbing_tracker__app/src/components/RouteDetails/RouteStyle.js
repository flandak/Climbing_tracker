import React from "react";
import "./RouteStyle.css";
function RouteStyle(props) {
  return (
    <div className="route-style">
      <h2>{props.style}</h2>
    </div>
  );
}
export default RouteStyle;
