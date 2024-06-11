import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Courses from "./Courses";
import Home from "./Home";
import NotFound from "./NotFound";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="courses" element={<Courses />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
