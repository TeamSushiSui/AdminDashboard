import React from 'react'
import { BiHome, BiBookAlt, BiMessage, BiSolidReport, BiStats, BiTask } from "react-icons/bi";
import "../styles/sidebar.css"

const Sidebar = () => {
  return (
    <div className='menu'>
        <div className="logo">
            <BiBookAlt className="logo-icon" />
            <h2>EduXverse</h2>
        </div>

        <div className="menu--list">
            <a href="#" className="item active">
            <BiHome className="icon" />
            Dashboard
            </a>
            <a href="#" className="item">
            <BiTask className="icon" />
            Assignment
            </a>
            <a href="#" className="item">
            <BiSolidReport className="icon" />
            Report
            </a>
            <a href="#" className="item">
            <BiMessage className="icon" />
            Message
            </a>
            <a href="#" className="item">
            <BiStats className="icon" />
            Stat
            </a>
        </div>
    </div>
  )
}

export default Sidebar