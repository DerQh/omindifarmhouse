import React, { useState } from "react";
import styled from "styled-components";

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
  height: 1px;
  background-color: #383535;
  margin: 10px 0;
`;

// shop details

const ShopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ShopDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
  padding: 10px;
`;
const ShopLogo = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 10px;
`;
const ShopDetails = styled.div`
  h5 {
    font-weight: 500;
    font-size: 14px;
  }
  p {
    font-size: 10px;
  }
`;

const ItemContainer = styled.div`
  flex: 2;
  background-color: #efefef;
  padding: 20px;
  margin-right: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;
const ItemDetails = styled.div`
  & > p:first-child {
    font-size: 14px;
  }
  & > :nth-child(2) {
    font-size: 10px;
  }
  & > :nth-child(3) {
    font-size: 14px;
    font-weight: 500;
  }
`;
const PriceDiv = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: 5px;
  & > :nth-child(1) {
    margin-right: 1px;
    font-size: 14px;
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
`;

const Address = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  background-color: #e9ecef;
  border-radius: 4px;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid #ccc; */
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: #ffffff;
`;

const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const ItemImage = styled.img`
  width: 50px; /* Adjust the size as needed */
  height: 50px; /* Maintain aspect ratio */
  border-radius: 4px;
  margin-right: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #007bff;
  color: white;

  &:hover {
    background-color: #0056b3;
  }
`;

interface ItemType {
  id: number;
  name: string;
  grams: number;
  price: number;
  image: string; // Added image property
}

const CheckoutPage: React.FC = () => {
  const [items, setItems] = useState<ItemType[]>([
    {
      id: 1,
      name: "Fresh Farmed Tomatoes",
      grams: 500,
      price: 289,
      image: "https://picsum.photos/200/300",
    },
  ]);

  const addItem = () => {
    const newItem: ItemType = {
      id: items.length + 1,
      name: `Item ${items.length + 1}`,
      grams: 500,
      price: 10.99 + items.length, // Incremental price for illustration
      image: "https://picsum.photos/200/300", // Placeholder image
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <CheckoutContainer>
      <ItemContainer>
        <h2>Review item by store</h2>
        <Divider></Divider>
        <ShopContainer>
          <ShopDiv>
            <ShopLogo src="https://picsum.photos/200/300" alt="shop logo" />
            <ShopDetails>
              <h5>Alendu local farms</h5>
              <p>
                Delivery in <span>20</span> Minutes
              </p>
            </ShopDetails>
          </ShopDiv>
          <h5>^</h5>
        </ShopContainer>
        {items.map((item) => (
          <Item key={item.id}>
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
        ))}
        <Address>
          <div>
            <h3>Address</h3>
            <div>
              <img src="" alt="edit" />
              <p>Edit</p>
            </div>
            <div>
              <img src="" alt="map" />
              <div>
                <h6>Deliver to</h6>
                <p>Address: (+254) 721000345</p>
                <a href="https://maps.app.goo.gl/aEivmR5ppzEY5jEP8">
                  Migingo Center, Next to the High School
                </a>
              </div>
            </div>
          </div>
          <p>123 Main St</p>
          <p>City, State, ZIP</p>
        </Address>
      </ItemContainer>
      <OrderSummary>
        <h2>Order Summary</h2>
        {/* Order summary content goes here */}
      </OrderSummary>
    </CheckoutContainer>
  );
};

export default CheckoutPage;
