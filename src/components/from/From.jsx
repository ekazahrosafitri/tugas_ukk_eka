import React from 'react';
import '../../App.css';

function EventRegistrationForm() {
  return (
    <section>
      <h2 className="from-title">Event Registration</h2>
      <div className="form-container">
        <form>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nama-depan">Nama Depan :</label>
              <input type="text" id="nama-depan" name="nama-depan" />
            </div>
            <div className="form-group">
              <label htmlFor="nama-belakang">Nama Belakang :</label>
              <input type="text" id="nama-belakang" name="nama-belakang" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="tanggal-lahir">Tanggal Lahir :</label>
              <input type="text" id="tanggal-lahir" name="tanggal-lahir" />
            </div>
            <div className="form-group">
              <label htmlFor="jenis-kelamin">Jenis Kelamin :</label>
              <input type="text" id="jenis-kelamin" name="jenis-kelamin" />
            </div>
          </div>

          <div className="form-group full">
            <label htmlFor="alamat">Alamat :</label>
            <input type="text" id="alamat" name="alamat" />
          </div>

          <div className="form-group full">
            <label htmlFor="email">Email :</label>
            <input type="text" id="email" name="email" />
          </div>

          <div className="form-group full">
            <label htmlFor="telepon">No. Telp :</label>
            <input type="text" id="telepon" name="telepon" />
          </div>

          <div className="form-group full">
            <label htmlFor="pekerjaan">Pekerjaan :</label>
            <input type="text" id="pekerjaan" name="pekerjaan" />
          </div>
        </form>
      </div>

      <div className="submit-container">
        <button type="submit" className="submit-btn">
          <a href="payment.html" style={{ color: 'white', textDecoration: 'none' }}>
            Daftar sekarang
          </a>
        </button>
      </div>
    </section>
  );
}

export default EventRegistrationForm;
