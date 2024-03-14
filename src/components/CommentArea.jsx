import { Component } from "react";
import CommentList from "./CommentList";

class CommentArea extends Component {
  render() {
    return (
      <div className="comment-div">
        <CommentList idBook={this.props._id} />
      </div>
    );
  }
}
export default CommentArea;
