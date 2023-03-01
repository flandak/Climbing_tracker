import RouteList from "./RoutesList";
import "./Routes.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import RoutesFilter from "./RoutesFilter";
import RoutesChart from "./RoutesChart";

function Routes(props) {
  const [filteredYear, setFilteredYear] = useState("2023");
  // Function that handles filter changes
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredRoutes = props.items.filter((route) => {
    return route.date.getFullYear().toString() === filteredYear;
  });
  console.log(filteredRoutes);

  return (
    <div>
      <Card className="routes">
        <RoutesChart routes={filteredRoutes} />

        {/* this component allows user to filter routes by year */}
        <RoutesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <RouteList items={filteredRoutes} />
      </Card>
    </div>
  );
}
export default Routes;
