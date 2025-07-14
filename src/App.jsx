// File: src/App.jsx
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Brand from './pages/Brand'
import Team from './pages/Team'
import Press from './pages/Press'
import Contact from './pages/Contact'
import Carrers from './pages/Carrers'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/team" element={<Team/>} />
        <Route path="/press" element={<Press />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/carrers" element={<Carrers />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App