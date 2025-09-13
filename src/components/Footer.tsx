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
          <div>
            <FooterImg src="/seller.png" alt="" />
            <FooterText>Become a Seller</FooterText>
          </div>
          <div>
            <FooterImg src="/gift.png" alt="" />
            <FooterText>Gift Cards</FooterText>
          </div>
          <div>
            <FooterImg src="/question.png" alt="" />
            <FooterText>Help Center</FooterText>
          </div>
        </div>
        <div>
          <FooterText>
            Terms of Use <span>Privacy policy</span>
          </FooterText>
        </div>
        <FooterText>
          All Rights reserved by Omigreens @ <span>2025</span>
        </FooterText>
      </FooterDivs>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  width: 100%;
  margin: auto 0;
  background-color: #f2f4ec;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const FooterContainer = styled.footer`
  width: 100%;
  max-width: 1500px;
  color: #111313;
  padding: 4rem 1rem;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  flex-wrap: wrap;
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
  /* gap: 1rem; */
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
  width: 100%;
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
  width: 100%;
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
  width: 100%;
  max-width: 1200px;
  height: 2px;
  background-color: #000000;
  margin: 1rem 0;
`;

const FooterDivs = styled.div`
  width: 100%;
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
    justify-content: center;
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
`;
