import React from 'react'
import './VideoUpload.css'

const VideoUpload = () => {
  return (
    <div className='container_VidUpload'>
      <input
        type="submit"
        name="text"
        value={"X"}
        className="ibtn_x"
      />
      <div className='container2_VidUpload'>
      <input type="text" className="ibox_vidupload"
        maxLength={30}
        placeholder='Entry Title of your video'
        />
      </div>
      <label htmlFor="file" className='ibox_vidupload btn_VidUpload'>
        <input 
        type="file" 
        name="file" 
        className="ibox_vidupload"
        style={{fontSize:"1rem"}}
        />
      </label>
    </div>
  )
}

export default VideoUpload