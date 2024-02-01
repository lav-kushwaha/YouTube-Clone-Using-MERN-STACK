import React from 'react'
import './ShowVideo.css'
import {Link} from 'react-router-dom'

const ShowVideo = ({vid}) => {
  return (
    <>
    <Link to={`/videopage/${vid?._id}`}>
        <video
        src={`${vid?.src}`}
        className='video_ShowVideo'
        />
    </Link>
       <div className="video_description">
        <div className="Chanel_logo_App">
            <div className="fstChar_logo_App">
                <p>{vid?.Uploder?.charAt(0).toUpperCase()}</p>
            </div>
        </div>
        <div className="video_details">
            <p className="title_vid_ShowVideo">tittle</p>
            <pre className="vid_views_UploadTime ">1-1-2001</pre>
            <pre className='vid_views_UploadTime'>
                5 views <div className="dot"></div> video Uploaded 1 year ago
            </pre>
        </div>
       </div>
    </>
  )
}

export default ShowVideo