import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./component/Header";
import { Characters } from "./view/Characters";
import { Tabs } from "./component/Tabs";
import { Planets } from "./view/Planets";
import { Home } from "./view/Home";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div className="container">
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Header />
          <Tabs />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/planets" component={Planets} />
            <Route exact path="/characters" component={Characters} />
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
