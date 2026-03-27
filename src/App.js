import { BrowserRouter, Routes, Route } from "react-router-dom";
import { React } from "react";

import "./App.css";
import "./Styles/NavBar.css";
import "./Styles/Home.css";
import "./Styles/Cat.css";
import "./Styles/RPS.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Cat from "./components/Cat";
import RPS from "./components/RPS";

function App() {
  return (
    <BrowserRouter basename="/All-JavaScript-Proj">
      <div className="App-header">
        <NavBar />
        <Routes>
          <Route path="/All-JavaScript-Proj" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Cat" element={<Cat />} />
          <Route path="/RPS" element={<RPS />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
