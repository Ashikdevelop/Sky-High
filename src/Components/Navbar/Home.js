import React from 'react'
import './Home.css'
import Banner1 from '../../Assets/pexels-pixabay-2363.jpg' 

function Home() {
  return (
    <div className="home">
      <div className="image">
     <img className="banner-image"   src={Banner1} alt="" /> 
          
      </div>
   
<footer>
  <div className="footer-desk">
    <div className="left">
      <h3>Sky High</h3>
      <p className="sky">@ 2022 Sky High.</p>
      <p className="high">All Right Reserved.</p>
    </div>
    <div className="center-desk">
<h4>Purchase and Payment</h4>
<p>How to pay</p>
<p>Documents</p>
<p>Change or terminate tour</p>
<p>Regulation</p>
    </div>
    
    <div className="right1-desk">
<h3>About Us</h3>
<p>General Information</p>
<p>News</p>
<p>Contacts</p>
<p>Terms</p>
<p>Help</p>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Home
