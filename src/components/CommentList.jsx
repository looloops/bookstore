import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup"

class CommentList extends Component {
    state = {
    comments: [],
    isLoading: true,
    isError: false,
  };
  fetchComments = () => {
    const idBook = this.props.idBook
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {idBook})
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Problema nella chiamata API");
      }
    })

    .then ((commentsFromAPI)=>{
        this.setState({
            comments:commentsFromAPI,
            isLoading:false,
        })
    }
    )
    .catch((error)=> {
        console.log("Errore", error)
        this.setState({
            isLoading:false,
            isError:true,
        })
    }

    )
  }};

  componentDidMount(){
    this.fetchComments()
  }
    render() {
        return(
         {this.state.comments.length === 0 && this.state.isLoading === false && this.state.isError === false && (
             <ListGroup.Item>Aggiungi il primo commento a questo libro.
             <AddComment/>
             </ListGroup.Item>
           );
         }
         {
           this.state.isLoading === true && (
             <div>
               <Spinner animation="border" variant="success" />
             </div>
           );
         }
         {
           this.state.isError === true && (
             <div>
               <Alert>Qualcosa è andato storto</Alert>
             </div>
           );
         }
         {
           this.state.comments.map((oneComment) => {
             return (
                <ListGroup.Item key={singleComment._id}>{singleComment.comment}</ListGroup.Item>;)
           });
         }
    )}

}