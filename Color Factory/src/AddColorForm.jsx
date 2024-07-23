import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./AddColorForm.css";

const AddColorForm = ({ addColors }) => {
  const INITIAL_STATE = {
    colorName: "",
    colorValue: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addColors(formData);
    setFormData(INITIAL_STATE);
    navigate("/colors");
  };

  return (
    <div className="ACF-main">
      <form className="ACF-form" onSubmit={handleSubmit}>
        <label htmlFor="colorName">
          Color name
          <input
            className="ACF-I"
            type="text"
            name="colorName"
            value={formData.colorName}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="colorValue">
          Color name
          <input
            className="ACF-I"
            type="color"
            name="colorValue"
            value={formData.colorValue}
            onChange={handleChange}
          />
        </label>
        <button className="ACF-btn">Add This Color</button>
        <Link to={"/colors"}>GO BACK</Link>
      </form>
    </div>
  );
};

export default AddColorForm;
