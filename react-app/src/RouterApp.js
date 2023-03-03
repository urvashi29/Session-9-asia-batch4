import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./Components/Counter";
import CounterDec from "./Components/CounterDec";
import GetData from "./Components/GetData";
import { Link } from "react-router-dom";

const About = () => {
  return <CounterDec />;
};

const Home = () => {
  return (
    <>
      <Counter /> <GetData />
    </>
  );
};

const RouterApp = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
