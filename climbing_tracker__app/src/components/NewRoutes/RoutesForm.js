import React, { useState } from "react";
import "./RoutesForm.css";

const RoutesForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredGrade, setEnteredGrade] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const gradeChangeHandler = (e) => {
    setEnteredGrade(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  return (
    <form>
      <div className="new-routes__controls">
        <div className="new-routes__control">
          <label className="labels">Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-routes__control">
          <label className="labels">Grade</label>
          <input type="number" min="5" step="1" onChange={gradeChangeHandler} />
        </div>
        <div className="new-routes__control">
          <label className="labels">Date</label>
          <input type="date" min="2015-01-01" max="2050-12-31" onChange={dateChangeHandler}/>
        </div>
        <div className="new-routes__actions">
          <button>Add route</button>
        </div>
      </div>
    </form>
  );
};

export default RoutesForm;