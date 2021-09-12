import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Posts from "./pages/Posts";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/posts" component={Posts} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
