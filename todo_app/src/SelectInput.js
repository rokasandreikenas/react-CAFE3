import React, { useState } from "react";

const SelectInput = () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    console.log({ [event.target.name]: event.target.value });
  };

  return (
    <div>
      <select name="select" value={selectedOption} onChange={handleChange}>
        <option value="test">Test</option>
        <option value="best">Best</option>
        {/* {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))} */}
      </select>
    </div>
  );
};

export default SelectInput;
