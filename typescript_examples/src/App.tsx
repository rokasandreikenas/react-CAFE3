const App = () => {
  const name: string = "Rokas";
  const surname = "Andreikenas";
  const age: number = 24;
  const weight = 90;
  const isAdult: boolean = true;
  const wife = null;
  const favoriteColor = undefined;
  const numbers: number[] = [1, 3, 4, 5]; // naudosim sita
  const numbers1: Array<number> = [1, 2, 3, 4];

  const items: (number | string)[] = [1, 2, "3", "4"];
  const item: number | string = "1";

  const dog = {
    name: "brisius",
    age: 1,
  };

  const number1 = 1;
  const number2 = Number("2");

  const result: number = number1 + number2;
  console.log(result, typeof result);

  const addNumber = (num1: number, num2: number): number => {
    return num1 + num2;
  };

  const addedNumbers = addNumber(1, 5);

  const car: {
    make: string;
    color: string;
  } = {
    make: "Volvo",
    color: "",
  };

  const response = true;

  if (response) {
    car.color = "Red";
  }

  const car1: {
    make: string;
    model?: string;
  } = {
    make: "BMW",
  };

  if (response) {
    car1.model = "X5";
  }

  type PPerson = {
    name: string;
    age: number;
    email?: string;
  };

  interface Person {
    name: string; // required laukas
    age: number; // required laukas
    email?: string; // optional laukas
  }

  interface SuperHero {
    power: string;
  }

  interface SuperPerson extends SuperHero {
    name: string;
  }

  const person: Person = {
    name: "Rokas",
    age: 24,
  };

  const person1: Person = {
    name: "Romas",
    age: 30,
    email: "romas@gmail.com",
  };

  console.log(
    person,
    person1,
    result,
    items,
    item,
    name,
    surname,
    age,
    weight,
    isAdult,
    wife,
    favoriteColor,
    numbers,
    numbers1
  );

  return <div>{item}</div>;
};

export default App;
