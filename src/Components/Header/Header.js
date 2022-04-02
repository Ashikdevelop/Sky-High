import React from 'react'
import './Header.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../Navbar/Home';
import Packages from '../Navbar/Packages';
import Destination from '../Navbar/Destination';
import About from '../Navbar/About'
import MyRouter from './MyRouter';

function Header() {
  return (
      <div>
 <Router>
<MyRouter/>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/packages" element={<Packages/>} />
              <Route path="/destination" element={<Destination/>}/>
              <Route path="/about" element={<About/> }/>
          </Routes>
      </Router>
      </div>
  )
}

export default Header
