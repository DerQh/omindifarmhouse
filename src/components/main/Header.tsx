import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* max-width: 1280px; */
  /* margin: 0 1rem;  TO REVIEW*/
  padding: 1rem 1.5rem;
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
  font-weight: 500;
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

  &:hover {
    background-color: darkblue;
    color: white;
  }
`;
const SearchInput = styled.input`
  padding: 0.3rem;
  border: 0.5px solid gray;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    outline: none;
    font-size: 16px;
  }
  &::placeholder {
    font-size: 12px;
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
  height: 2px;
  background-color: black;
  border-radius: 2px;
  transition: all 0.3s ease;
  &:nth-child(1) {
    width: 80%;
  }
  &:nth-child(2) {
    width: 60%;
  }
  &:nth-child(3) {
    width: 40%;
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
`;
const Image = styled.img`
  /* max-width: 100%; */
  height: 35px;
  width: 35px;
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
      {/* <SearchInput placeholder="Search..." /> */}

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
        <Webname> Omigreens</Webname>
        <Image src="/logo.jpg" alt="FarmHouse Logo" />
      </Logo>
    </Container>
  );
}

export default Header;
