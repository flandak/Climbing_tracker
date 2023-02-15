import Routes from "./components/Routes";
import React from "react";
import NewRoutes from "./components/NewRoutes/NewRoutes";
function App() {
  const routes = [
    {
      date: new Date(2020, 2, 11),
      title: "silence",
      grade: "9c",
      style: "weird",
    },
    {
      date: new Date(2023, 2, 11),
      title: "perfecto mundo",
      grade: "9b+",
      style: "dynamic",
    },
    {
      date: new Date(2021, 2, 11),
      title: "off the wagon",
      grade: "8c+",
      style: "powerful",
    },
  ];
  const addRouteHandler = route =>{
    console.log('in app.js');
    console.log(route);
  }
  return (
    <div>
      <NewRoutes onAddRoute={addRouteHandler}/>
      <Routes items={routes}/>;
    </div>
  );
}

export default App;
