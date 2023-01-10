import "./CustomButton.css";

// receive 'variant' as a prop +
// handle 3 variants: 'text' | 'contained' | 'outlined' +
// all text is uppercased +
// get hex of blue color
// style every button to match design

const CustomButton = ({ variant, onClick, children }) => {
  if (variant === "text") {
    return (
      <button className="button text" onClick={onClick}>
        {children}
      </button>
    );
  } else if (variant === "outlined") {
    return (
      <button className="button outlined" onClick={onClick}>
        {children}
      </button>
    );
  } else {
    return (
      <button className="button contained" onClick={onClick}>
        {children}
      </button>
    );
  }
};

export default CustomButton;
