import React, { useState } from "react";
import styled from "styled-components";
import OrderSummaryComponent from "./OrderSummary";

const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

// ITEM DETAILS
const Divider = styled.div`
  height: 0.3px;
  background-color: green;
  margin: 15px 20px;
`;

// shop details

const ShopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 0 20px;
  & > :nth-child(2) {
    color: green;
  }
`;

const ShopDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ShopLogo = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
`;
const ShopDetails = styled.div`
  h5 {
    font-weight: 450;
    font-size: 14px;
    color: #084d11;
  }
  p {
    font-size: 10px;
    font-weight: 400;
  }
`;

const ItemContainer = styled.div`
  flex: 2;
  border-radius: 8px;
  h2 {
    font-size: 18px;
  }
  & > :nth-child(2) {
    font-size: 16px;
    margin: 15px 20px;
    font-weight: 600;
    color: #084d11;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;
const CartContainer = styled.div`
  /* flex: 2; */
  /* padding: 20px; */
  border-radius: 8px;
  border: 0.5px solid gray;
  /* background-color: gray; */
  h2 {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const PriceDiv = styled.div`
  display: flex;
  align-items: baseline;
  & > :nth-child(1) {
    font-size: 14px;
    font-weight: 600;
  }
  & > :nth-child(2) {
    position: relative;
    top: -0.3em;
    font-size: 10px;
  }
`;

const OrderSummary = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  h2 {
    font-size: 18px;
    color: #084d11;

    /* margin-left: 20px; */
  }
`;

//  ADDRESS
const AddressContainer = styled.div`
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const EditSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  h4 {
    font-size: 16px;
    font-weight: 600;
    color: #084d11;
  }

  img {
    margin-right: 8px;
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
`;

const DeliverySection = styled.div`
  display: flex;
  align-items: flex-start;

  img {
    margin-right: 10px;
    width: 60px;
    height: 60px;
    border-radius: 10px;
    object-fit: cover;
  }
`;

const DeliveryInfo = styled.div`
  h6 {
    font-size: 14px;
    font-weight: 450;
    margin-bottom: 5px;
    color: #084d11;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    color: gray;
  }

  a {
    font-size: 14px;
    font-weight: 400;
    color: gray;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 20px 20px;
  border-radius: 4px;
`;

const ItemInfo = styled.div`
  flex: 1;
  display: flex;

  align-items: center;
`;

const ItemImage = styled.img`
  width: 70px;
  height: 80px;
  border-radius: 4px;
  margin-right: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  p {
    color: green;
  }
`;

const Button = styled.button`
  width: 20px;
  height: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid green;
  color: green;
  background-color: white;

  &:hover {
    background-color: green;
    color: white;
  }
`;
const ItemDetails = styled.div`
  & > p:first-child {
    font-size: 14px;
    line-height: 15px;
    font-weight: 500;
    color: #084d11;
  }
  & > :nth-child(2) {
    font-size: 10px;
    margin-top: 4px;
  }
  & > :nth-child(3) {
    margin-top: 24px;
    font-size: 14px;
    font-weight: 500;
    color: #084d11;
  }
`;

const EditDiv = styled.div`
  /* display: flex; */
  img {
    width: 16px;
    height: 16px;
  }
  h4 {
    font-size: 16px;
    font-weight: 450;
  }
`;

// ---------------------------------------------- MAIN COMPONENT -------------------------------- //
interface ItemType {
  id: number;
  name: string;
  grams: number;
  price: number;
  image: string;
  farm: string;
  rating: number;
}

const CheckoutPage: React.FC = () => {
  const [items, setItems] = useState<ItemType[]>([
    {
      id: 1,
      name: "Fresh Farmed Tomatoes",
      grams: 500,
      price: 289,
      image: "/tomatoe.jpg",
      farm: "Alendu Local Farm",
      rating: 97.2,
    },
    {
      id: 2,
      name: "Avocado Green",
      grams: 200,
      price: 994,
      image: "/avocado.jpeg",
      farm: "Buoye Farmers Market",
      rating: 92.2,
    },
  ]);

  const addItem = () => {
    // const newItem: ItemType = {
    //   id: items.length + 1,
    //   name: `Item ${items.length + 1}`,
    //   grams: 500,
    //   price: 10.99 + items.length, // Incremental price for illustration
    //   image: "https://picsum.photos/200/300",
    //   farm: items.farm,
    // };
    // setItems([...items, newItem]);
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <CheckoutContainer>
      <ItemContainer>
        <AddressContainer>
          <EditSection>
            <h4>Delivery information</h4>
            <EditDiv>
              <img src="/edit.png" alt="Edit address" />
              {/* <h4>Edit</h4> */}
            </EditDiv>
          </EditSection>
          <DeliverySection>
            <img src="/maps.webp" alt="Map Location" />
            <DeliveryInfo>
              <h6>Deliver to</h6>
              <p>Phone: (+254) 721000345</p>
              <a
                href="https://maps.app.goo.gl/aEivmR5ppzEY5jEP8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Migingo Center, Next to the High School
              </a>
            </DeliveryInfo>
          </DeliverySection>
        </AddressContainer>
        <h4>Shopping Cart</h4>

        {items.map((item) => (
          <CartContainer key={item.id}>
            <ShopContainer>
              <ShopDiv>
                <ShopLogo src="https://picsum.photos/200/300" alt="shop logo" />
                <ShopDetails>
                  <h5>{item.farm}</h5>
                  <p>{item.rating}% positive feedback</p>
                </ShopDetails>
              </ShopDiv>
              <h5>...</h5>
            </ShopContainer>
            <Divider></Divider>

            <Item>
              <ItemInfo>
                <ItemImage src={item.image} alt={item.name} />
                <ItemDetails>
                  <p>{item.name}</p>
                  <p>{item.grams}g</p>
                  <PriceDiv>
                    <span>KES {item.price}.</span>
                    <span>99</span>
                  </PriceDiv>
                </ItemDetails>
              </ItemInfo>
              <ButtonContainer>
                <Button onClick={() => removeItem(item.id)}>-</Button>
                <p>1</p>
                <Button onClick={addItem}>+</Button>
              </ButtonContainer>
            </Item>
          </CartContainer>
        ))}
      </ItemContainer>
      <OrderSummary>
        <h2>Order Summary</h2>
        {/* Order summary content goes here */}
        <OrderSummaryComponent />
      </OrderSummary>
    </CheckoutContainer>
  );
};

export default CheckoutPage;
