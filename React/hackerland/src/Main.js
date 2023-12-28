import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";

const Main = () => {
    return (
        <Container className="mb-4">
            <BrowserRouter>
                <Header />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
            </Routes>
            </BrowserRouter>

        </Container>
    );
};

export default Main;