import React from 'react'
import Menu from  "../menu/Menu"
import Footer from "../footer/Footer"
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <>
      <Menu/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Rootlayout
