// import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Products from './pages/Products'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  )
}

export default App
