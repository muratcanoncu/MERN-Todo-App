import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Switch, Route } from "react-router-dom";
//! Components
import Header from "./Components/Header/Header";
function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path="/" component={() => <p>hello</p>} exact></Route>
          <Route path="/todoadd" component={() => <p>add</p>} exact></Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
