import { Routes, Route } from "react-router-dom";

//pages
import Home from "./home/Home";
import Login from "./login/Login";
import SegmentaOnline from "./segmenta-online/SegmentaOnline";
import Ticket from "./ticket/Ticket";


export default function index(){
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/ticket" element={<Ticket/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/segmenta-online" element={<SegmentaOnline/>} />
    </Routes>
  )
}