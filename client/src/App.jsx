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
import PrivateGuard, { LogedGuard } from "./components/common/privateGuard"
import EnigmaDetails from "./components/Details/EnigmaDetails"
import EnigmaDelete from "./components/Delete/EnigmaDelete"
import Edit from "./components/Edit/Edit"



function App() {

  return (
    <>
      <AuthContextProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<EnigmaSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<EnigmaSection />} />
          <Route path="/catalog/:enigmaId/details" element={<EnigmaDetails />} />
          <Route element={<LogedGuard/>}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<PrivateGuard/>}>
              <Route path="/logout" element={<Logout />} />
              <Route path="/create" element={<Create />} />
          </Route>
          <Route path="/catalog/:enigmaId/edit" element={<Edit />} />

          <Route path="/catalog/:enigmaId/delete" element={<EnigmaDelete />} />
          <Route path="/not-found" element={<Not404 />} />
          <Route path="*" element={<Not404 />} />
        </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App
