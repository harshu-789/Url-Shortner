import React from 'react'
import HomePage from './pages/HomePage'
import LoginForm from './components/LoginForm'
import AuthPage from './pages/AuthPage'
import { Outlet } from '@tanstack/react-router'
import Navbar from './components/NavBar'
import ServicesPage from './pages/ServicesPage'


const RootLayout = () =>{
  return (
    <>
    <Navbar/>
    <Outlet/>
    <AuthPage/>
    <LoginForm/>
    <HomePage/>
    <ServicesPage/>
    </>
  )
}
export default RootLayout