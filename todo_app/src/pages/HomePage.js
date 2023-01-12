import Topbar from "../components/Topbar";
import { getCars } from "../api/cars";
import { Link } from "react-router-dom";

const HomePage = () => {
  const cars = getCars();

  return (
    <div>
      <Topbar />
      <h1>Mano pagrinidinis puslapis</h1>
      <ul>
        {cars.map((car) => (
          <Link key={car.id} to={`/cars/${car.id}`}>
            <li style={{ marginBottom: 8 }}>
              {car.make} {car.model}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
