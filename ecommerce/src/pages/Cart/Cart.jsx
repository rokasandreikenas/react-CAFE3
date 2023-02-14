import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { euroSymbol } from "../../consts/currency";
import { screenSize } from "../../consts/mediaQueries";
import Button from "../../components/Button/Button";
import { LOGIN_PATH, CHECKOUT_PATH } from "../../routes/const";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const { isLoggedIn } = useContext(UserContext);

  return (
    <Container>
      <Header>
        <h2>MY BAG</h2>
        <p>Items are reserved for 30 minutes</p>
      </Header>
      <CartContainer>
        {cartItems.map((product) => (
          <CartItem key={product.id}>
            <img src={product.picUrl[0]} alt={product.name} />
            <div>
              <CartItemPrice>
                {euroSymbol}
                {product.price}
              </CartItemPrice>
              <p>{product.name}</p>
              <CartItemColor>{product.color}</CartItemColor>
            </div>
            <ItemQuantity>x{product.quantity}</ItemQuantity>
          </CartItem>
        ))}
      </CartContainer>
      <ButtonContainer>
        <Button as={Link} to={isLoggedIn ? CHECKOUT_PATH : LOGIN_PATH}>
          Checkout
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  max-width: ${screenSize.tablet};
  margin: 0 auto;
`;

const Header = styled.div`
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-radius: 4px;
  margin-bottom: 24px;
`;

const CartContainer = styled.div`
  background-color: #ffffff;
  margin-bottom: 24px;
`;

const CartItem = styled.div`
  display: flex;

  img {
    width: 120px;
    margin-right: 8px;
    object-fit: contain;
  }
`;

const CartItemPrice = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-top: 16px;
  margin-bottom: 8px;
`;

const CartItemColor = styled.p`
  margin-top: 8px;
  font-weight: 300;
`;

const ItemQuantity = styled.div`
  flex: 1;
  align-self: center;
  margin-right: 32px;
  text-align: right;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
