import Button from "./components/Button/Button";
import { useState } from "react";
import Product from "./components/Product/Product";
import CustomButton from "./components/CustomButton/CustomButton";
import Greeting from "./components/Greeting";

// React hook - useState - storing information and setting information

const App = () => {
  const [name, setName] = useState("Rokas");
  const [age, setAge] = useState(24);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [count, setCount] = useState(0);

  const fruits = ["Banana", "Pineapple", "Apple"];

  const buttons = [
    {
      variant: "text",
      text: "Help me to get random number",
    },
    {
      variant: "outlined",
      text: "I am an outcast",
    },
    { variant: "contained", text: "Contained container" },
    { variant: "text", text: "text container" },
  ];

  const handleAddCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Button onClick={() => alert("Sveiki, kaip jum sekasi?")}>
        Say hello
      </Button>
      <Button onClick={() => alert("Ačiū, geros dienos!")}>Say goodbye</Button>
      <Button
        onClick={() => {
          console.log("Im clicked...");
        }}
      >
        Do not click here
      </Button>
      <Button
        backgroundColor="green"
        onClick={() => {
          setAge(age * 2);
        }}
      >
        Help my age is: {age}
      </Button>
      <Button
        backgroundColor="red"
        onClick={() => {
          setName("Tadas");
        }}
      >
        {name}
      </Button>
      <Button onClick={handleAddCount}>Plus one</Button>
      <span style={{ fontSize: 20, color: "blue", margin: "0 10px" }}>
        {count}
      </span>
      <Button onClick={() => setCount(count - 1)} backgroundColor="black">
        Minus one
      </Button>
      <span style={{ marginLeft: 8, color: "red" }}>
        {count < 0 && "Negalima pasirinkti mažiau nei 0 prekių."}
        {count > 9 && "Jūs pasirinkote per didelį kiekį prekių."}
      </span>
      <Product category="test" name="asd" price={0} />
      <br />
      <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
        <CustomButton variant="text">Text</CustomButton>
        <CustomButton variant="contained">Contained</CustomButton>
        <CustomButton variant="outlined">Outlined</CustomButton>
      </div>
      <Greeting isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Log out</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Log in</button>
      )}
      <br />

      {["Zalia", "Geltona", "Raudona"].map((text) => (
        <CustomButton key={text}>{text}</CustomButton>
      ))}

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      {buttons.map((button, index) => (
        <CustomButton key={index} variant={button.variant}>
          {button.text}
        </CustomButton>
      ))}
      <ol>
        <li>
          Sumuštiniai <strong>$5</strong>
        </li>
        <li>
          Bulvės su kopūstais <strong>$10</strong>
        </li>
        <li>
          Kefyras <strong>$3</strong>
        </li>
        <li>
          Cepelinai <strong>$12</strong>
        </li>
      </ol>
    </div>
  );
};

export default App;
