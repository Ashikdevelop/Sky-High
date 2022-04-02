import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import './MyRouter.css'
function MyRouter() {
    const[showLinks, setShowLinks] = useState(false)
  return (
    
    <div className="navbar">
      <div className="center">
          <div className="links" id={showLinks ? "hidden" : ""}>
          <Link to="/" className="a">Home</Link>
          <Link to="/packages" className="a">Packages</Link>
          <Link to="/destination"  className="a">Destination</Link>
          <Link to="/about"  className="a">About Us</Link>
          </div>
          <button onClick= {()=>  setShowLinks(!showLinks ? "hidden" : "")}> <Button/>  </button>
         
      </div>
      <div className="rightSide">
          <h3>Sky high</h3>
      </div>
      </div>
      )
}

export default MyRouter
