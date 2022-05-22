import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Purchase from "./Pages/Purchase/Purchase";
import Header from "./Pages/SharedComponent/Header";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import Signup from "./Pages/Login/Signup";
import Footer from "./Pages/SharedComponent/Footer";

function App() {
  return (
    <div className='max-w-7xl mx-auto px-2'>

      <Header></Header>


      <Routes>

        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/purchase/:productId" element={
          <Purchase></Purchase>
        }></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
