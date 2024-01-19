import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Cursor from '../cursor/Cursor'
import ScrollToTop from '../../pages/ScrollToTop'

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Cursor />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout