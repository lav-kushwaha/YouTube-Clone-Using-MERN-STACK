import React, { useState } from 'react'
import './SearchBar.css'
import {FaSearch} from 'react-icons/fa'
import {BsMicFill} from 'react-icons/bs'
import SearchList from './SearchList'

const SearchBar = () => {
  const [searchQuery,setSearchQuery] = useState("")
  const [searchListA,setSearchList] = useState(false);
  const TitleArray = ["Video1","video2","Animation Video","Movies",].filter(q =>q.toLowerCase().includes(searchQuery));

  return (
    <div className='SearchBar_Container'>
        <div className="SearchBar_Container2">
            <div className="search_div">
                <input type="text" className='iBox_SearchBar' placeholder='Search' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} onClick={(e)=>setSearchList(true)}/>
                <FaSearch className='searchIcon_SearchBar' onClick={(e)=>setSearchList(false)}/>
                <BsMicFill className="Mic_SearchBar searchIcon_SearchBar"/>
                {
                  searchQuery&&searchListA&&
                  <SearchList setSearchQuery={setSearchQuery} TitleArray={TitleArray}/>
                }
            </div>
        </div>
    </div>
  )
}

export default SearchBar