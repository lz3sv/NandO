//import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import { useState } from "react"

import './App.css'
import About from './components/About'
import Not404 from './components/Not404'
import Login from './components/Login'
import Register from './components/Register'
import Nav from "./components/Nav"
import EnigmaSection from "./components/enigma-section/EnigmaSection"
import Create from "./components/Create"
import EnigmaAdd from "./components/enigma-section/enigma-add/EnigmaAdd"
import { AuthContext } from './context/AuthContext'
import Logout from "./components/Logout"



function App() {
  const [authState, setAuthState] = useState({})

  const changeAuthState = (state) => {
    //to do quick solution
    localStorage.setItem('accessToken', state.accessToken)
    setAuthState(state)
  }

  const contextData = {
    email: authState.email,
    username: authState.username,
    userId: authState._id,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState,
  }

  return (
    <>
      <AuthContext.Provider value={contextData}>
        <Nav />
        <Routes>
          <Route path="/" element={<EnigmaSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<EnigmaSection />} />
          <Route path="/create" element={<EnigmaSection />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/catalog/:articleId" element={<Not404 />} />
          <Route path="/not-found" element={<Not404 />} />
          <Route path="*" element={<Not404 />} />
        </Routes>
      </AuthContext.Provider>
    </>
  )
}

export default App
