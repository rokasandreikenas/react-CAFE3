import styled from "styled-components";
import { euroSymbol } from "../../consts/currency";

const CartItem = ({ product }) => {
  return (
    <Container>
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
    </Container>
  );
};

export default CartItem;

const Container = styled.div`
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
