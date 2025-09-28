import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 85dvw;
  height: 70dvh;
  padding: 1rem;
  /* margin: 5rem; */
  border-radius: 1rem;
`;

const SubContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  width: 85dvw;
`;

const Subheading = styled.h1`
  font-size: 3.2rem;
  text-align: center;
  font-weight: bolder;
  color: #121212;
  margin: 1rem 0;
  /* backdrop-filter: blur(1px);
  background: rgba(85, 154, 57, 0.2);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem; */
`;

const Paragraphone = styled.p`
  margin: 0 1rem;
  color: #fff;
  font-size: rem;
`;

const ShoppingButton = styled.button`
  background-color: #e5f40e;
  /* position: absolute;
  top: 80%;
  left: 10%; */
  cursor: pointer;
  color: #0e530a;
  border: none;
  padding: 0.6rem 1.5rem;
  border-radius: 0.6rem;
  font-size: large;
  font-weight: 600;

  &:hover {
    color: #e5f40e;
    background-color: #0e530a;
  }
`;

const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

function LandingPage() {
  return (
    <ContainerMain>
      <SubContainer1>
        <Subheading>Fresh organic vegetables for the village</Subheading>
      </SubContainer1>
      <Container>
        <ShoppingButton>Start Shoping</ShoppingButton>
        <div>
          <Paragraphone>
            Discover the taste of homegrown goodness.Grown by local farmers.
          </Paragraphone>
        </div>
      </Container>
    </ContainerMain>
  );
}

export default LandingPage;
