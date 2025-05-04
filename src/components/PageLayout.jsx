import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { TopBar } from './TopBar'

export const PageLayout = ({children}) => {
  return (
    <>
        <TopBar></TopBar>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
    </>
  )
}
