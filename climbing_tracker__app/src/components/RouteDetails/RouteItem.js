import "./RouteItem.css";
import RouteDate from "./RouteDate";
import RouteStyle from "./RouteStyle";
import Card from "../UI/Card";
import React, { useState } from "react";

function RouteItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("updated");
    console.log(title);
  };
  return (
    <Card className="route-item">
      <RouteDate date={props.date} />
      <div className="route-item__description">
        <h2>{title}</h2>
        <RouteStyle style={props.style} />
        <div className="route-item__grade">{props.grade}</div>
      </div>
      <button onClick={clickHandler}>change title</button>
    </Card>
  );
}
export default RouteItem;
