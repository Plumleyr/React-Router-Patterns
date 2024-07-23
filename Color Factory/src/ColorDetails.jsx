import { Link, useParams, Navigate } from "react-router-dom";
import "./ColorDetails.css";

const ColorDetails = ({ colors }) => {
  const { color } = useParams();

  const pageColor = colors.find((c) => c.name === color);

  if (!color || !pageColor) {
    return <Navigate to={"/colors"} />;
  }

  return (
    <div className="CD-main" style={{ backgroundColor: `${pageColor.hex}` }}>
      <p className="CD-p">THIS IS {pageColor.name}</p>
      <p className="CD-p">ISN'T IT BEAUTIFUL?</p>
      <Link className="CD-L" to={"/colors"}>
        GO BACK
      </Link>
    </div>
  );
};

export default ColorDetails;
