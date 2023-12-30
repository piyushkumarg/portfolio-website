import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Cursor from '../cursor/Cursor'

function Layout() {
  return (
    <>
    <Cursor/>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout