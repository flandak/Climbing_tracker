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
  return (
    <div>
      <Card className="routes">
        <RoutesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((route) => (
          <RouteItem
            title={route.title}
            date={route.date}
            grade={route.grade}
          />
        ))}        
      </Card>
    </div>
  );
}
export default Routes;
