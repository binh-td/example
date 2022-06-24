import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Page404 from "./components/Page404";
import PrivateRoute from "./routes/PrivateRoute";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route path="/auth/login" exact>
          <Login />
        </Route>
        <PrivateRoute />
      </Switch>
    </Router>
  );
}

export default App;
