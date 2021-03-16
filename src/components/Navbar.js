import React from 'react';
import logo from '../Khalid.png';
import { AiOutlineMenu } from 'react-icons/ai';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container">
            
        <a className="navbar-brand" href="#"><img className='logo' src={logo} alt="logo...."/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <AiOutlineMenu style={{ color : '#fff'}}/>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">About me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Experiences</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact me</a>
            </li>
          </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
