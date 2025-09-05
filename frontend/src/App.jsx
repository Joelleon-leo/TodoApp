import { useState } from 'react'
import './App.css'
import Todolist from './Todolist.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import Login from './components/login.jsx';
import Signin from './components/Signin.jsx';


function App() {
 

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signin/>}/>
            <Route path="/todolist/:id" element={<Todolist/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  
    
  )
}

export default App
