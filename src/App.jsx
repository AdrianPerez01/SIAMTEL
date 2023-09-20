import React from "react";
import Login from './pages/Login'
import Error from "./pages/404"
import Home from './pages/Home' 

import {Routes, Route} from 'react-router-dom'
import { useEffect } from "react";
import { client } from "./supabase/client";
import { useNavigate } from "react-router-dom";


function App() {

  const navigate = useNavigate();

  useEffect(()=> {
    client.auth.onAuthStateChange((event, session)=> {
    if (!session){
      navigate('/login')
    } else {
      navigate('/')
    }
  })
},[])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="*" element={<Error/>}></Route>
      </Routes>
    </>
  )
}

export default App
