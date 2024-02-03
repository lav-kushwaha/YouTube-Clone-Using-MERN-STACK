import React from 'react'
import ShowVideo from '../ShowVideo/ShowVideo';
// import vid from '../../Components/Video/vid'


const ShowVideoList = ({videoId}) => {

    const vids = [
        {
          _id: 1,
          video_src: "vid",
          Chanel: "62bafe6752cea35a6c30685f",
          title: "video 1",
          Uploder: "abc",
          description: "description of  video 1",
        },
        {
          _id: 2,
          video_src: "vid",
          Chanel: "cdd",
          title: "video 2",
          Uploder: "abc",
          description: "description of  video 2",
        },
        {
          _id: 3,
          video_src: "vid",
          Chanel: "add",
          title: "video 3",
          Uploder: "abc",
          description: "description of  video 3",
        },
      ];

      
  return (
    <div className='Container_ShowVideoGrid'>
        {
             vids?.filter(q=>q._id===videoId).map(vi=>
             {
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

export default ShowVideoList