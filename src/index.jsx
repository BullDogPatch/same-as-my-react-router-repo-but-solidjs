/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import "./index.css";
import App from "./App";
import ProfilePage from "./components/ProfilePage";
import Home from "./components/Home";

const root = document.getElementById("root");
const queryClient = new QueryClient();

render(
  () => (
    // <Router>
    //   <App />
    // </Router>
    <QueryClientProvider client={queryClient}>
      <Router root={App}>
        <Route path="/profiles/:username" component={ProfilePage} />
        <Route path="/" component={Home} />
      </Router>
    </QueryClientProvider>
  ),
  root
);
