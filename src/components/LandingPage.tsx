import styled from "styled-components";

const Container = styled.div`
  background-color: #f8f9fa;
  padding: 1rem 0;
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

const MainImage = styled.img`
  height: 80px;
  width: 80px;
`;

const Paragraphone = styled.p`
  margin: 0 1rem;
`;

const ShoppingButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ImageTwo = styled.img`
  height: 80px;
  width: 80px;
`;

function LandingPage() {
  return (
    <>
      <Container>
        {/* This is the main content area */}
        <SubContainer1>
          <Subheading>Fresh organic vegetables for the village</Subheading>
          <MainImage src="/src/assets/vegetable.png" alt="" />
        </SubContainer1>
        {/* Main picture code starts here */}

        <ShoppingButton>Start Shoping</ShoppingButton>
        <div>
          <Paragraphone>
            Discover the taste of homegrown goodness.Grown by local farmers.
          </Paragraphone>
          <ImageTwo src="/src/assets/main.jpg" alt="" />
          <p>
            Join our community of farmers and enjoy fresh produce delivered to
            your door.
          </p>
        </div>
      </Container>
    </>
  );
}

export default LandingPage;
