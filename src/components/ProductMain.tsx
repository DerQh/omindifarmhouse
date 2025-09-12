import styled from "styled-components";

// PRODUCT MAIN IMAGE

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 90dvw;
  height: 80dvh;
  /* background-image: url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"); */
  background-size: cover; /* Ensure the image covers the entire container */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Prevent repeating */
  border-radius: 1rem;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: 300px;
  width: 300px;
  border-radius: 10px;
  object-fit: cover;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const ImageSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

// PRODUCT TEXT AND DETAILS

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.8rem;
  max-width: 400px;
`;

const RatingsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.8rem;
`;

const Reviews = styled.span`
  color: gray;
  text-decoration: underline;
  cursor: pointer;
`;

const FarmName = styled.h5`
  font-size: 1rem;
  color: gray;
  font-weight: 500;
  margin: 0;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #559184;
  margin: 0;
`;

const Price = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;
const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* gap: 1rem; */
`;

const CartButton = styled.button`
  padding: 1rem 3rem;
  background-color: #f2f4ec;
  color: #559184;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
`;

const CartIcon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
`;
const BuyNowButton = styled.button`
  padding: 1rem 3rem;
  background-color: #c4ed7a;
  color: #2c5815;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1.2rem;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
  margin: 1rem 0;
`;

const PayLaterDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  /* background-color: #e6f4f1; */
  width: 100%;
  color: #559184;
  border: 0.1px solid #cdd1d0;
  text-align: center;
  padding: 1rem 0;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.9rem;
`;
const MpesaSvg = styled.img`
  width: 50px;
  height: 20px;
  /* border-radius: 10px; */
  object-fit: cover;
  margin-right: 0.5rem;
`;

const WishListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.9rem;
  cursor: pointer;
`;
const WishListDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;
const WishlistText = styled.p`
  font-size: 0.7rem;
  color: #559184;
  text-decoration: underline;
`;

const CompareText = styled.p`
  font-size: 0.7rem;
  color: #559184;
  text-decoration: underline;
`;
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const FireDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const FireText = styled.p`
  font-size: 1rem;
  color: #ab2510;
  font-weight: 500;
`;

const Category = styled.span`
  color: gray;
`;

const Span = styled.span`
  color: gray;
  text-decoration: underline;
`;

function ProductMain() {
  return (
    <>
      <div>All category / Tomatoe Red </div>
      <Container>
        <ImageContainer>
          <ProductImage src="/tomatoe.jpg" alt="Product" />
          {/* <ImageSubContainer>
            <ProductImage src="https://via.placeholder.com/100" alt="Product" />
            <ProductImage src="https://via.placeholder.com/100" alt="Product" />
            <ProductImage src="https://via.placeholder.com/100" alt="Product" />
          </ImageSubContainer> */}
        </ImageContainer>
        <TextContainer>
          <FarmName>Alendu Farm</FarmName>
          <Title>Fresh Red Globe Organic Tomatoe</Title>
          <RatingsDiv>
            <span>⭐</span>
            <span>4.5 Rating</span>
            <Reviews>(100 reviews)</Reviews>
          </RatingsDiv>

          <Price>
            Ksh 24.99 <span> /kg</span>
          </Price>
          <Divider />
          <PayLaterDiv>
            <MpesaSvg src="/mpesa.svg" alt="Mpesa" />
            <div>
              Pay Later with <strong>Mpesa</strong>
            </div>
          </PayLaterDiv>
          <ButtonDiv>
            <CartButton>
              <CartIcon src="/cart.png" alt="Cart" /> Add to Cart
            </CartButton>
            <BuyNowButton>Buy Now</BuyNowButton>
          </ButtonDiv>
          <WishListContainer>
            <WishListDiv>
              <CartIcon src="/heart.png" alt="heart emoji" />
              <WishlistText>ADD TO WISHLIST</WishlistText>
            </WishListDiv>
            <WishListDiv>
              <CartIcon src="/vendor.png" alt="share icon" />
              <CompareText>Compare with other vendors</CompareText>
            </WishListDiv>
          </WishListContainer>
          <DetailsContainer>
            <FireDiv>
              <CartIcon src="/fire.png" alt="" />
              <FireText>200 sold in the last hour</FireText>
            </FireDiv>
            <p>
              CODE: <span>TM-001</span>
            </p>
            <Category>
              Category: <Span>Vegetables</Span> <span>,</span>
              <Span>Fruits</Span>
            </Category>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros
              quis consectetur.
            </p>
          </DetailsContainer>
        </TextContainer>
      </Container>
    </>
  );
}

export default ProductMain;
