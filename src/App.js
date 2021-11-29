import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SingleRecepie } from "./views/SingleRecepie";
function App() {
  return (
    <Router basename="/greenrecepies">
      <div className="App">
        <Header />
        <div className="container flex-column">
          <Switch>
            <Route path="/" exact={true}></Route>
            <Route path="/bao" component={SingleRecepie}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
