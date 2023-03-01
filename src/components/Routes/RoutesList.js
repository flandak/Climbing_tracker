import React from "react";
import RouteItem from "./RouteItem";
import "./RoutesList.css";

const RoutesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="routes-list__fallback">Found no routes.</h2>;
  }

  return (
    <ul className="routes-list">
      {props.items.map((route) => (
        <RouteItem
          key={route.id}
          title={route.title}
          grade={route.grade}
          date={route.date}
        />
      ))}
    </ul>
  );
};

export default RoutesList;
