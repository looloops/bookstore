import "./App.css";
import BookList from "./components/BookList";
import Welcome from "./components/Welcome";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import books from "./data/fantasy.json";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <BookList books={books} />
      <MyFooter />
    </>
  );
}
export default App;
