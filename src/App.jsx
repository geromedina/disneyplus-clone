import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Header from './components/Header';
import "./App.css"

function App() {
  return (
  <div>
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/' element={<Login />} />
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
