import React from 'react'
import './Home.css'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'

const Home = () => {
  return (
    <div className='container_Pages_App'>
        <LeftSidebar/>
        <div className="container2_Pages_App">
            Home
        </div>
    </div>
  )
}

export default Home