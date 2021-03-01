import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";

function App() {
  return (
    <Router basename="/">
      <div id="all">
        <NavTabs />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
          <Route component={Home} />
        </Switch>
        <Footer />

      </div>
    </Router >
  );
}

export default App;


