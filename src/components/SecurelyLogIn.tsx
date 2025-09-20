import React, { useState } from "react";
import styled from "styled-components";

const ExpandableOverlay: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Container isOpen={isOpen}>
      <Overlay isOpen={isOpen} onClick={toggleOpen} />
      <Content isOpen={isOpen}>
        {/* <CloseButton onClick={toggleOpen}>×</CloseButton> */}
        <LockDiv>
          <LockImg src="/lock.png" alt="" />
        </LockDiv>
       
        <p>Securely logging you in..</p>
        <p>
          You will be securely logged in using your email or registered phone
          number
        </p>
      </Content>
      <ToggleButton onClick={toggleOpen}>
        {isOpen ? "Collapse" : "Expand"}
      </ToggleButton>
    </Container>
  );
};

export default ExpandableOverlay;

const Container = styled.div<{ isOpen: boolean }>`
  position: relative;
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 999;
`;

const Content = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  max-width: 500px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease;
  max-height: ${({ isOpen }) => (isOpen ? "400px" : "0")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & :nth-child(2) {
    color: green;
    font-size: 16px;
  }
  & :nth-child(3) {
    color: gray;
    font-size: 12px;
    text-align: center;
    margin: 10px 70px 80px;
  }
`;

const ToggleButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

// const CloseButton = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   background: none;
//   border: none;
//   font-size: 24px;
//   cursor: pointer;
//   color: #333;

//   &:hover {
//     color: #a58484;
//   }
// `;

const LockDiv = styled.div`
  border-radius: 50%;
  border: 4px solid #ac7777;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 90px 0 25px;
`;
const LockImg = styled.img`
  max-width: 30px;
  max-height: 30px;
  object-fit: cover;
`;

// COLOR IN DIV
