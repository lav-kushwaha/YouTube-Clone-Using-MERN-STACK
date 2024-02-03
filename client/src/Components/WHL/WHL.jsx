import React from 'react'
import './WHLcss.css'
import LeftSidebar from '../LeftSidebar/LeftSidebar'
import WHLVideoList from './WHLVideoList'

const WHL = ({page,videoList}) => {
  return (
    <div className="container_Pages_App">
        <LeftSidebar/>
        <div className="container2_Pages_App">
            <p className="conatiner_whl">
                <div className="box_WHL leftside_whl">
                    <b>Your {page} Shown Here</b>
                    <div className="clear_History_btn">
                        {
                            page ==="History" &&  
                            <div className="clear_History_btn">Clear History</div>
                        }
                    </div>
                </div>
                <div className="rightSide_whl">
                    <h1>{page}</h1>
                    <div className="whl_list">
                       <WHLVideoList 
                       page={page}
                       videoList={videoList}/>
                    </div>
                </div>
            </p>
        </div>
    </div>
   
  )
}

export default WHL