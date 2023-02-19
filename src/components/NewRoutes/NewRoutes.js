import React, { useState } from "react";
import "./NewRoutes.css";
import RoutesForm from "./RoutesForm";
const NewRoutes = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveNewRouteHandler = (enteredRouteData) => {
    const routeData = {
      ...enteredRouteData,
      id: Math.random().toString(),
    };
    props.onAddRoute(routeData);
    // this closes the editing window when user adds another route
    // setIsEditing(false)
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-routes">
      {!isEditing && <button onClick={startEditingHandler}>Add new route</button>}
      {isEditing && <RoutesForm onSaveNewRoute={saveNewRouteHandler} onCancel={stopEditingHandler}/>}
    </div>
  );
};
export default NewRoutes;
