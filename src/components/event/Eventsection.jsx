import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Event.css';

const EventRegistration = () => {
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);
  const [formData, setFormData] = useState({
    namaDepan: '',
    namaBelakang: '',
    tanggalLahir: '',
    jenisKelamin: '',
    alamat: '',
    email: '',
    telepon: '',
    pekerjaan: ''
  });

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/payment');
  };

  useEffect(() => {
    const handleWindowClick = (e) => {
      if (!e.target.closest('.profile-menu')) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', handleWindowClick);
    return () => document.removeEventListener('click', handleWindowClick);
  }, []);

  return (
    <div style={{ backgroundColor: '#f9f9f9', fontFamily: "'Montserrat'" }}>
      {/* Bagian Detail Event */}
      <section className="event-box">
        <div className="event-left">
          <img src="/images/event.jpg" alt="Poster Event" />
        </div>

        <div className="event-right">
          <h2 className="event-title">Earn Money Easily With Digital</h2>

          <div className="event-details-grid">
            <div className="event-detail">
              <h4 className="t1">Speaker</h4>
              <p className="p1">Ahmad Fatoni - Lead QA Engineer of DOT Indonesia</p>
              <p className="p1">Fahmi Idris - Frontend Engineer Kata.ai</p>
            </div>

            <div className="event-detail">
              <h4>Topics</h4>
              <p>Tips to keep productive for digiTalent</p>
              <p>Earn money at home</p>
              <p>Maximizing your digiTAl Skills</p>
            </div>

            <div className="event-detail">
              <h4>Date and Time</h4>
              <p>Wednesday, 24th July 2020</p>
              <p>13:00 WIB</p>
              <h4>Registration Fee</h4>
              <p>Rp. 0</p>
            </div>
          </div>
        </div>

        <div className="status-badge"><span>OPEN</span></div>
      </section>

      {/* Formulir Registrasi */}
      <section className="form-wrapper">
        <h2 className="from-title">Event Registration</h2>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nama-depan">Nama Depan :</label>
              <input
                type="text"
                id="nama-depan"
                name="namaDepan"
                value={formData.namaDepan}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="nama-belakang">Nama Belakang :</label>
              <input
                type="text"
                id="nama-belakang"
                name="namaBelakang"
                value={formData.namaBelakang}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="tanggal-lahir">Tanggal Lahir :</label>
              <input
                type="date"
                id="tanggal-lahir"
                name="tanggalLahir"
                value={formData.tanggalLahir}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="jenis-kelamin">Jenis Kelamin :</label>
              <select
                id="jenis-kelamin"
                name="jenisKelamin"
                value={formData.jenisKelamin}
                onChange={handleInputChange}
              >
                <option value="">Pilih</option>
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>
          </div>

          <div className="form-group full">
            <label htmlFor="alamat">Alamat :</label>
            <input
              type="text"
              id="alamat"
              name="alamat"
              value={formData.alamat}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group full">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group full">
            <label htmlFor="telepon">No. Telp :</label>
            <input
              type="tel"
              id="telepon"
              name="telepon"
              value={formData.telepon}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group full">
            <label htmlFor="pekerjaan">Pekerjaan :</label>
            <input
              type="text"
              id="pekerjaan"
              name="pekerjaan"
              value={formData.pekerjaan}
              onChange={handleInputChange}
            />
          </div>

          <div className="submit-container">
            <button type="submit" className="submit-btn">
              Daftar Sekarang
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default EventRegistration;
