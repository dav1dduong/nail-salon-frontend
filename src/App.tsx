import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import Header from "./components/Header";
import Background from "./components/Background";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <Background /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  );
}
import LandingPage from "./components/LandingPage";

export default App;
