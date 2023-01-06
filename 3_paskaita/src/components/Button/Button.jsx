import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ onClick, backgroundColor, children }) => {
  // {backgroundColor: backgroundColor} === {backgroundColor}
  return (
    <button
      className="styled-button"
      onClick={onClick}
      style={{ backgroundColor }}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string, // optional string
  onClick: PropTypes.func, // optional function
  children: PropTypes.node.isRequired, // required any react thing
};

export default Button;
