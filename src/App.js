import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Products from "./pages/Products";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import PrivateRoute from "./components/PrivateRoute";
import ScrollButton from "./components/ScrollButton";
export default function App() {
  return (
    <Router>
      <Navbar />
      <Alert />
      <ScrollButton />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={ProductDetails} />

        <PrivateRoute path="/checkout">
          <Checkout />
        </PrivateRoute>

        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
