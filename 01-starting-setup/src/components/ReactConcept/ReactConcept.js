import "./ReactConcept.css";

function ReactConcept({ title, description, src }) {
  return (
    <li className="concept">
      <img src={src} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

export default ReactConcept;
