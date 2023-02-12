import RouteItem from "./components/RouteItem";

function App() {
  const routes = [
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
  return (
    <div>
      <RouteItem date={routes[1].date} title={routes[1].title} grade={routes[1].grade}></RouteItem>
      <RouteItem date={routes[0].date} title={routes[0].title} grade={routes[0].grade}></RouteItem>
      <RouteItem date={routes[2].date} title={routes[2].title} grade={routes[2].grade}></RouteItem>
      
    </div>
  );
}

export default App;
