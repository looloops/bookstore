import Card from "react-bootstrap/Card";
import { Component } from "react";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    const item = this.props.book;
    return (
      <>
        <Card className={this.state.selected && "card-selected"}>
          <Card.Img
            style={{ width: "100%", objectFit: "cover", height: "600px" }}
            variant="top"
            src={item.img}
            onClick={() => this.toggleSelection()}
          />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              <span>Category: {item.category}</span>
              <br />
              <span>Price: {item.price}</span>
            </Card.Text>
          </Card.Body>
        </Card>

        {this.state.selected && <CommentArea idBook={item.asin} bookSelected={this.state.selected} />}
      </>
    );
  }
  toggleSelection() {
    this.setState({
      selected: !this.state.selected,
    });
  }
}

export default SingleBook;
