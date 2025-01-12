import Property from "./Property";
import "./PropertyList.css";
function PropertyList({ properties }) {
  return (
    <div className="prop">
      {properties.map((ele) => (
        <Property {...ele} key={ele.id} />
      ))}
    </div>
  );
}

export default PropertyList;
