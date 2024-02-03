import React, { useState } from 'react'
import './Comments.css'

const DisplayComments = ({cId, commentBody,userCommented}) => {
    const[Edit,setEdit] = useState(false);
    const[cmtBdy,setCmtBdy] = useState(" ")

    const handleEdit = (ctId,ctBdy)=>{
        setEdit(true)
        setCmtBdy(ctBdy)
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        setEdit(false);
    }
  return (
        <>
        {
          Edit ? (<>
            <form className="comments_sub_form_comments" 
            onSubmit={handleOnSubmit}
            >
            <input
            type="text"
            onChange={(e)=>setCmtBdy(e.target.value)}
            placeholder="Edit add comment..."
            value={cmtBdy}
            className="comment_ibox"
           />
            <input 
            type="submit"
            value="Change" 
            className="comment_add_btn_comments" />
            
           </form>


            </>)
            
            :(

            <>
              <p className='comment_body'>{commentBody}</p>
        
            </>
            
            )}


        <p className='comment_body'>{commentBody}</p>
        <p className='usercommented'> - {userCommented} commented</p>
        <p className='EditDel_DisplayCommendt'>
            <i onClick={()=>handleEdit(cId,commentBody)}>Edit</i>
            <i>Delete</i>
        </p>
        
        </>
    )
}

export default DisplayComments