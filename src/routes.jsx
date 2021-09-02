import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
  Redirect,
} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import Cart from "./Pages/Cart/Cart";
import Authentication from "./Pages/Auth/Authentication";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/details/:id" exact component={Details} />
        <Route path="/auth" exact component={Authentication} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;
