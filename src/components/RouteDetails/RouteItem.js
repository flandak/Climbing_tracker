import "./RouteItem.css"; // Import RouteItem css
import RouteDate from "./RouteDate"; // Import RouteDate component
import Card from "../UI/Card"; //Import UI card

/* RouteItem functional component
 * props are passed in.
 */
function RouteItem(props) {
  return (
    <Card className="route-item">
      {/* Set route date using RouteDate component*/}
      <RouteDate date={props.date} />

      {/*Set route details */}
      <div className="route-item__description">
        <h2>{props.title}</h2> {/*Set route name*/}
        <div className="route-item__grade">{props.grade}</div>{" "}
        {/*Set route grade*/}
      </div>
    </Card>
  );
}
export default RouteItem; // Export the RouteItem component
