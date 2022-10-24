import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./components/aboutUs";
import ContactUs from "./components/contactUs";
import Courses from "./components/courses";
import Help from "./components/help";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Product from "./components/product";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home data="Vue" />} />
        <Route path="/product" element={<Product />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/course/:id" element={<Courses />} />
        {/* <Route path="/course/1" element={<Courses />} />
        <Route path="/course/2" element={<Courses />} />
        <Route path="/course/3" element={<Courses />} />
        <Route path="/course/4" element={<Courses />} /> */}
      </Routes>
    </>
  );
};

export default App;
