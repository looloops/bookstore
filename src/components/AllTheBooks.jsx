import Container from "react-bootstrap/esm/Container";
import items from "../data/fantasy.json";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";
import { Component } from "react";

class AllTheBooks extends Component {
  render() {
    return (
      <Container>
        <Row>
          {items.map((item) => (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Category: {item.category}</li>
                    <li>Price: {item.price}</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
