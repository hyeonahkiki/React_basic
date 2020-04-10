import React from "react";
import Counter from "./components/counter";
import Cat from "./components/cat";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/nav";
import StoreCat from "./components/storecat";
import Counter2 from "./components/counter2";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

//Switch : java switch문같은 느낌
//Route path="경로입력" component="보여줄 components"
// /일때 counter만들려면 exact를 써준다.
// BrowserRouter :
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" component={Counter} exact />
          <Route path="/cat" component={Cat} />
          <Route path="/storecat" component={StoreCat} />
          <Route path="/counter2" component={Counter2} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
