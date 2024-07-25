//import { useState } from 'react'
import {Routes, Route} from "react-router-dom"

import './App.css'
import About from './components/About'
import Not404 from './components/Not404'
import Login from './components/Login'
import Register from './components/Register'
import Nav from "./components/Nav"
import EnigmaSection from "./components/enigma-section/EnigmaSection"
import Create from "./components/Create"
import EnigmaAdd from "./components/enigma-section/enigma-add/EnigmaAdd"



function App() {

  return (
    <>
      <Nav />
      <Routes>
          <Route path="/" element={<EnigmaSection />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/catalog" element={<EnigmaSection />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/catalog/:articleId" element={<Not404 />}/>
          <Route path="/not-found" element={<Not404/>}/>
          <Route path="*" element={<Not404/>}/>
        </Routes>
        
    </>
  )
}

export default App
