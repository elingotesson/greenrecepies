import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SingleRecepie, Home } from "./views";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faUserFriends,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";

library.add(fab, fas, faCheckSquare, faCoffee, faUserFriends, faCheck);

function App() {
  return (
    <Router basename="/greenrecepies">
      <div className="App">
        <Header />
        <div className="container flex-column">
          <ScrollToTop>
            <Switch>
              <Route path="/" exact={true} component={Home}></Route>
              <Route path="/bao" component={SingleRecepie}></Route>
              <Route path="/recepie" component={SingleRecepie}></Route>
            </Switch>
          </ScrollToTop>
        </div>
      </div>
    </Router>
  );
}

export default App;
