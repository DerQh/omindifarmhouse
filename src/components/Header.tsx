import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* max-width: 1280px; */
  margin: 0 1rem;
  text-align: center;
`;

const Navbar = styled.nav`
  display: none;
  color: white;
  padding: 1rem;
`;

const Navitem = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  color: red;
  background-color: black;
  /* margin: 0 1rem; */
`;

const Webname = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;
const Navlinks = styled.a`
  color: red;
  text-decoration: none;
  padding: 0.5rem 1rem;

  &:hover {
    background-color: darkblue;
    color: white;
  }
`;

const Signup = styled.li`
  color: red;
  text-decoration: none;
  /* padding: 0.5rem 1rem */

  &:hover {
    background-color: darkblue;
    color: white;
  }
`;
const SearchInput = styled.input`
  padding: 0.5rem;
  border: 1px solid darkblue;
  border-radius: 4px;

  &:focus {
    outline: none;
    /* border-color: darkblue; */
  }
`;

const Toggle = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
`;

const Line = styled.div`
  height: 3px;
  background-color: black;
  border-radius: 2px;
  transition: all 0.3s ease;
  &:nth-child(1) {
    width: 90%;
  }
  &:nth-child(2) {
    width: 60%;
  }
  &:nth-child(3) {
    width: 30%;
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
`;
const Image = styled.img`
  max-width: 100%;
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

function Header() {
  return (
    <Container>
      <Toggle>
        <Line />
        <Line />
        <Line />
      </Toggle>
      <SearchInput placeholder="Search..." />

      <Navbar>
        <Navitem>
          <li>
            <Navlinks href="#">Home</Navlinks>
          </li>
          <li>
            <Navlinks href="#">About</Navlinks>
          </li>
          <li>
            <Navlinks href="#">Contact</Navlinks>
          </li>
          <Signup>
            <Navlinks href="#">Sign Up</Navlinks>
          </Signup>
        </Navitem>
      </Navbar>
      <Logo>
        <Webname> OmiGreens</Webname>
        <Image src="/public/logo.jpg" alt="FarmHouse Logo" />
      </Logo>
    </Container>
  );
}

export default Header;
