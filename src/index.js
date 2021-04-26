import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import promise from "redux-promise";

import ISSIndex from "./components/iss-index";
import MapISS from "./components/iss-map";
import Container from "./components/container";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Container>
      <ISSIndex/>   
      <MapISS/>
    </Container> 
  </Provider>,
  document.getElementById("root")
);

