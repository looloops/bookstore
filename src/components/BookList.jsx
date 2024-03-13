import Container from "react-bootstrap/esm/Container";
import SingleBook from "./SingleBook";
import Row from "react-bootstrap/esm/Row";
import { Component } from "react";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

class BookList extends Component {
  state = {
    query: "",
  };
  render() {
    return (
      <Container>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Insert book title"
            aria-label="Search"
            aria-describedby="basic-search"
            value={this.state.query}
          />
          <InputGroup.Text>Search</InputGroup.Text>
        </InputGroup>

        <Row>
          {this.props.books.map((book) => (
            <Col sm={6} md={3} lg={4} key={book.asin}>
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
