import styled from "styled-components";

const StyledButton = styled.div`
  padding: 10px;
  background-color: red;
`;

const Text = styled.p`
  color: white;
`;

const Button = () => {
  return (
    <StyledButton>
      <Text>Button</Text>
    </StyledButton>
  );
};

export default Button;
