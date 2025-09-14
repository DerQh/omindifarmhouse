import styled from "styled-components";
import SalesComponent from "./Sale";
import SimilarProducts from "./SimilarProducts";

function OtherStores() {
  return (
    <Container>
      <TitleDiv>
        <Title>Other Stores</Title>
        <VisitStores>
          <SubTitle>Visit Stores</SubTitle>
          <Arrow src="/right-arrow.png" alt="arrow" />
        </VisitStores>
      </TitleDiv>

      <VendorsDiv>
        <VendorCard>
          <VendorImage src="https://picsum.photos/200/300" alt="Vendor 1" />
          <VendorSubCard>
            <VendorName>Alendu Farm Markets</VendorName>
            <DeliveryDiv>
              <DeliveryImg src="/delivery.png" alt="lightening icon" />
              <DeliverySpan>2.5 km away</DeliverySpan>
            </DeliveryDiv>
          </VendorSubCard>
          <Price>
            Ksh 100 <span>.</span> <span>99</span>
          </Price>
        </VendorCard>
        <VendorCard>
          <VendorImage src="https://picsum.photos/200/300" alt="Vendor 1" />
          <VendorSubCard>
            <VendorName>Alendu Farm Markets</VendorName>
            <DeliveryDiv>
              <DeliveryImg src="/delivery.png" alt="lightening icon" />
              <DeliverySpan>2.5 km away</DeliverySpan>
            </DeliveryDiv>
          </VendorSubCard>
          <Price>
            Ksh 100 <span>.</span> <span>99</span>
          </Price>
        </VendorCard>
        <VendorCard>
          <VendorImage src="https://picsum.photos/200/300" alt="Vendor 1" />
          <VendorSubCard>
            <VendorName>Alendu Farm Markets</VendorName>
            <DeliveryDiv>
              <DeliveryImg src="/delivery.png" alt="lightening icon" />
              <DeliverySpan>2.5 km away</DeliverySpan>
            </DeliveryDiv>
          </VendorSubCard>
          <Price>
            Ksh 100 <span>.</span> <span>99</span>
          </Price>
        </VendorCard>
        <VendorCard>
          <VendorImage src="https://picsum.photos/200/300" alt="Vendor 1" />
          <VendorSubCard>
            <VendorName>Alendu Farm Markets</VendorName>
            <DeliveryDiv>
              <DeliveryImg src="/delivery.png" alt="lightening icon" />
              <DeliverySpan>2.5 km away</DeliverySpan>
            </DeliveryDiv>
          </VendorSubCard>
          <Price>
            Ksh 100 <span>.</span> <span>99</span>
          </Price>
        </VendorCard>
      </VendorsDiv>

      {/* SALES SECTION */}
      <SalesComponent />

      {/* SIMILAR PRODUCTS SECTION */}
      <SimilarProducts />
    </Container>
  );
}

export default OtherStores;

// https://picsum.photos/200/300  -- FREE IMAGES FOR PRODUCT
// PRODUCT TEXT AND DETAILS

const Container = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  gap: 1rem;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;
  color: #122d27;
`;

const TitleDiv = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SubTitle = styled.h2`
  font-size: 1rem;
  color: #af550b;
  font-weight: 400;
  margin: 0;
`;

const VisitStores = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const VendorsDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;
const VendorCard = styled.div`
  /* width: 200px; */
  /* height: 80px; */
  border: 1px solid #e0e0e0;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  gap: 1rem;
  cursor: pointer;
`;

const VendorSubCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  /* gap: 0.3rem; */
`;

const DeliveryImg = styled.img`
  width: 15px;
  height: 15px;
  object-fit: cover;
  margin-right: 0.3rem;
`;

const VendorImage = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
`;

const Arrow = styled.img`
  width: 15px;
  height: 15px;
  object-fit: cover;
  margin-left: 0.3rem;
  cursor: pointer;
`;

const VendorName = styled.h4`
  font-size: 1rem;
  font-weight: 400;
  color: #24695a;
  margin: 0.3rem 0 0 0;
`;

const DeliverySpan = styled.span`
  font-size: 0.8rem;
  color: gray;
`;

const DeliveryDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
`;

const Price = styled.h6`
  font-size: 0.8rem;
  font-weight: 600;
  color: #24695a;
  margin: 0.3rem 0 0 0;
`;
// Additional styled components that might be useful in ProductMain.ts
