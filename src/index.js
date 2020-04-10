import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "mobx-react";
// import Catstore from "./stores/cat/CatStore";
// import CounterStore from "./stores/counter/CounterStore";
import RootStore from "./stores/RootStore";

const root = new RootStore();
console.log(root);

// const catStore = new Catstore();
// const counterStore = new CounterStore();

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider catStore={catStore} counterStore={counterStore}> */}
    {/*{...root}는 root안에 있는걸 다 풀어서줌 */}
    <Provider {...root}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
