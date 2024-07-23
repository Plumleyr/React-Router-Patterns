import React, { useState } from "react";
import MainRoutes from "./MainRoutes";

const App = () => {
  const INITIAL_STATE = [
    { name: "RED", hex: "#FF0000" },
    { name: "GREEN", hex: "#00FF00" },
    { name: "BLUE", hex: "#0000FF" },
  ];

  const [colors, setColors] = useState(INITIAL_STATE);

  const addColors = (formData) => {
    const newColor = {
      name: formData.colorName.toUpperCase(),
      hex: formData.colorValue,
    };
    setColors((prevColors) => [newColor, ...prevColors]);
  };

  return (
    <div className="App">
      <MainRoutes colors={colors} addColors={addColors} />
    </div>
  );
};

export default App;
