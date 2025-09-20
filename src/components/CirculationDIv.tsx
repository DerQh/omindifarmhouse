import React from "react";
import styled from "styled-components";

const CircularShapes: React.FC = () => {
  return (
    <Container>
      <Circle1 />
      <Circle2 />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 200px; /* Set the height for the container */
  width: 200px; /* Set the width for the container */
`;

const Circle1 = styled.div`
  position: absolute;
  top: 150px;
  left: 90px;
  height: 200px;
  width: 200px;
  background: #572a2a;
  border-radius: 50%;
`;

const Circle2 = styled.div`
  position: absolute;
  top: 165px;
  left: 105px;
  height: 170px;
  width: 170px;
  background: #fbf9f9;
  border-radius: 50%;
`;

export default CircularShapes;

// https://www.youtube.com/shorts/O0CzjA9E7XQ
