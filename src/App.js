import Header from "./componentes/Header/Header";

import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./componentes/Home/Home";
import Destination from "./componentes/Destination/Destination";
import Blog from "./componentes/Blog/Blog";
import Contact from "./componentes/Contact/Contact";
import Login from "./componentes/Login/Login";
import Bg from "./images/Bg.png";

export default function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${Bg})`
      }}
    >
      <Header></Header>

      <Router>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Destination">
            <Destination />
          </Route>
          <Route path="/Blog">
            <Blog />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Login"></Route>
        </Switch>
      </Router>
    </div>
  );
}
