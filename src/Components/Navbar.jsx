import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate, useLocation } from "react-router-dom";
const NavScrollExample = () => {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link onClick={() => navigate("/")} href="#">Home</Nav.Link>
              <Nav.Link  onClick={() => navigate("/category")} href="#">Category</Nav.Link>
            
              <Nav.Link onClick={() => navigate("/add")} href="#">
                Add
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavScrollExample;
