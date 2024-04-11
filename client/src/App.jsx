import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { AllRoutes } from "./AllRoutes";

function App() {
  return (
    <>
      <div className="app">
        <header className="app-header">
          <Navbar />
          <div className="app-route">
            <AllRoutes />
          </div>
        </header>
      </div>
    </>
  );
}
export default App;
