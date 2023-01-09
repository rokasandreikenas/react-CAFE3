const Greeting = ({ isLoggedIn }) => {
  return <p>{isLoggedIn ? "Hello user!" : "You need to login first."}</p>;
};

export default Greeting;
