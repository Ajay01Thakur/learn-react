import './App.css';
import Button from './components/common/Button';
// import { useEffect, useState } from 'react';
import Header from './components/common/Header';
import Home from './components/common/Home';
import { BrowserRouter,  Route, Routes} from 'react-router-dom';



export default function MyApp() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<Header/>} path='/'/>
        <Route path='/Button' element={<Button/>}/>
        <Route path='/Home' element={<Home/>}/>
      </Routes>
  </BrowserRouter>
  </>
  );
    
  }