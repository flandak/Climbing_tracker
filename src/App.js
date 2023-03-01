import Routes from "./components/Routes/Routes";
import React, { useState } from "react";
import NewRoutes from "./components/NewRoutes/NewRoutes";
const sampleRoutes = [
  {
    id: "0.1",
    date: new Date(2020, 7, 11),
    title: "silence",
    grade: "9c",
  },
  {
    id: "0.2",
    date: new Date(2023, 2, 11),
    title: "action directe",
    grade: "9a",
  },
  {
    id: "0.3",
    date: new Date(2023, 1, 11),
    title: "action directe",
    grade: "9a",
  },
  {
    id: "0.4",
    date: new Date(2021, 5, 11),
    title: "off the wagon",
    grade: "8c+",
  },
];

function App() {
  const [routes, setRoutes] = useState(sampleRoutes);
  const addRouteHandler = (route) => {
    setRoutes((prevRoutes) => {
      return [route, ...prevRoutes];
    });
  };
  return (
    <div>
      <NewRoutes onAddRoute={addRouteHandler} />
      <Routes items={routes} />;
    </div>
  );
}

export default App;
