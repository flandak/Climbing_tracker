import RouteItem from "./RouteItem";
import "./Routes.css";
function Routes(props) {
  return (
    <div className="expenses">
      <RouteItem
        title={props.items[0].title}
        date={props.items[0].date}
        grade={props.items[0].grade}
        style={props.items[0].style}
      />
      <RouteItem
        date={props.items[2].date}
        title={props.items[2].title}
        grade={props.items[2].grade}
        style={props.items[2].style}
      />
      <RouteItem
        date={props.items[1].date}
        title={props.items[1].title}
        grade={props.items[1].grade}
        style={props.items[1].style}
      />
    </div>
  );
}
export default Routes;