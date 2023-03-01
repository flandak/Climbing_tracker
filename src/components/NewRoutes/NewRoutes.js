import React, { useState } from "react";
import "./NewRoutes.css";
import RoutesForm from "./RoutesForm";
const NewRoutes = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  //callback function for when data is submitted from the form component
  const saveNewRouteHandler = (enteredRouteData) => {
    const routeData = {
      ...enteredRouteData,
      id: Math.random().toString(),
    };
    props.onAddRoute(routeData);
    setIsEditing(false);
  };
  //function that sets the editing state to true which displays the form
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  //function that sets the editing state back to false which hides the form
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-routes">
      {/* Shows a button when the isEditing state variable is false.
      The button triggers the startEditingHandler function when clicked, which
      sets the isEditing state variable to true */}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add new route</button>
      )}
      {isEditing && (
        <RoutesForm
          onSaveNewRoute={saveNewRouteHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewRoutes;
