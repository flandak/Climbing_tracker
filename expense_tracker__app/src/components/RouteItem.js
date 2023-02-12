import "./RouteItem.css";
import RouteDate from "./RouteDate";
import RouteStyle from "./RouteStyle";
import Card from "./Card";
function RouteItem(props) {
  return (
    <Card className="route-item">
      <RouteDate date={props.date} />
      <div className="route-item__description">
        <h2>{props.title}</h2>
        <RouteStyle style={props.style} />
        <div className="route-item__grade">{props.grade}</div>
      </div>
    </Card>
  );
}
export default RouteItem;
