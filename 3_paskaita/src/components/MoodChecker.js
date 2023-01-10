import { useState } from "react";

const MoodChecker = () => {
  const [message, setMessage] = useState("Kaip jaučiates?");

  const buttons = [
    { label: "Jauciuosi prastai", value: "Nieko tokio, viskas bus gerai" },
    { label: "Jauciuosi gerai", value: "Nieko tokio, viskas yra gerai" },
    { label: "Jauciuosi puikiai", value: "viskas bus gerai" },
  ];

  return (
    <div>
      <h2>{message}</h2>
      {buttons.map((button) => (
        <button key={button.value} onClick={() => setMessage(button.value)}>
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default MoodChecker;
