import React, { useState } from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import GameDetailsPage from "./views/GameDetailsPage";
import GamesPage from "./views/GamesPage";
import NewsPage from "./views/NewsPage";
import LoginRegisterPage from "./views/LoginRegisterPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  // Stan dla rozmiaru czcionki
  const [fontSize, setFontSize] = useState("16px");

  // Funkcja do zmiany rozmiaru czcionki
  const changeFontSize = (newSize) => {
    setFontSize(newSize);
  };

  return (
    <Router>
      <div style={{ fontSize }}>
        <NavBar changeFontSize={changeFontSize} />
        <Routes>
          <Route path="/" element={<GamesPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/login" element={<LoginRegisterPage />} />
          <Route path="/game/:id" element={<GameDetailsPage />} />
          <Route path="*" element={<>Page not found</>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
