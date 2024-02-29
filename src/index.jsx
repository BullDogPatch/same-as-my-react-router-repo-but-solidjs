/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import "./index.css";
import App from "./App";
import ProfilePage from "./components/ProfilePage";
import Home from "./components/Home";

const root = document.getElementById("root");

render(
  () => (
    // <Router>
    //   <App />
    // </Router>
    <Router root={App}>
      <Route path="/profiles/:username" component={ProfilePage} />
      <Route path="/" component={Home} />
    </Router>
  ),
  root
);
