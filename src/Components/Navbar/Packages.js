import React from 'react'
import './Packages.css'
import image1 from '../../Assets/pexels-quang-nguyen-vinh-3355788.jpg'
import image2 from '../../Assets/pexels-alexandr-podvalny-1929611.jpg'
import image3 from '../../Assets/pexels-daria-shevtsova-1070945.jpg'
import image4 from '../../Assets/pexels-ethan-brooke-2122406.jpg'
function Packages() {
  return (
     <div className="container">
      
       <div className="card">
         <h1 className="head">Special Offers</h1>
         <img className="card-img"  src={image1}/>
         <h3>Hong Kong, Hong Kong</h3>
         <p>Hyatt centric Victoria . . . .</p>
         <a className="price">$3001</a>
       </div>
       <div className="card">
         <img className="card-img"  src={image2}/>
         <h3>Tokyo, Japan</h3>
         <p>Hotel Sunroute Plaza . . .  .</p>
         <a className="price">$3001</a>
       </div>
       <div className="card">
         <img className="card-img" src={image3}/>
         <h3>Bangkok, Thailand</h3>
         <p>Bangkok Marriott Marquis . . . . </p>
         <a className="price">$3001</a>
       </div>
       <div className="card">
         <img className="card-img"  src={image4}/>
         <h3>Seoul, South Korea</h3>
         <p>LOTTE City Hotel</p>
         <a className="price">$3001</a>
       </div>

       <div className="footer1">
         
       </div>
     </div>
  )
}

export default Packages
