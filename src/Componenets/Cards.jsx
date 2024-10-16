import React, { useContext, useState } from 'react'
import { MdDelete } from "react-icons/md";
import {Postlist} from "../Store/Postlistsprovider"

const Cards = ({postlistitems}) => {
   const{delpost}= useContext(Postlist)
  
  
  return (
    <>
    
    <div  className="card" style={{width: "18rem"}}>
    <div key={postlistitems.id} className="card-body">
      <h5 className="card-title">{postlistitems.title}
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>delpost(postlistitems.id)}>
      <MdDelete />
    
  </span>
      </h5>
      <p className="card-text">{postlistitems.description}</p>
      {postlistitems.hashtags.map((hashtag)=><span key={hashtag} className="badge rounded-pill text-bg-primary ms-1">{hashtag}</span>)}
    </div>
    <div className="alert alert-success" role="alert">
  This post has been reacted by {postlistitems.reactions} people!
</div>
<div className='username'>Created by :<span class="badge text-bg-warning username">{postlistitems.username}</span></div>

  </div>
 
  </>
  )
}

export default Cards