import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classnames from 'classnames/bind'
import style from './header.module.scss'

const cx = classnames.bind(style)


function Header() {
  return (
    <div className={cx('header_film')}>
      <Navbar bg="dark" variant="dark" >
          <Navbar.Brand href="/Employee">DATAFILM</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/listEmployee">InfomationEmployee</Nav.Link>
            <Nav.Link href="/create">CreatEmployee</Nav.Link>
          </Nav>
      </Navbar>
    </div>
  );
}

export default Header;