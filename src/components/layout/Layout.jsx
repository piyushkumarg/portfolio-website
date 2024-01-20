import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Cursor from '../cursor/Cursor'
import ScrollToTop from '../../pages/ScrollToTop'

function Layout() {
  return (
    <div className='bg-bgDark'>
      <ScrollToTop />
      <Cursor />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout