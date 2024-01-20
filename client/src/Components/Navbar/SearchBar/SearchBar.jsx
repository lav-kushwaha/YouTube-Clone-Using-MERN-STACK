import React from 'react'
import './SearchBar.css'
import {FaSearch} from 'react-icons/fa'
import {BsMicFill} from 'react-icons/bs'


const SearchBar = () => {
  return (
    <div className='SearchBar_Container'>
        <div className="SearchBar_Container2">
            <div className="search_div">
                <input type="text" className='iBox_SearchBar' placeholder='Search'/>
                <FaSearch className='searchIcon_SearchBar'/>
                <BsMicFill className="Mic_SearchBar searchIcon_SearchBar"/>
            </div>
        </div>
    </div>
  )
}

export default SearchBar