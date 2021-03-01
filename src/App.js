import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";

function App() {
  return (
    <div id="all">
      <Router basename="/">
          <NavTabs />
          <Header />
          <Switch>
            <Route exact path="/react-portfolio" component={Home} />
            <Route exact path="react-portfolio/projects" component={Projects} />
            <Route exact path="react-portfolio/about" component={About} />
            <Route path="/react-portfolio/" component={Home} />
          </Switch>
          <Footer />
      </Router>
    </div>
  );
}

export default App;


