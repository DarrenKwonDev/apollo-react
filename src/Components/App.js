import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";

function App() {
  return (
    <>
      <Router>
        <Route path="/" component={Home} exact />
        <Route path="/:id" component={Detail} exact />
      </Router>
    </>
  );
}

export default App;
