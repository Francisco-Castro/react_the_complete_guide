import ReactConcept from "../ReactConcept/ReactConcept";
import "./ReactConcepts.css";

const ReactConcepts = ({ concepts }) => {
  return (
    <ul id="concepts">
      {concepts.map(({ title, description, image }) => (
        <ReactConcept
          title={title}
          description={description}
          src={image}
          key={title}
        />
      ))}
    </ul>
  );
};

export default ReactConcepts;
