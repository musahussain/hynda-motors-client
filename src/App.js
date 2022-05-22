import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Purchase from "./Pages/Purchase/Purchase";
import Header from "./Pages/SharedComponent/Header";

function App() {
  return (
    <div className='max-w-7xl mx-auto px-2'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/purchase" element={<Purchase></Purchase>}></Route>
      </Routes>
    </div>
  );
}

export default App;
