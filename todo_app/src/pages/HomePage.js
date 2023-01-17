import { useEffect, useState } from "react";
import Topbar from "../components/Topbar";
import { getCars } from "../api/cars";
import { Link } from "react-router-dom";
import { weatherAPI } from "../consts/api";
import WeatherCard from "../components/WeatherCard/WeatherCard";

const HomePage = () => {
  const cars = getCars();
  const [weather, setWeather] = useState(undefined);

  useEffect(() => {
    fetch(weatherAPI)
      .then((resp) => resp.json())
      .then((response) => {
        setWeather(response);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Topbar />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 24,
        }}
      >
        <h1>Mano pagrinidinis puslapis</h1>
        {weather && <WeatherCard weather={weather} />}
      </div>
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
