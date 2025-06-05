import React from 'react';
import '../category/Category.css'; // opsional jika pakai CSS terpisah

function CategoryAndSyllabus() {
  return (
    <div>
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
    </div>
  );
}

export default CategoryAndSyllabus;
