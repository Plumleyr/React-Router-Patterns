import { Link } from "react-router-dom";
import "./ColorsList.css";

const ColorsList = ({ colors }) => {
  return (
    <div className="ColorsList-main">
      <div className="top-div">
        <h1>Welcome to the color Factory.</h1>
        <Link className="CL-form-link" to={"/colors/new"}>
          Add a color
        </Link>
      </div>
      <h2>Please Select A Color</h2>
      <div className="Link-div">
        {colors.map((c) => (
          <Link className="Link" to={`/colors/${c.name}`}>
            {c.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ColorsList;
