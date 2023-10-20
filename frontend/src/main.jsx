import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./index.css";
import App from "./App";
import { StateContextProvider } from "./context";
import { Sepolia } from "@thirdweb-dev/chains";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThirdwebProvider
    activeChain={Sepolia}
    clientId="554656b793ac7ff2901d6f3245537680"
  >
    <Router>
      <StateContextProvider>
        {" "}
        <App />{" "}
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);
