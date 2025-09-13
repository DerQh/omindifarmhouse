import styled from "styled-components";

function SalesComponent() {
  return (
    <>
      <SaleDiv>
        <SaleTitle>Special Offer</SaleTitle>
        <SaleSubTitle>Get 20% off on your first order</SaleSubTitle>
        <SaleButton>Shop Sale</SaleButton>
      </SaleDiv>
    </>
  );
}

export default SalesComponent;

const SaleDiv = styled.div`
  width: 100%;
  max-width: 1000px;
  background-color: #f2f4ec;
  border-radius: 0.9rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 2rem auto;
`;

const SaleTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #24695a;
  margin: 0;
`;

const SaleSubTitle = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  color: #24695a;
  margin: 0;
`;

const SaleButton = styled.button`
  padding: 0.8rem 2rem;
  background-color: #24695a;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
`;
