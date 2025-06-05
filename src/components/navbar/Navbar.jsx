import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>

      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Skill Dev</a>
        <a href="#">digITalent Hub</a>
        <a href="#">Events</a>
        <a href="#">Course</a>
        <a href="#">About</a>
      </nav>

      <div className="profile-menu" onClick={() => setShowDropdown(!showDropdown)}>
        <img src="https://img.icons8.com/ios-filled/50/737F5D/user.png" alt="user" />
        <span>Latifa</span>
        <span>▼</span>
        
        {showDropdown && (
          <div className="dropdown">
            <a href="#">Kelas</a>
            <a href="#">Pengaturan</a>
            <a href="#">Keluar</a>
          </div>
        )}
      </div>
    </header>
  );
}