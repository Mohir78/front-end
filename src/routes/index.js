import { Routes, Route } from "react-router-dom";

//pages
import Home from "./home/Home";
import Login from "./login/Login";

import React from 'react'

export default function index(){
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  )
}