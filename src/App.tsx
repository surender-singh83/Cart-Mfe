import "./App.css";
import React from "react";
const CartApp = React.lazy(() => import("./CartApp"));

function App() {
  return (
    <>
      <CartApp />
    </>
  );
}

export default App;
