import styled from "styled-components";

const Subheading = styled.h1`
  font-size: 3.2rem;
  text-align: center;
  font-weight: bolder;
  color: #000000;
  margin: 1rem 0;
`;

const Paragraphone = styled.p`
  margin: 1rem 0;
  color: #ffffff;
  font-size: 1.1rem;
  text-align: center;
  font-weight: 350;
  line-height: 1.5rem;
`;

const ShoppingButton = styled.button`
  background-color: #e5f40e;
  /* background-color: #84c225; */
  cursor: pointer;
  color: #0e530a;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    color: #e5f40e;
    background-color: #0e530a;
  }
`;

const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 80dvh;
  margin: 0 20px;
  /* border: 2px solid #ad1c1c; */
`;

function LandingPage() {
  return (
    <ContainerMain>
      <Subheading>Fresh organic vegetables for the village</Subheading>
      <ShoppingButton>Start Shoping</ShoppingButton>
      <Paragraphone >
        Experience the freshness of locally grown organic vegetables. Delivered directly from village farms to your home, every bite supports sustainable agriculture and healthy living.
      </Paragraphone>
    </ContainerMain>
  );
}

export default LandingPage;
