import React from 'react'
import './Header.css'

const Header = ({ setHome, setProjects, setAbout, setContact }) => (
  <header>
    <button type="submit" onClick={setHome}>Home</button>
    <button type="submit" onClick={setAbout}>About</button>
    <button type="submit" onClick={setProjects}>Projects</button>
    <button type="submit" onClick={setContact}>Contact</button>
  </header>
)

export default Header
