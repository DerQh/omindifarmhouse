import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <FooterContainer>
        <SubContainer>
          <LogoDiv>
            <img src="/logo.jpg" alt="Omindi FarmHouse Logo" />
            <h6>Omigreens</h6>
          </LogoDiv>
          <p>
            Omindi FarmHouse offers fresh organic produce and high-quality
            grocery items, supporting local farmers and promoting healthy,
            sustainable living for our community.
          </p>
          <h6>Accepted Payments</h6>
          <PaymentDiv>
            <img src="/mpesa.svg" alt="Mpesa Logo" />
            <img src="/visa.png" alt="Visa Logo" />
            <img src="/mastercard.png" alt="Mastercard Logo" />
            <img src="/paypal.png" alt="Paypal Logo" />
            <img src="/apple-pay.png" alt="Apple pay" />
          </PaymentDiv>
        </SubContainer>
        <SubContainer>
          <h5>About Us</h5>
          <ul>
            <li>Our Mission</li>
            <li>Our Vision</li>
            <li>Our Values</li>
            <li>Help</li>
            <li>News & Articles</li>
          </ul>
        </SubContainer>
        <SubContainer>
          <h5>Help</h5>
          <ul>
            <li>Omigreens Help Center</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Shipping & Delivery</li>
            <li>Returns & Exchanges</li>
          </ul>
        </SubContainer>
      </FooterContainer>
      <Divider />
      <FooterDivs>
        <div>
          <FooterItemDiv>
            <FooterImg src="/seller.png" alt="" />
            <FooterText>Become a Seller</FooterText>
          </FooterItemDiv>
          <FooterItemDiv>
            <FooterImg src="/gift.png" alt="" />
            <FooterText>Gift Cards</FooterText>
          </FooterItemDiv>
          <FooterItemDiv>
            <FooterImg src="/question.png" alt="" />
            <FooterText>Help Center</FooterText>
          </FooterItemDiv>
        </div>
        <div>
          <FooterText>Terms of Use</FooterText>
        </div>
        <FooterText>
          All Rights reserved Omigreens @ <span>2025</span>
        </FooterText>
      </FooterDivs>
    </Container>
  );
}

export default Footer;

const breakpoints = {
  xs: "576px", // Extra Small Devices
  sm: "768px", // Small Devices
  md: "992px", // Medium Devices
  lg: "1200px", // Large Devices
};

const Container = styled.div`
  background-color: #f2f4ec;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid red; */
`;

const FooterContainer = styled.footer`
  /* border: 1px solid red; */
  max-width: 1500px;
  color: #111313;
  padding: 4rem 1rem;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  border-bottom: 0.1px solid red;
  flex-wrap: wrap;
  @media (max-width: ${breakpoints.xs}) {
    padding: 1.5rem;
    gap: 1rem;
    justify-content: space-around;
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
    /* font-size: 18px; */
    /* padding: 10px; */
  }

  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
    /* font-size: 20px; */
    /* padding: 10px; */
  }
`;

const SubContainer = styled.div`
  height: 300px;
  max-width: 350px;
  margin: 0;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  text-align: left;
  gap: 1rem;
  @media (max-width: ${breakpoints.xs}) {
    height: 200px;
    margin: 0;
    padding: 10px 0px;
    gap: 2px;
    text-align: center;
  }

  p {
    font-size: 0.8rem;
    color: #161313;
    text-align: left;
  }
  h6 {
    font-size: 1.2rem;
    font-weight: 500;
    color: #070707;
    margin-bottom: 0.5rem;
    @media (max-width: ${breakpoints.xs}) {
      margin-top: 10px;
      font-size: 1.1rem;
    }
  }
  h5 {
    font-size: 0.8rem;
    font-weight: 500;
    color: #070707;
    margin-bottom: 1rem;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 0.5rem;
    @media (max-width: ${breakpoints.xs}) {
      gap: 0.2rem;
    }

    li {
      font-size: 0.8rem;
      color: #161313;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
const LogoDiv = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
  /* border: 2px solid #24695a; */
  padding: 0;
  margin: 0;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
  }
  h6 {
    font-size: 1.5rem;
    font-weight: 550;
    color: #24695a;
    margin: 0;
  }
`;
const PaymentDiv = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  img {
    background-color: white;
    border-radius: 0.3rem;
    padding: 0.1rem 0.3rem;
    width: 30px;
    height: 30px;
    object-fit: contain;
  }
`;
const Divider = styled.div`
  /* width: 100%; */
  max-width: 1200px;
  height: 2px;
  background-color: #000000;
  margin: 1rem 0;
`;

const FooterDivs = styled.div`
  /* width: 100%; */
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin: 0;
  div {
    display: flex;
    padding: 0;
    align-items: center;
    /* justify-content: center; */
    justify-content: space-between;
  }
`;

const FooterImg = styled.img`
  width: 15px;
  height: 15px;
  color: red;
`;

const FooterText = styled.p`
  font-size: 0.7rem;
  font-weight: 300;
  color: gray;
  margin-right: 5px;
`;
const FooterItemDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  margin: 0 15px;

  @media (max-width: ${breakpoints.xs}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* border: 1px solid red; */
    text-align: center;
  }
`;
// Service: Bolo Dialer
// Voucher:2709061/1266181388
// Serial Number:13329551
// Expiry Date:2050-01-01
// Transaction ID: 41125178
// Successful

// Thank you for using SADAD!
