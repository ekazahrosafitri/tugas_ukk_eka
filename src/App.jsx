import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Jadwal from '../src/components/jadwal/Jadwal';
import Daftar from '../src/Pages/Daftar';
import Payment from '../src/Pages/Payment'; // ⬅️ tambahkan ini

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Jadwal />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/payment" element={<Payment />} /> {/* ⬅️ tambahkan ini */}
      </Routes>
    </Router>
  );
}

export default App;
