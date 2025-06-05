import React, { useState } from 'react';
import './Pay.css';

function Pay() {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [voucherCode, setVoucherCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [voucherApplied, setVoucherApplied] = useState(false);

  const price = 50000;
  const total = price - discount;

  const handleRadioChange = (e) => {
    setSelectedMethod(e.target.value);
  };

  const handlePayment = () => {
    if (!selectedMethod) {
      alert('Pembayaran gagal! Silakan pilih metode pembayaran.');
    } else {
      alert('Pembayaran berhasil!');
    }
  };

  const handleApplyVoucher = () => {
    if (voucherCode.trim().toLowerCase() === 'diskon123') {
      setDiscount(10000);
      setVoucherApplied(true);
    } else {
      alert('Voucher tidak valid');
      setDiscount(0);
      setVoucherApplied(false);
    }
  };

  return (
    <div>
      <div className="course-header">
        <div className="info">
          <h1>UX Designer: Digital Product Development</h1>
          <div className="instructor">
            <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Instructor" />
            Dimounitif Nelaspaba
          </div>
          <div className="category">Kategori <strong>UI/UX</strong></div>
          <div className="price">Rp. {price.toLocaleString()}</div>
        </div>
        <img src="/images/benerpay.jpg" alt="Course Image" className="course-image" />
      </div>

      <div className="payment">
        <div className="left">
          <h4>Payment Method</h4>

          {/* (Potongan metode pembayaran lainnya tetap sama seperti sebelumnya) */}
          {/* Di sini cukup tampilkan semua opsi pembayaran yang sudah kamu buat */}

          {/* Example shown for E-Wallet */}
          <div className="section">
            <div className="section-title">E-Wallet</div>
            <div className="section-subtitle">Transaksi terhubung dengan akun e-wallet</div>
            <label className="option">
              <input type="radio" name="payment" value="ovo" onChange={handleRadioChange} />
              <img src="https://i.pinimg.com/736x/60/42/c3/6042c3148add711c946833bbc2b90f6d.jpg" alt="ovo" /> OVO
            </label>
            <label className="option">
              <input type="radio" name="payment" value="gopay" onChange={handleRadioChange} />
              <img src="/images/gopay.jpg" alt="gopay" /> GO-PAY
            </label>
          </div>

          <div className="section">
            <div className="section-title">Transfer Bank</div>
            <div className="section-subtitle">Transaksi perlu upload bukti transfer untuk proses verifikasi</div>
            <label className="option">
              <input type="radio" name="payment" value="bank" onChange={handleRadioChange} />
              <img src="https://i.pinimg.com/736x/4f/fc/bd/4ffcbd302d7821d021598da69cb24c7f.jpg" alt="bank" /> BANK XYZ
            </label>
          </div>

          <div className="section">
            <div className="section-title">Transfer Virtual Account</div>
            <div className="section-subtitle">Transaksi di cek otomatis</div>
            <label className="option">
              <input type="radio" name="payment" value="mandiri" onChange={handleRadioChange} />
              <img src="/images/mandiri.png" alt="mandiri" /> BANK MANDIRI
            </label>
            <label className="option">
              <input type="radio" name="payment" value="bca" onChange={handleRadioChange} />
              <img src="/images/bca.png" alt="bca" /> BANK BCA
            </label>
            <label className="option">
              <input type="radio" name="payment" value="bni" onChange={handleRadioChange} />
              <img src="/images/bni.png" alt="bni" /> BANK BNI
            </label>
            <label className="option">
              <input type="radio" name="payment" value="bri" onChange={handleRadioChange} />
              <img src="/images/bri.png" alt="bri" /> BANK BRI
            </label>
          </div>

          <div className="section">
            <div className="section-title">KARTU KREDIT</div>
            <div className="section-subtitle">Transaksi dengan kartu kredit berlogo VISA/MASTERCARD</div>
            <label className="option">
              <input type="radio" name="payment" value="VISA/MASTERCARD" onChange={handleRadioChange} />
              <div className="card-logos">
                <img src="/images/visa.png" alt="VISA" />
                <img src="/images/master.png" alt="MASTERCARD" />
              </div>
              VISA / MASTERCARD
            </label>

          </div>

          <div className="section">
            <div className="section-title">Minimarket</div>
            <div className="section-subtitle">Transaksi di gerai retail terdekat dengan biaya layanan tambahan</div>
            <label className="option">
              <input type="radio" name="payment" value="indomaret" onChange={handleRadioChange} />
              <img src="/images/indomaret.png" alt="indomaret" /> INDOMARET
            </label>
            <label className="option">
              <input type="radio" name="payment" value="alfamart" onChange={handleRadioChange} />
              <img src="/images/alfa.png" alt="alfamart" /> ALFAMART
            </label>
          </div>
        </div>

        <div className="summary-box">
          <h3>Total Price</h3>
          <div className="row"><span>Price</span><span>Rp. {price.toLocaleString()}</span></div>
          <div className="row"><span>Discount</span><span>Rp. 0</span></div>
          <div className="row">
            <span>Potongan Voucher</span>
            <span>Rp. {voucherApplied ? discount.toLocaleString() : '0'}</span>
          </div>

          <div className="voucher-section">
            <label>Voucher</label>
            <div className="voucher-input">
              <input
                type="text"
                placeholder="Input voucher code"
                value={voucherCode}
                onChange={(e) => setVoucherCode(e.target.value)}
              />
              <button onClick={handleApplyVoucher}>Use</button>
            </div>
          </div>

          <div className="total">
            <div className="row">
              <strong>Total Payment</strong>
              <strong>Rp. {total.toLocaleString()}</strong>
            </div>
            <div className="disclaimer">
              Dengan menyelesaikan pembelian, Anda menyetujui Ketentuan Layanan ini
            </div>
          </div>

          <button className="pay-btn" onClick={handlePayment}>Bayar Course</button>
        </div>
      </div>
    </div>
  );
}

export default Pay;
