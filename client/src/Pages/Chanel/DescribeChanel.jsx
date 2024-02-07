import React from 'react'
import { FaEdit, FaUpload } from 'react-icons/fa'
import './DescribeChanel.css'
import { useSelector } from 'react-redux';

const DescribeChanel = ({setEditCreateChanelBtn,Cid}) => {


  const chanels = useSelector((state) => state?.chanelReducers);
  console.log(chanels)
  // const currentChanel = useSelector()

  return (
    <div className='container3_chanel'>
       <div className="chanel_logo_chanel">
          <b>
            C
          </b>
       </div>   
       <div className="description_chanel">
        <b>Lav Kushwaha</b>
        <p>StoryTeller Content Creator</p>
       </div>
       <p className='editbtn_chanel' onClick={()=>{setEditCreateChanelBtn(true)}}>
            <FaEdit/>
            <b>edit chanel</b>
       </p>
       <p className='uploadbtn_chanel'>
            <FaUpload/>
            <b>Upload Video</b>
       </p>
    </div>
  )
}

export default DescribeChanel