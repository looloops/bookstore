import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

function AddComment() {
  return (
    <InputGroup>
      <Form.Control placeholder="Add comment" aria-label="Comment" aria-describedby="basic-addon1" />
    </InputGroup>
  );
}

export default AddComment;
