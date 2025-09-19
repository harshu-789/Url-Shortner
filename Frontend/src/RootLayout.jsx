import React from 'react'
import HomePage from './pages/HomePage'
import LoginForm from './components/LoginForm'
import AuthPage from './pages/AuthPage'
import { Outlet } from '@tanstack/react-router'
import Navbar from './components/NavBar'
import ServicesPage from './pages/ServicesPage'
import ContactPage from "./pages/ContactPage"



const RootLayout = () =>{
  return (
    <>
    <Navbar/>
    <Outlet/>
   
    {/* <AuthPage/> */}
    {/* <LoginForm/> */}
    {/* <HomePage/> */}
    <ServicesPage/>
    <ContactPage/>
    </>
  )
}
export default RootLayout