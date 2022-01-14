import React from 'react'
import { NavMenu } from './Components/NavMenu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About'
import Skills from './pages/Skills'
import Footer from './Components/Footer';
import SmoothScrollbar from './Components/SmoothScrollbar';
const App = () => {
  return (
    <>
      <Router>
        <NavMenu />
        <SmoothScrollbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contacts" element={<Contact />} />
          </Routes>
          <Footer />
        </SmoothScrollbar>
      </Router>

    </>
  )
}

export default App
