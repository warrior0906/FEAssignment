import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Home } from "./screens";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
