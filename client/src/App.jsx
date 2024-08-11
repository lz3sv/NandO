//import { useState } from 'react'
import { Routes, Route } from "react-router-dom"

import './App.css'
import About from './components/About/About'
import Not404 from './components/Not/Not404'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Nav from "./components/Nav/Nav"
import EnigmaSection from "./components/enigma-section/EnigmaSection"
import Create from "./components/Create/Create"
import {AuthContextProvider } from './context/AuthContext'
import Logout from "./components/Logout/Logout"
import PrivateGuard from "./components/common/privateGuard"
import EnigmaDetails from "./components/Details/EnigmaDetails"



function App() {

  return (
    <>
      <AuthContextProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<EnigmaSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<EnigmaSection />} />
          
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateGuard/>}>
              <Route path="/logout" element={<Logout />} />
              <Route path="/create" element={<Create />} />
          </Route>
          <Route path="/catalog/:articleId/edit" element={<Not404 />} />
          <Route path="/catalog/:articleId/details" element={<EnigmaDetails />} />
          <Route path="/catalog/:articleId/delete" element={<Not404 />} />
          <Route path="/not-found" element={<Not404 />} />
          <Route path="*" element={<Not404 />} />
        </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App
