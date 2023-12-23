import { useState } from 'react'
import './App.css'
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard/>} />

    </Routes>


  )
}

export default App
