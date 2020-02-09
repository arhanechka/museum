import React from "react";
import "./App.css";
import MainInfo from "./components/Main/MainInfo";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbary";
import Page1 from "./components/Pages/Page";
import Page2 from "./components/Pages/Page2";
import Page3 from "./components/Pages/Page3";

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact component={MainInfo} path="/" />
            <Route exact component={Page1} path="/information" />
            <Route exact component={Page2} path="/photo" />
            <Route exact component={Page3} path="/video" />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
