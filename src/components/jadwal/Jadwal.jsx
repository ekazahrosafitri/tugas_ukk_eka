import React from 'react';
import { Link } from 'react-router-dom';
import './Jadwal.css';
import Navbar from '../navbar/Navbar';
import Benner from '../bennerevent/Benner';
import Footer from '../footer/footer';

const scheduleData = [
  {
    status: 'OPEN',
    showButton: true
  },
  {
    status: 'CLOSED',
    showButton: false
  },
  {
    status: 'CLOSED',
    showButton: false
  }
];

function ScheduleList() {
  return (
    <div>
      <Navbar />
      <Benner />

      <h2>Pilih Kategori Kelas</h2>
      <div className="category-buttons">
        <button className="active">Beginner</button>
        <button>Intermediate</button>
        <button>Expert</button>
      </div>

      <h3>Silabus Kelas Web Development PHP</h3>
      <div className="accordion">
        <details>
          <summary>Perkenalan Scrum</summary>
        </details>
        <details>
          <summary>Belajar Menggunakan Tools</summary>
        </details>
        <details>
          <summary>Belajar Prinsip Agile Dalam Team</summary>
        </details>
        <details open>
          <summary>Interaksi & Membangun Tugas Dalam Team</summary>
        </details>
      </div>
      <hr />

      <h2>Jadwal Kelas Web Development PHP</h2>

      {scheduleData.map((item, index) => (
        <div className="card" key={index}>
          <img src="/images/bennerevent.png" alt="PHP Thumbnail" />
          <div className="content">
            <div className="left">
              <h3>Web Development PHP</h3>
              <div className="details">
                <span><strong>Kelas</strong></span><span>Beginner</span>
                <span><strong>Batch</strong></span><span>13</span>
                <span><strong>Start Date</strong></span><span>Monday, 24th April 2020</span>
                <span><strong>Finish Date</strong></span><span>Wednesday, 26th April 2020</span>
                <span><strong>Price</strong></span><span>Rp. 400.000</span>
                <span><strong>Time</strong></span><span>08:00 - 12:00 WIB</span>
              </div>
            </div>
            <div className="right">
              <span className={`status ${item.status.toLowerCase()}`}>{item.status}</span>
              <p className="location">
                Rakryan Digitalent Hub Jl. Bend. Palasari No.Kav 5 Karangbesuki, Kec. Sukun, Kota Malang, Jawa Timur
              </p>
              {item.showButton && (
                <button>
                  <Link to="/daftar" style={{ color: 'white', textDecoration: 'none' }}>
                    Daftar
                  </Link>
                </button>
              )}
            </div>
          </div>
        </div>
      ))}

      <Footer />
    </div>
  );
}

export default ScheduleList;
