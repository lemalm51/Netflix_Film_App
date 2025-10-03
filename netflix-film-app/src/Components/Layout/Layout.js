import React from 'react';
import "../Header/header.css"
import { Outlet } from 'react-router-dom'; 
import Header from "../Header/Header"; 
import Footer from "../Footer/Footer"; 

function Layout() {
  return (
    <>
      <Header />
      
      <Outlet /> 
      
      <Footer />
    </>
  );
}

export default Layout;