import React from "react";
import Info from "./aside/Info";
import Main from "./main/Main";
import AppWrapper from "./AppStyled";

function App() {
  return (
    <AppWrapper>
      <Info />
      <Main />
    </AppWrapper>
  );
}

export default App;
