import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header";
import routes from "./routes/routes";
import Home from "./pages/home";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path={routes.home}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
