import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
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
        <footer className="app-footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}
export default App;
