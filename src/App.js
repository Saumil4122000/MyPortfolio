import React from 'react'
import { NavMenu } from './Components/NavMenu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About'
import Footer from './Components/Footer';
const App = () => {
  return (
    <>
      <Router>
        <NavMenu />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
