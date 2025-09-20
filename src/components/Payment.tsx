import styled from "styled-components";

function Payment() {
  return (
    <Container>
      <div>
        <p>
          Total <span>$ KES 600.00</span>
        </p>
      </div>

      <div>
        <img src="" alt="" />
        <div>
          <p>Delivery address</p>
          <p>Migingo Primary School, Next to the market</p>
          <div> - </div>
        </div>
        <div>
          <p>Delivery address</p>
          <p>Migingo Primary School, Next to the market</p>
          <div> - </div>
        </div>
      </div>
    </Container>
  );
}

export default Payment;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
