import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">DATAFILM</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Employee">Employee</Nav.Link>
            <Nav.Link href="/listEmployee">InfomationEmployee</Nav.Link>
            <Nav.Link href="/create">CreatEmployee</Nav.Link>
            <Nav.Link href="/delete">DeleteEmployee</Nav.Link>
          </Nav>
      </Navbar>
    </>
  );
}

export default Header;