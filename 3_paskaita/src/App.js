import Button from "./components/Button/Button";
import { useState } from "react";
import Product from "./components/Product/Product";

// React hook - useState - storing information and setting information

const App = () => {
  const [name, setName] = useState("Rokas");
  const [age, setAge] = useState(24);
  const [count, setCount] = useState(0);

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
      <Product category="test" name="asd" price={0} />
    </div>
  );
};

export default App;
