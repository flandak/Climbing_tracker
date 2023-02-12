import "./RouteItem.css";
function RouteItem(props) {
    const month = props.date.toLocaleString('en-US', {month:'long'});
    const day = props.date.toLocaleString('en-US', {day:'2-digit'});
    const year = props.date.getFullYear();
  return (
    <div className="route-item">
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div>{props.date.toISOString()}</div>
      <div className="route-item__description">
        <h2>{props.title}</h2>
        <div className="route-item__grade">{props.grade}</div>
      </div>
    </div>
  );
}
export default RouteItem;
