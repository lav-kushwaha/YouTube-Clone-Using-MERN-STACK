import React from 'react'
import './SearchList.css'
import { FaSearch } from 'react-icons/fa'
const SearchList = ({TitleArray,setSearchQuery}) => {
  return (
    <>
    <div className="Container_SearchList">
      {
        TitleArray.map((video)=>{
          return(<p className="titleItem" key={video} onClick={e=>setSearchQuery(video)}>
              <FaSearch/>
                {video}
            </p>)
        })
      }
    </div>
    </>
  )
}

export default SearchList