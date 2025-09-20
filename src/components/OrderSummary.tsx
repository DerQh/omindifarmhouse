import styled from "styled-components";

function OrderSummaryComponent() {
  return (
    <Container>
      <RadioGroup>
        <RadioLabel>
          <Input type="radio" name="option" value="option1" />
          Online Payment
        </RadioLabel>
        <RadioLabel>
          <Input type="radio" name="option" value="option2" />
          Cash on delivery
        </RadioLabel>
        <RadioLabel>
          <Input type="radio" name="option" value="option3" />
          Mpesa on delivery
        </RadioLabel>
      </RadioGroup>
      <PromoCodeSection>
        <Input type="text" placeholder="Add Promo Code" />
        <Button>Apply</Button>
      </PromoCodeSection>
      <Summary>
        <SummaryItem>
          <p>Subtotal</p>
          <Value>KES 259.99</Value>
        </SummaryItem>
        <SummaryItem>
          <p>Delivery Fee</p>
          <Value>KES 50.00</Value>
        </SummaryItem>
        <SummaryItem>
          <p>Coupon Discount</p>
          <Value>-KES 9.99</Value>
        </SummaryItem>
        <SummaryItem>
          <p>Taxes</p>
          <Value>KES 28.00</Value>
        </SummaryItem>
        <Total>
          <Label>Total</Label>
          <Value>KES 289.99</Value>
        </Total>
      </Summary>
      <Button primary>Confirm Order</Button>
      <OfferSection>
        <OfferImage src="/discount.png" alt="Cashback Offer" />
        <OfferText>
          <p>Earn 5% cashback on your first order</p>
          <a href="">Learn More</a>
        </OfferText>
      </OfferSection>
    </Container>
  );
}

const Container = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); */
`;

const RadioGroup = styled.div`
  margin-bottom: 20px;
`;

const RadioLabel = styled.label`
  display: block;
  margin: 10px 0;
  cursor: pointer;
  font-size: 14px;
  color: #8b8b8b;

  input {
    margin-right: 10px;
  }
`;

const PromoCodeSection = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

interface ButtonProps {
  primary?: boolean;
}

const Button = styled.button<ButtonProps>`
  padding: ${({ primary }) => (primary ? "15px 20px" : "15px px")};

  width: ${({ primary }) => (primary ? "100%" : "100px")};
  background-color: ${({ primary }) => (primary ? "#cef16f" : "#1e677f")};
  color: ${({ primary }) => (primary ? "green" : "green")};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: ${({ primary }) => (primary ? "green" : "#0056b3")};
    color: #cef16f;
  }
`;

const Summary = styled.div`
  margin-bottom: 20px;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  font-size: 14px;

  p {
    color: #8b8b8b;
  }
`;

const Label = styled.h6`
  margin: 0;
  color: #555;
`;

const Value = styled.h6`
  margin: 0;
  color: #084d11;
`;

const Total = styled(SummaryItem)`
  font-weight: bold;
  color: #000;
  font-size: 18px;
`;

const OfferSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid #eee;
  font-size: 14px;
`;

const OfferImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 15px;
`;

const OfferText = styled.div`
  color: #555;

  p {
    margin-bottom: 5px;
    color: #084d11;
  }

  a {
    color: #333;
    text-decoration: underline;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default OrderSummaryComponent;
