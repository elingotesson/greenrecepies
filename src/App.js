import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SingleRecepie } from "./views/SingleRecepie";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas, faCheckSquare, faCoffee, faUserFriends);

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
