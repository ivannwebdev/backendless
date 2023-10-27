import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import './Layout.css'

const Layout = () => (
  <>
    <Header />

    <main className='content'>
      <Outlet/>
    </main>
  </>
)

export default Layout
