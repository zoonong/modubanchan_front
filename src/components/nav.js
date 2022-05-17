import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const nav = () => {
  return (
    <>
      <br />
      <Navbar bg="light" variant="light" fixed="top">
        <Container>
          <Navbar.Brand href="#home">모두의 반찬</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Following</Nav.Link>
            <Nav.Link href="#features">로그인/회원가입</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default nav;
