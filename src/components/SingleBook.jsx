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
            style={{ width: "100%", "object-fit": "cover", height: "600px" }}
            variant="top"
            src={item.img}
            onClick={() => this.toggleSelection()}
          />
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
        <CommentArea idBook={this.props._id} />
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
