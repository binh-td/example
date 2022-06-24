import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Cart from "../components/Cart";
import Home from "../components/Home";
import Page404 from "../components/Page404";
import DefaultLayout from "../layouts/DefaultLayout";
import { useSelector } from "react-redux";

export default function PrivateRoute(props) {

  const { user } = useSelector(state => state.auth)

  if(!user) {
    return <Redirect to="/auth/login"/>
  }

  return (
    <DefaultLayout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </DefaultLayout>
  );
}
