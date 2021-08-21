import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/Home/HomePage";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
    </>
  );
};

export default App;
