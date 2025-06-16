import React from 'react'
import './Contact.scss'
import { VscAccount } from "react-icons/vsc";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='parent-full'>
      <div className='more-det'><span>More Details.....!</span></div>
      <div className='more-det-c'><h3>Contact Me</h3></div>
      <div className="para"><p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p></div>
      <div className="icons-data">

        <div className="firsticons">
       <div className='iconss-react'><VscAccount /></div> 
        <div className='adrressss' ><p>Adress</p></div>
        <div className='adrresss'><p>Kappingal,Pathaikkara,Malappuram</p></div>
        </div>

        <div className="firsticons">
        <div className='iconss-react'><FaPhoneSquareAlt /></div>
        <div className='adrress'><p>Contact Number</p></div>
        <div className='adrresss'><p>9656562371</p></div>
        </div>

        <div className="firsticons">
       <div className='iconss-react'> <FaTelegramPlane /></div>
        <div className='adrress'><p>Email Adress</p></div>
        <div className='adrresss'><p>aswankappingal@gmail.com</p></div>
        </div>
         
     

      </div>
    </div>
  )
}

export default Contact
