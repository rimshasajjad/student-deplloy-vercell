
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar () {
  return (
    <div className="navbar-container">
     <div className='navbardesign'>
            <Link className='innerNavdesign' to="Home">Home</Link>
        <Link  className='innerNavdesign' to="Student">Student</Link>
        <Link   className='innerNavdesign'   to="/Attendence">Attendence</Link>
        <Link   className='innerNavdesign' to="/Course">Course</Link>
        <Link   className='innerNavdesign' to="/Dashboard">Dashboard</Link>


   </div>
   </div>
  );

}

export default Navbar;