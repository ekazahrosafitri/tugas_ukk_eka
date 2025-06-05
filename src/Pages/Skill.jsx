import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Benner from '../components/bennerevent/Benner'
import Category from '../components/category/Category'
import Jadwal from '../components/jadwal/Jadwal'
import Footer from '../components/footer/footer'


function App() {
  return (
    <div>
      <Navbar/>
      <Benner/>
      <Category />
      <Jadwal />
      <Footer />
    </div>
  )
}

export default App