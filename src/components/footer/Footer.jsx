import React from 'react';
import './Footer.css'; // Pastikan gaya CSS disimpan terpisah jika ada

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section logo">
          <img
            src="./images/logoputih.png"
            alt="rakryan logo"
            className="logo-img"
          />
          <p>
            Providing,<br />
            Connecting,<br />
            Complementing.
          </p>
        </div>
        <div className="footer-section">
          <h4>Sitemap</h4>
          <ul>
            <li><a href="#">Skill Dev</a></li>
            <li><a href="#">digiTalent Hub</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Course</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Sign In</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Address</h4>
          <address>
            Jl. Bend. Palasari<br />
            No.Kav 5, Karangbesuki,<br />
            Kec. Sukun,<br />
            Kota Malang,<br />
            Jawa Timur 65149
          </address>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p className="contact">
            <i className="bi bi-telephone"></i> +6282257741226<br />
            <i className="bi bi-telephone"></i> +6281223292947<br />
            <i className="bi bi-envelope"></i> rakryan@gmail.com
          </p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Operational Hours</h4>
          <p>Monday - Friday<br />09:00 - 19:00</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2020 Rakryan Digitalent Hub. All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
