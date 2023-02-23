import "./Card.css"; 

// This component is used to wrap other elements in a card template
function Card(props) {
  // Concatenates classes for styling 
  const classes = 'card ' + props.className;

  // Returns the card with children elements that were passed in
  return <div className={classes}>{props.children}</div>;
}

export default Card;
