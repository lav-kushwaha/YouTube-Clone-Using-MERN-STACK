import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from '../Pages/Home/Home';  
import Library from '../Pages/Home/Library/Library';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/library' element={<Library/>}/>
    </Routes>
  )
}

export default AllRoutes