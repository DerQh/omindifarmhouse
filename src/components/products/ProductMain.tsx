import styled from "styled-components";
import Product from "./Product";

// PRODUCT MAIN IMAGE

function ProductMain() {
  return (
    <MainContainer>
      <AllCategory>
        All category / <span>Red Globe Tomatoes</span>
      </AllCategory>
      <Container>
        <ImageContainer>
          <ProductImage src="/tomatoe.jpg" alt="Product" />
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
            Ksh 24<span>.99/kg</span>
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
            <CodePara>
              CODE: <span>TM-001</span>
            </CodePara>
            <Category>
              Category: <Span>Vegetables</Span> <span>,</span>
              <Span>Fruits</Span> <span>,</span> <Span>Organic</Span>
              <span>,</span> <Span>Fresh </Span>
            </Category>
            <ProductDescription>
              Fresh, organic, Red Globe tomatoes bursting with flavor. Ideal for
              salads, sauces, and healthy dishes, bringing nature's goodness
              straight to your table.
            </ProductDescription>
            <DeliveryContainer>
              <DeliveryDiv>
                <DeliveryIcon src="/delivery.png" alt="delivery icon" />
                <DeliveryText>
                  Free Delivery
                  <DeliverySpan>
                    Applies to all orders within Kisumu and above Ksh 1,000
                  </DeliverySpan>
                </DeliveryText>
              </DeliveryDiv>
            </DeliveryContainer>
          </DetailsContainer>
        </TextContainer>
      </Container>
    </MainContainer>
  );
}

export default ProductMain;

// BREAKPOINTS - RESPONSIVE WEBSITE
const breakpoints = {
  xs: "576px", // Extra Small Devices
  sm: "768px", // Small Devices
  md: "992px", // Medium Devices
  lg: "1200px", // Large Devices
};

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1000px;
  margin: 2rem auto;
`;

// PRODUCT IMAGE AND DETAILS CONTAINER
const AllCategory = styled.h2`
  text-align: left;
  font-size: 1.5rem;
  color: #24695a;
  /* border: 2px solid red; */
  padding: 0 1.5rem;

  span {
    cursor: pointer;
  }
  @media (max-width: ${breakpoints.xs}) {
    font-size: 14px; /* Extra Small Devices */
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    font-size: 16px; /* Small Devices */
  }

  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
    font-size: 18px; /* Medium Devices */
  }

  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
    font-size: 20px; /* Large Devices */
    padding: 25px; /* Example adjustment */
  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: 22px; /* Extra Large Devices */
    padding: 30px; /* Example adjustment */
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0.5rem 1.5rem;

  @media (max-width: ${breakpoints.xs}) {
    font-size: 14px;
    flex-direction: column;
    padding: 0.3rem 1.5rem;
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    font-size: 16px;
    flex-direction: column;
    padding: 0.4rem 1.5rem;
  }
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: 450px;
  width: 450px;
  min-width: 200px;
  border-radius: 10px;
  object-fit: cover;
  @media (max-width: ${breakpoints.xs}) {
    height: 300px;
    width: 300px;
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    max-height: 350px;
    max-width: 350px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 0.5rem;
`;

// PRODUCT TEXT AND DETAILS

const TextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0;

  @media (max-width: ${breakpoints.xs}) {
    gap: 2px;
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    gap: 3px;
  }
  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
    max-width: 500px;
  }

  @media (min-width: ${breakpoints.lg}) {
    max-width: 500px;
  }
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
  @media (max-width: ${breakpoints.xs}) {
    font-size: 14px;
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    font-size: 16px;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: #24695a;
  margin: 5px 0;
  @media (max-width: ${breakpoints.xs}) {
    font-size: 20px;
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    font-size: 22px;
  }
`;

const Price = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: #24695a;
  margin: 10px 0;
  span {
    font-size: 12px;
    font-weight: 400;
    color: #424242;
    margin-left: 1px;
    vertical-align: super;
  }

  @media (max-width: ${breakpoints.xs}) {
    font-size: 20px;
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    font-size: 22px;
  }
`;
const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;

const CartButton = styled.div`
  padding: 1rem 3rem;
  background-color: #f2f4ec;
  color: #24695a;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  @media (max-width: ${breakpoints.xs}) {
    font-size: 14px;
    border-radius: 22px;
    padding: 0.8rem 2rem;
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    font-size: 16px;
    border-radius: 23px;
    padding: 0.9rem 2.5rem;
  }
`;

const CartIcon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  @media (max-width: ${breakpoints.xs}) {
    width: 16px;
    height: 16px;
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    width: 18px;
    height: 18px;
  }
`;
const BuyNowButton = styled.button`
  padding: 1rem 3rem;
  background-color: #c4ed7a;
  color: #24695a;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1.2rem;
  @media (max-width: ${breakpoints.xs}) {
    font-size: 14px;
    border-radius: 22px;
    padding: 0.8rem 3rem;
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    font-size: 16px;
    border-radius: 23px;
    padding: 0.9rem 3rem;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
  margin: 1rem 0;
  @media (max-width: ${breakpoints.xs}) {
    margin: 0.5rem 0;
    height: 0.5px;
  }
`;

const PayLaterDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  color: #24695a;
  border: 0.1px solid #cdd1d0;
  text-align: center;
  padding: 0.8rem 0rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.9rem;
  @media (max-width: ${breakpoints.xs}) {
    font-size: 14px;
    padding: 0.6rem 0rem;
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    font-size: 16px;
    padding: 1rem 0rem;
  }
`;
const MpesaSvg = styled.img`
  width: 50px;
  height: 20px;
  object-fit: cover;
  /* margin: 0.5rem; */
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
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;
  @media (max-width: ${breakpoints.xs}) {
    font-size: 12px;
    gap: 0.4rem;
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    font-size: 14px;
    gap: 0.5rem;
  }
`;
const WishlistText = styled.p`
  /* font-size: 0.9rem; */
  color: #24695a;
  text-decoration: underline;
`;

const CompareText = styled.p`
  /* font-size: 0.9rem; */
  color: #24695a;
  text-decoration: underline;
`;
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: gray;
  font-weight: 400;
  margin: 0.5rem 0;
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
const CodePara = styled.p`
  font-size: 0.9rem;
  color: #24695a;
  font-weight: 600;
  margin: 0.5rem 0;
`;

const DeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const DeliveryDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
const DeliveryIcon = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;

const DeliveryText = styled.p`
  font-size: 0.9rem;
  color: #24695a;
  font-weight: 600;
  margin: 0.5rem 0;
`;
const DeliverySpan = styled.span`
  padding-left: 0.3rem;
  color: gray;
  font-weight: 400;
`;

// https://www.vecteezy.com/photo/24445456-tomato-on-the-white-background-generate-ai  -- FREE IMAGES FOR PRODUCT
// http://172.16.1.12:3000
