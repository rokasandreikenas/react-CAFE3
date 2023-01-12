import Topbar from "../components/Topbar";
import { useState } from "react";
const arr = [
  {
    item: "banana",
  },
  {
    item: "apple",
  },
  {
    item: "watermelon",
  },
  {
    item: "pear",
  },
  {
    item: "carot",
  },
  {
    item: "pineaple",
  },
];
const ContactsPage = () => {
  const [input, setInput] = useState("");

  const search = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const found = input.length
    ? arr.filter((fruit) => fruit.item.includes(input))
    : arr;

  return (
    <div>
      <Topbar />
      <h1>Mano kontaktu puslapis</h1>
      <div>
        <h1>Fruit List</h1>
        <label htmlFor="search"></label>
        <input type="text" name="search" onChange={search} />
        <ul>
          {found.map((item) => (
            <li key={item.item}>{item.item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactsPage;
