import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="blog" element={<Blog />} />
      </Route>
    </Routes>
  );
};

export default App;
