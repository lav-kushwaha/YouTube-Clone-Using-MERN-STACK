import React from 'react'
import ShowVideo from '../ShowVideo/ShowVideo'
import './ShowVideoGrid.css'
const ShowVideoGrid = ({vids}) => {
  return (
    <div className='Container_ShowVideoGrid'>
        {
             vids?.map((vi)=>{
                return (
                    <div key={vi._id} className="video_box_app">
                        <ShowVideo vid={vi}/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ShowVideoGrid