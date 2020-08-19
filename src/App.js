import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./component/Header";
import { Characters } from "./view/Characters";
import { Tabs } from "./component/Tabs";
import { Planets } from "./view/Planets";
import injectContext from "./store/appContext";

function App() {
  return (
    <div className="container">
      <Header />
      <Tabs />
      <Characters />
      <Planets />
    </div>
  );
}

export default injectContext(App);
