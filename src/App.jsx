import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Portfolio from "./components/pages/portfolio/Portfolio";
import Contact from "./components/pages/contact/Contact";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Portfolio" element={<Portfolio />} />
                <Route path="/Tentang Saya" element={<Contact />} />
            </Routes>
        </>
    );
}

export default App;
