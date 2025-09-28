import styled from "styled-components";

function SimilarProducts() {
  return (
    <MainContainer>
      <Title>Similar Products</Title>
      <ProductsContainer>
        <ProductCard>
          <VendorImage src="/avocado.jpeg" alt="Product 1" />
          <ProductName>Fresh Avocadoes</ProductName>
          <VendorName>Alendu Farm Markets</VendorName>
          <Grams>1kg</Grams>
          <Price>Ksh 19.99</Price>
          <CartButton>+</CartButton>
        </ProductCard>
        <ProductCard>
          <VendorImage src="/banana.jpg" alt="Product 2" />
          <ProductName>Ripe Bananas</ProductName>
          <VendorName>Alendu Farm Markets</VendorName>
          <Grams>1kg</Grams>
          <Price>Ksh 12.99</Price>
          <CartButton>+</CartButton>
        </ProductCard>
        <ProductCard>
          <VendorImage src="/mango.jpeg" alt="Product 3" />
          <ProductName>Sweet Mangoes</ProductName>
          <VendorName>Alendu Farm Markets</VendorName>
          <Grams>1kg</Grams>
          <Price>Ksh 29.99</Price>
          <CartButton>+</CartButton>
        </ProductCard>
        <ProductCard>
          <VendorImage src="/orange.jpg" alt="Product 4" />
          <ProductName>Juicy Oranges</ProductName>
          <VendorName>Alendu Farm Markets</VendorName>
          <Grams>1kg</Grams>
          <Price>Ksh 15.99</Price>
          <CartButton>+</CartButton>
        </ProductCard>
      </ProductsContainer>
    </MainContainer>
  );
}

export default SimilarProducts;

const breakpoints = {
  xs: "576px", // Extra Small Devices
  sm: "768px", // Small Devices
  md: "992px", // Medium Devices
  lg: "1200px", // Large Devices
};

const MainContainer = styled.div`
  max-width: 1000px;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1.5rem;
  flex-wrap: wrap;
`;

const ProductCard = styled.div`
  width: 200px;
  height: 300px;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 0.5rem;
  margin: 0 auto;
  text-align: center;

  @media (max-width: ${breakpoints.xs}) {
    font-size: 18px;
    /* width: 150px; */
    width: 40%;
    height: 280px;
    padding: 10px;
    /* gap: 1px; */
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    font-size: 18px;
    width: 40%;
    height: 300px;
    padding: 10px;
  }

  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
    font-size: 20px;
    height: 350px;

    /* padding: 10px; */
  }

  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
    /* font-size: 22px; */
  }

  @media (min-width: ${breakpoints.lg}) {
    /* font-size: 24px; */
  }
`;

const Title = styled.h2`
  text-align: left;
  font-size: 1.8rem;
  font-weight: 600;
  margin-left: 1.5rem;
  font-weight: 600;
  color: #122d27;
  /* padding-left: 1.5rem; */
  @media (max-width: ${breakpoints.xs}) {
    font-size: 18px;
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    font-size: 18px;
  }

  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
    font-size: 20px;
  }

  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
    /* font-size: 22px; */
  }

  @media (min-width: ${breakpoints.lg}) {
    /* font-size: 24px; */
  }
`;

const Price = styled.h3`
  font-size: 1.2rem;
  font-weight: 450;
  margin: 0.5rem 0 0 0;
  @media (max-width: ${breakpoints.xs}) {
    font-size: 16px;
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    font-size: 18px;
  }

  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
    font-size: 20px;
  }

  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
    /* font-size: 22px; */
  }

  @media (min-width: ${breakpoints.lg}) {
    /* font-size: 24px; */
  }
`;

const VendorImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  @media (max-width: ${breakpoints.xs}) {
    width: 90px;
    height: 90px;
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    width: 105px;
    height: 105px;
  }

  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
    width: 120px;
    height: 120px;
  }

  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
  }

  @media (min-width: ${breakpoints.lg}) {
  }
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0.5rem 0 0 0;
  @media (max-width: ${breakpoints.xs}) {
    font-size: 16px;
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    font-size: 18px;
  }

  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
    font-size: 20px;
  }

  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
    /* font-size: 22px; */
  }

  @media (min-width: ${breakpoints.lg}) {
    /* font-size: 24px; */
  }
`;

const Grams = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #666;
  /* margin: 0.3rem 0 0 0; */
  @media (max-width: ${breakpoints.xs}) {
    font-size: 12px;
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    font-size: 18px;
  }

  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
    font-size: 20px;
  }
`;
const VendorName = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #666;
  margin: 0.3rem 0 0 0;
  line-height: 18px;
`;

const CartButton = styled.button`
  margin-top: 5px;
  /* padding: 1rem; */
  text-align: center;
  /* margin: 1.5rem 0 0 0; */
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #24695a;
  color: #f2f4ec;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    outline: none;
    border: 2px solid #24695a;
    background-color: #f2f4ec;
    color: #24695a;
  }
  @media (max-width: ${breakpoints.xs}) {
    width: 30px;
    height: 30px;
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    width: 35px;
    height: 35px;
  }
`;
// Additional styled components that might be useful in ProductMain.ts
