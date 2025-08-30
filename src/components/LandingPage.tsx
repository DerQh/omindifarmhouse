import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 400px;
  padding: 1rem 0;
  background-image: url("/src/assets/main.jpg"); /* Path to the image in the public folder */
  background-size: cover; /* Cover the entire div */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Prevent repeating */
`;

const SubContainer1 = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
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
  background-color: #386530;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function LandingPage() {
  return (
    <>
      <Container>
        <SubContainer1>
          <Subheading>Fresh organic vegetables for the village</Subheading>
        </SubContainer1>

        <ShoppingButton>Start Shoping</ShoppingButton>
        <div>
          <Paragraphone>
            Discover the taste of homegrown goodness.Grown by local farmers.
          </Paragraphone>
        </div>
      </Container>
    </>
  );
}

export default LandingPage;
