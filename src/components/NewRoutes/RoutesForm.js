import React, { useState } from "react";
import "./RoutesForm.css";

const RoutesForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredGrade, setEnteredGrade] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [titleIsValid, setTitleIsValid] = useState(true);
  const [gradeIsValid, setGradeIsValid] = useState(true);
  const [dateIsValid, setDateIsValid] = useState(true);

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const gradeChangeHandler = (e) => {
    setEnteredGrade(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // Validate title
    if (enteredTitle.trim().length === 0) {
      setTitleIsValid(false);
    } else {
      setTitleIsValid(true);
    }

    // Validate grade
    if (enteredGrade.trim().length === 0) {
      setGradeIsValid(false);
    } else {
      setGradeIsValid(true);
    }

    // Validate date
    if (enteredDate.trim().length === 0) {
      setDateIsValid(false);
    } else {
      setDateIsValid(true);
    }

    // Submit form if all fields are valid
    if (titleIsValid && gradeIsValid && dateIsValid) {
      const routeData = {
        title: enteredTitle,
        grade: enteredGrade,
        date: new Date(enteredDate),
      };
      props.onSaveNewRoute(routeData);
      setEnteredGrade("");
      setEnteredDate("");
      setEnteredTitle("");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-routes__controls">
        {/* adds the class invalid to the div element's class list when titleIsValid
        is false, which can be used for styling the input field to indicate to
        the user that the input is invalid */}
        <div className={`new-routes__control ${titleIsValid ? "" : "invalid"}`}>
          <label className="labels">Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
          {!titleIsValid && (
            <p className="error-text">Title must not be empty.</p>
          )}
        </div>
        <div className={`new-routes__control ${gradeIsValid ? "" : "invalid"}`}>
          <label className="labels">Grade</label>
          <input
            type="text"
            value={enteredGrade}
            onChange={gradeChangeHandler}
          />
          {!gradeIsValid && (
            <p className="error-text">Grade must not be empty.</p>
          )}
        </div>
        <div className={`new-routes__control ${dateIsValid ? "" : "invalid"}`}>
          <label className="labels">Date</label>
          <input
            type="date"
            min="2015-01-01"
            max="2050-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
          {!dateIsValid && (
            <p className="error-text">Date must not be empty.</p>
          )}
        </div>
        <div className="new-routes__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add route</button>
        </div>
      </div>
    </form>
  );
};

export default RoutesForm;
