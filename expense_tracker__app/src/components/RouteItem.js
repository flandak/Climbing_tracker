import "./RouteItem.css";
import RouteDate from "./RouteDate";
import RouteStyle from "./RouteStyle";
function RouteItem(props) {
  return (
    <div className="route-item">
      <RouteDate date={props.date} />
      <div className="route-item__description">
        <h2>{props.title}</h2>
        <RouteStyle style={props.style} />
        <div className="route-item__grade">{props.grade}</div>
      </div>
    </div>
  );
}
export default RouteItem;
