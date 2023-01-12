import { Routes, Route } from "react-router-dom";
import ShopingListApp from "./ShopingListApp";
import TodoApp from "./TodoApp";
import Calculator from "./Calculator";
import TodoAppAI from "./TodoAppAI";
import SelectInput from "./SelectInput";
import HomePage from "./pages/HomePage";
import ContactsPage from "./pages/ContactsPage";
import CarPage from "./pages/CarPage";

const App = () => {
  return (
    <Routes>
      <Route path="/shoping" element={<ShopingListApp />} />
      <Route path="/todo" element={<TodoApp />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/todoai" element={<TodoAppAI />} />
      <Route path="/select" element={<SelectInput />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/cars/:id" element={<CarPage />} />
    </Routes>
  );
};

export default App;
