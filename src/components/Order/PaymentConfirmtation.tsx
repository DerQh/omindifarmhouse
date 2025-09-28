import styled from "styled-components";

function PaymentConfirmation() {
  return (
    <Container>
      <Total>
        Total <span>KES 600.00</span>
      </Total>

      <Section>
        <Details>
          <Icon src=" delivery.png" alt="delivery" />
          <div>
            <Label>Delivery address</Label>
            <SubLabel>Migingo Primary School, Next to the market...</SubLabel>
          </div>
        </Details>
        <DropdownIcon>⌄</DropdownIcon>
      </Section>

      <Section>
        <Details>
          <Icon src="payicon.png" alt="cardicon" />
          <div>
            <Label>Method of Payment</Label>
            <SubLabel>CARD</SubLabel>
          </div>
        </Details>
        <DropdownIcon>⌄</DropdownIcon>
      </Section>

      <Section>
        <Details>
          <CreditIcon src="credit-card.png" alt="card" />
          <div>
            <Label>**** **** **** 1234</Label>
            <SubLabel>
              Expiry <span>09/25</span>
            </SubLabel>
          </div>
        </Details>
        <ChangeButton>Change</ChangeButton>
      </Section>

      <ConfirmButton>Confirm and Pay</ConfirmButton>
    </Container>
  );
}

export default PaymentConfirmation;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

  button {
    padding: 15px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    margin-top: 20px;
  }
`;

const Total = styled.h2`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 20px 0;
  font-size: 16px;
  font-weight: bold;
  span {
    text-align: end;
  }
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 20px;
  padding: 10px 0;
  border-bottom: 1px solid lightgray;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const CreditIcon = styled.img`
  width: 50px;
  height: 50px;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  div {
    margin-left: 10px;
  }
`;

const Label = styled.p`
  color: black;
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 5px;
`;

const SubLabel = styled.p`
  color: gray;
  font-size: 12px;
  margin-bottom: 5px;
`;

const DropdownIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 20px;
  height: 37px;
  /* border: 1px solid gray; */
  /* border-radius: 50%; */
  font-size: 12px;
  color: gray;
  cursor: pointer;
`;

const ChangeButton = styled.p`
  font-size: 12px;
  cursor: pointer;
  border: 1px solid gray;
  padding: 8px 15px;
  border-radius: 25px;
  &:hover {
    background-color: #878787;
    color: white;
    /* border: 1px solid black; */
  }
`;

const ConfirmButton = styled.button`
  background-color: black;
  color: white;
  font-size: 16px;
  font-weight: 500;
  border-radius: 25px;
  cursor: pointer;
  margin: 30px 20px 0;
  padding: 15px;
  &:hover {
    background-color: #878787;
    color: #0f0f0f;
  }
`;
