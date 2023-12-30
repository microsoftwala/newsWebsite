import React, { useEffect,useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Signin from "./components/signin/signin";
import Signup from "./components/signup/signup";
import Authdetail from "./components/Authdetail";
import News from "./components/news/News";
import Moreread from "./components/news/Moreread";
import { Card } from "@mui/material";

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/sign" element = {<Authdetail/>}/>
          <Route path = "/news" element = {<News/>} />
          <Route path = "/moreread" element = {<Moreread/>}/>
          <Route path = "/card" element = {<Card/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
