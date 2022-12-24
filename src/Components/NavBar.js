import { useState } from "react";
import linkedin from '../Assets/linkedin.png';
import github from '../Assets/github.png';



export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');


    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
      <div id="navbar">
      <ul className="nav-link">
        <li className="nav-list">
          <a 
            href="#home" 
            className={activeLink === "home" ? 'active-navbar-link' : "navbar-link"} 
            onClick={()=>onUpdateActiveLink('home')}>
              <span className="navbar-text">Home</span>
                </a>
                 </li>
        <li className="nav-list">
          <a 
            href="#skills" 
            className={activeLink === "skills" ? 'active-navbar-link' : "navbar-link"} 
            onClick={()=>onUpdateActiveLink('skills')}>
              <span className="navbar-text">Skills</span>
                </a>
                  </li>
        <li className="nav-list">
          <a 
            href="#projects" 
            className={activeLink === "projects" ? 'active-navbar-link' : "navbar-link"} 
           onClick={()=>onUpdateActiveLink('projects')}>
            <span className="navbar-text">Projects</span>
              </a>
                </li>
      </ul>
      <div className="nav-buttons">
      <button className="social-btn">
        <a 
          href="https://github.com/LyddyK" 
          target="_blank" 
          rel="noopener noreferrer">
            <img className="social" src={github} alt="Github Icon"/>
              </a>
                </button>
      
      <button 
        className="social-btn">
        <a 
          href="https://linkedin.com/in/lydia-krauz" 
          target="_blank" 
          rel="noopener noreferrer">
            <img className="social" src={linkedin} alt="LinkedIN Ico"/>
              </a>
                </button>
                 
      <button 
        className="contact" >
          <a href="#contact">Let's Connect!</a>
                </button>
                 </div>
      </div>
    )
}