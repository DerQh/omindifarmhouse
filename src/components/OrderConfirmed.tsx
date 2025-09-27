import styled from "styled-components";

function OrderConfirmation() {
  return (
    <Container>
      <h1>Order Confirmed</h1>
      <ShippingIcon src="fast-shipping.png" alt="Fast Shipping" />
      <p>
        Your order has been successfully placed! You'll receive a confirmation
        email shortly on <span>test@gmail.com</span>.
      </p>
      <OrderDetailsBtn>View Order Details</OrderDetailsBtn>
      <HomeBtn>Go to Homepage</HomeBtn>
    </Container>
  );
}
export default OrderConfirmation;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    margin: 10px 0;
    font-size: 20px;
    font-weight: 500;
    color: green;
  }

  p {
    font-size: 12px;
    margin: 20px 0;
    span {
      font-weight: 400;
      color: #154148;
    }
  }
`;

const ShippingIcon = styled.img`
  width: 120px;
  height: 120px;
  margin: 20px 0;
`;
const OrderDetailsBtn = styled.button`
  width: 100%;
  padding: 15px;
  color: green;
  border: 1px solid gray;
  font-size: 14px;
  font-weight: 500;
  border-radius: 30px;
  cursor: pointer;
  margin: 30px 20px 0;
  padding: 15px;
  &:hover {
    background-color: #141414;
    color: white;
  }
`;

const HomeBtn = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #b1da7c;
  border: none;
  color: green;
  font-size: 14px;
  font-weight: 500;
  border-radius: 30px;
  cursor: pointer;
  margin: 30px 20px 0;
  padding: 15px;
  &:hover {
    background-color: #141414;
    color: white;
  }
`;
