import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 85dvw;
  height: 70dvh;
  padding: 1rem;
  background-image: url("/main.jpg"); /* Path to the image in the public folder */
  background-size: cover; /* Cover the entire div */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Prevent repeating */
  /* margin: 5rem; */
  border-radius: 1rem;
`;

const SubContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85dvw;
`;

const Subheading = styled.h1`
  font-size: 2.1rem;
  font-style: oblique;
  font-weight: bold;
`;

const Paragraphone = styled.p`
  margin: 0 1rem;
`;

const ShoppingButton = styled.button`
  background-color: #e5f40e;
  position: absolute;
  top: 80%;
  left: 10%;
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
