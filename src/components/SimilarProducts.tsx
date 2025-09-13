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

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1000px;
  margin: 2rem auto;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const ProductCard = styled.div`
  width: 200px;
  height: 300px;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  width: 100%;
  text-align: left;
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;
`;

const Price = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0.5rem 0 0 0;
`;

const VendorImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0.5rem 0 0 0;
`;

const Grams = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #666;
  margin: 0.3rem 0 0 0;
`;
const VendorName = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #666;
  margin: 0.3rem 0 0 0;
`;
const CartButton = styled.button`
  padding: 1rem;
  text-align: center;
  margin: 1.5rem 0 0 0;
  width: 40px;
  height: 40px;
  display: flex;
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
`;
// Additional styled components that might be useful in ProductMain.ts
