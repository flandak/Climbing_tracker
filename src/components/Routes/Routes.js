import RouteItem from "../RouteDetails/RouteItem";
import "./Routes.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import RoutesFilter from "../RoutesFilter/RoutesFilter";

function Routes(props) {
  const [filteredYear, setFilteredYear] = useState("2023");
  // Function that handles filter changes
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  // Generates an array of route components
  const routeItems = [];
  for (const route of props.items) {
    if (route.date.getFullYear().toString() === filteredYear) {
      routeItems.push(
        <li>
          <RouteItem
            key={route.id}
            title={route.title}
            date={route.date}
            grade={route.grade}
          />
        </li>
      );
    }
  }

  return (
    <div>
      <Card className="routes">
        {/* this component allows user to filter routes by year */}
        <RoutesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* Check if there are items in the routeItems array */}
        <ul className="routes-list">
          {routeItems.length > 0 ? (
            routeItems
          ) : (
            <h4 className="routes-list__noRoutesMsg">
              - - - No routes found for the selected year - - -
            </h4>
          )}
        </ul>
      </Card>
    </div>
  );
}
export default Routes;
