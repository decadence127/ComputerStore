import "./App.css";
import React from "react";
import AppRouter from "./AppRouter";
import HeaderComponent from "./components/header/HeaderComponent";
function App() {
  return (
      <>
        <HeaderComponent />
        <AppRouter />
      </>
  );
}

export default App;
