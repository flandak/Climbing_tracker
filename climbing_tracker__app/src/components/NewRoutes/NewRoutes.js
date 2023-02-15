import React from "react";
import "./NewRoutes.css";
import RoutesForm from "./RoutesForm"
const NewRoutes = (props) => {
  const saveNewRouteHandler = (enteredRouteData) =>{
    const routeData = {
      ...enteredRouteData,
      id: Math.random().toString()
    }
   props.onAddRoute(routeData)
  }
  return (
    <div className="new-routes">
      <RoutesForm onSaveNewRoute={saveNewRouteHandler} />
    </div>
  );
};
export default NewRoutes;
