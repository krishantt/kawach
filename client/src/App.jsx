import { useState } from "react";
import "./App.css";
import Login from "./pages/login";
// import Component from './pages/tabs';

//import Dashboard from './pages/dashboard';
import { Routes, Route } from "react-router-dom";
import Component from "./pages/dashboard";
import MyComponent from "./pages/landing_page";
// import MyComponent from './pages/landing_page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MyComponent />} />
      <Route path="/login" element={<Login />} />

      <Route path="/dashboard" element={<Component />} />
      {/* <Route path="/tabs" element={<Component/>} /> */}
    </Routes>
  );
}

export default App;
