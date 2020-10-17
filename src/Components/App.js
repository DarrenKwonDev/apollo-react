import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";
import Header from "./Header";

function App() {
  return (
    <>
      <Router>
        <Header current={window.location.pathname} />
        <Route path="/" component={Home} exact />
        <Route path="/:id" component={Detail} exact />
      </Router>
    </>
  );
}

export default App;
