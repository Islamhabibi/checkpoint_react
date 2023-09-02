import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Container, Row,Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg" >
        <Navbar.Brand href="#">My App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* Heading  */}
      <h1>React js checkpoint </h1>
      <Container>
        <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://media.geeksforgeeks.org/wp-content/uploads/20230803114309/Learn_ReactJS.webp" />
              <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://media.geeksforgeeks.org/wp-content/uploads/20230803114309/Learn_ReactJS.webp" />
              <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://media.geeksforgeeks.org/wp-content/uploads/20230803114309/Learn_ReactJS.webp" />
              <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
    </div>
    
  );
}

export default App;
