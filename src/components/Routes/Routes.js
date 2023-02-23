import RouteItem from "../RouteDetails/RouteItem";
import "./Routes.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import RoutesFilter from "../RoutesFilter/RoutesFilter";

function Routes(props) {
  const [filteredYear, setFilteredYear] = useState("2023");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
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
        <RoutesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

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
