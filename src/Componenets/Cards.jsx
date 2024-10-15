import React from 'react'
import { MdDelete } from "react-icons/md";

const Cards = ({postlistitems}) => {
  return (
    <>
    
    <div  className="card" style={{width: "18rem"}}>
    <div key={postlistitems.id} className="card-body">
      <h5 className="card-title">{postlistitems.title}
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      <MdDelete />
    
  </span>
      </h5>
      <p className="card-text">{postlistitems.description}</p>
      {postlistitems.hashtags.map((hashtag)=><span key={hashtag} className="badge rounded-pill text-bg-primary ms-1">{hashtag}</span>)}
    </div>
  </div></>
  )
}

export default Cards