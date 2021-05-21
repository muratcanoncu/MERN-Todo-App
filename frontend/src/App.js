import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter } from "react-router-dom";
//! Components
import Header from "./Components/Header/Header";
import Container from "./Components/mainContainer/mainContainer";
function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Header></Header>
        <Container></Container>
      </div>
    </HashRouter>
  );
}

export default App;
