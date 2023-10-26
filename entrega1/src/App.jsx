import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';
import './App.css';
import './components/ItemListContainer/ItemListContainer';


function App() {
  const enlaces =[
    "Inicio",
    "Carrito",
    "Parts",
  ]

  const greeting = "Bienvenidos a ZONEPARTS"
  return (
    <>
    {/* <NavBar links={enlaces}/> */}
    <NavBar/>
    <ItemListContainer Bienvenidos={greeting}/>
    <CartWidget/>  


            
    </>
  )
}

export default App
