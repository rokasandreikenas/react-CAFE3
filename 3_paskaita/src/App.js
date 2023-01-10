import MenuList from "./components/MenuList/MenuList";
import MoodChecker from "./components/MoodChecker";
import CustomButton from "./components/CustomButton/CustomButton";
import { useState } from "react";

const App = () => {
  const [activeMenu, setActiveMenu] = useState("single");

  const buttons = [
    {
      label: "Show single menu",
      value: "single",
    },
    {
      label: "Show family menu",
      value: "family",
    },
    {
      label: "Show couples menu",
      value: "couple",
    },
  ];

  return (
    <div>
      <MoodChecker />
      <br />
      {buttons.map((button) => (
        <CustomButton
          key={button.value}
          variant={activeMenu === button.value ? "contained" : "outlined"}
          onClick={() => setActiveMenu(button.value)}
        >
          {button.label}
        </CustomButton>
      ))}
      <MenuList customerType={activeMenu} />
    </div>
  );
};

export default App;
