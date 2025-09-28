import styled from "styled-components";

function SalesComponent() {
  return (
    <SaleDiv>
      <SaleTitle>Special Offer</SaleTitle>
      <SaleSubTitle>Get 20% off on your first order</SaleSubTitle>
      <SaleButton>Shop Sale</SaleButton>
    </SaleDiv>
  );
}

export default SalesComponent;

const breakpoints = {
  xs: "576px", // Extra Small Devices
  sm: "768px", // Small Devices
  md: "992px", // Medium Devices
  lg: "1200px", // Large Devices
};
const SaleDiv = styled.div`
  width: 100%;
  max-width: 1000px;
  background-color: #f2f4ec;
  border-radius: 0.9rem;
  /* padding: 1.5rem; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin: 2rem auto;
  @media (max-width: ${breakpoints.xs}) {
    border-radius: 0rem;
  }
  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    width: 100%;
    border-radius: 0rem;
  }

  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
    border-radius: 0rem;
  }

  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
  }

  @media (min-width: ${breakpoints.lg}) {
    /* Extra Large Devices */
  }
`;

const SaleTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #24695a;
  margin: 1rem 1.5rem;
  white-space: nowrap;

  @media (max-width: ${breakpoints.xs}) {
    font-size: 1rem;
    border-radius: 0rem;
  }
  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    font-size: 1.5rem;
    border-radius: 0rem;
  }

  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
    font-size: 18px; /* Medium Devices */
  }

  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
    font-size: 20px; /* Large Devices */
  }
`;

const SaleSubTitle = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  color: #24695a;
  margin: 0;
  @media (max-width: ${breakpoints.xs}) {
    font-size: 0.7rem;
    font-weight: 400;
  }
  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    font-size: 1rem;
    font-weight: 400;
  }

  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
    font-size: 1rem;
    font-weight: 400;
  }

  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
    font-size: 1rem;
    font-weight: 400;
  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: 1rem;
    font-weight: 400;
  }
`;

const SaleButton = styled.button`
  padding: 0.8rem 2rem;
  background-color: #24695a;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  margin-right: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  @media (max-width: ${breakpoints.xs}) {
    padding: 0.6rem 1.8rem;
    font-size: 0.6rem;
    white-space: nowrap;
  }
  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    padding: 0.7rem 2.4rem;
    font-size: 0.6rem;
    white-space: nowrap;
  }

  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
  }

  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
  }
`;
