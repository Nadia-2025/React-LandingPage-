import "./App.css";
import Card from "./Card";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import Newsletter from "./Newsletter";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Jumbotron></Jumbotron>
      <Card></Card>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}

export default App;
