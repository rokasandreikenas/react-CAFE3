import "./App.css";
import Logo from "./components/Logo";
import NavigationBar from "./components/NavigationBar";
import FuncButton from "./components/FuncButton";
import FuncDiv from "./components/FuncDiv";
import ClassButton from "./components/ClassButton";
import ClassDiv from "./components/ClassDiv";
import Button from "./components/Button";

// App.js yra pagrindinis komponentas
// Vienas failas = vienas komponentas
// Komponentai rašomi didžiąją raide
// Komponentai būna dviejų tipų: funkciniai ir klasiniai
//   Funkciniai atrodo kaip funkcijos tik iš didžiosios raidės. Regular arba arrow functions
// Return dalyje rašomas JSX - javascript + html
// class => className

function App() {
  return (
    <div className="container">
      <Logo />
      <NavigationBar />
      <FuncButton title="Spausk mane" color="red" />
      <FuncButton title="Nespausk prašau" />
      <FuncDiv title="Kažkas" subtitle="Kažkur kažkas" buttonText="Kas" />
      <ClassButton title="Klasinis mygtukas" />
      <ClassDiv title="Kažkas" subtitle="Kažkur kažkas" buttonText="Kas" />
      <Button>Rokas Spausk čia</Button>
    </div>
  );
}

export default App;
