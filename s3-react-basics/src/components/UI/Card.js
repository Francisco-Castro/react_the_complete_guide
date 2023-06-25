import "./Card.css";

function Card({ className, children }) {
  let classes;
  if (typeof className !== "undefined") {
    classes = "card " + className;
  } else {
    classes = "card";
  }

  return <div className={classes}>{children}</div>;
}

export default Card;
