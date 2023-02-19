import React from "react";
import "./RoutesFilter.css";

const RoutesFilter = (props) => {
  const handleYearChange = (e) => {
    props.onChangeFilter(e.target.value);
  };
  return (
    <div className="routes-filter">
      <div className="routes-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={handleYearChange}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default RoutesFilter;
