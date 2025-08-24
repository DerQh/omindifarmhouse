import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  background-color: aliceblue;
  margin: 0 auto;
  /* text-align: center; */
`;

const Navbar = styled.nav`
  background-color: darkblue;
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

const Logo = styled.div`
  font-size: 1.5rem;
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
    border-color: darkblue;
  }
`;

function App() {
  return (
    <Container>
      <Logo> FarmHouse</Logo>
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
      <SearchInput placeholder="Search..." />
    </Container>
  );
}

export default App;
