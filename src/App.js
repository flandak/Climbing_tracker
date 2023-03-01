import Routes from "./components/Routes/Routes";
import React, { useState } from "react";
import NewRoutes from "./components/NewRoutes/NewRoutes";
const sampleRoutes = [
  {
    id: "01",
    date: new Date(2020, 2, 11),
    title: "silence",
    grade: "9c",
  },
  {
    id: "02",
    date: new Date(2023, 1, 11),
    title: "action directe",
    grade: "9a",
  },
  {
    id: "04",
    date: new Date(2023,7, 24),
    title: "Hubble",
    grade: "8C+",
  },
  {
    id: "03",
    date: new Date(2021, 2, 11),
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
