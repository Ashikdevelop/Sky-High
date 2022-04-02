import React from 'react'
import './Destination.css'
import card1img from '../../Assets/pexels-nextvoyage-872698.jpg'
import card2img from '../../Assets/pexels-adhitya-andanu-1561863.jpg'
import card3img from '../../Assets/pexels-aleksandar-pasaric-2044434.jpg'
import card4img from '../../Assets/pexels-chris-schippers-427679.jpg'
import card5img from '../../Assets/pexels-pixabay-50689.jpg'
import card6img from '../../Assets/pexels-flo-dahm-699466.jpg'

setTimeout(() => {
  
},);



function Destination() {
  return (
         <div className="destination">
           <h1 className="heading2">Popular Destination</h1>
         <div className="des-card">
          <img className="descard-img" src={card1img} alt=""/>
           <p className="des-text">Dubai</p>
         </div>
         
         <div className="des-card">
         <img className="descard-img" src={card2img}  alt=""/>
           <p className="des-text">Paris</p>
         </div>

         <div className="des-card">
         <img className="descard-img" src={card3img} alt=""/>
           <p className="des-text">London</p>
         </div>

         <div className="des-card">
         <img className="descard-img" src={card4img} alt=""/>
           <p className="des-text">Egypt</p>
         </div>

         <div className="des-card">
         <img className="descard-img" src={card5img} alt=""/>
           <p className="des-text">Bangkok</p>
         </div>

         <div className="des-card">
         <img className="descard-img" src={card6img} alt=""/>
           <p className="des-text">Hong Kong</p>
         </div>

         <div className="des-card">
         <img className="descard-img" src={card3img} alt=""/>
           <p className="des-text">Dubai</p>
         </div>

         <div className="des-card">
         <img className="descard-img" src={card1img} alt=""/>
         <p className="des-text">paris</p>
         </div>
         
         <div className="footer2">

         </div>


         </div>  
     
  )
}

export default Destination
