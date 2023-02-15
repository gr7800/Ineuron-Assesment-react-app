import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../componets/Home'
import Login from '../componets/Login'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
    </Routes>
  )
}

export default MainRoutes