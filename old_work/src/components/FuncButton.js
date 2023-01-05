const FuncButton = (props) => {
  const { color, title } = props;
  return <button style={{ backgroundColor: color }}>{title}</button>;
};

export default FuncButton;
