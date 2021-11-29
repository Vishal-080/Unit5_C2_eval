import "./styles.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Book from "./Components/Book/Book";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/book">
          <Book />
        </Route>
      </Switch>
    </div>
  );
}
