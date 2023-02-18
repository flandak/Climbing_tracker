import Routes from "./components/Routes/Routes";
import React, {useState} from "react";
import NewRoutes from "./components/NewRoutes/NewRoutes";
const sampleRoutes = [
  {
    date: new Date(2020, 2, 11),
    title: "silence",
    grade: "9c",    
  },
  {
    date: new Date(2023, 2, 11),
    title: "perfecto mundo",
    grade: "9b+",   
  },
  {
    date: new Date(2021, 2, 11),
    title: "off the wagon",
    grade: "8c+",    
  },
];
function App() {
  const [routes, setRoutes] = useState(sampleRoutes)
  const addRouteHandler = route =>{
   setRoutes((prevRoutes) => {
    return [route, ...prevRoutes];
   })
  }
  return ( 
    <div>
      <NewRoutes onAddRoute={addRouteHandler}/>
      <Routes items={routes}/>;
    </div>
  );
}

export default App;
