import React, { useContext, useRef, useState } from "react";
import { Postlist } from "../Store/Postlistsprovider";
const Form = () => {
    const {addpost}=useContext(Postlist)
    const Usertitle=useRef()
    const Userdescription=useRef()
    const UserReaction=useRef()
    const Username=useRef()
    const Userhashtags=useRef()
    const [Popup, setShowPopup] = useState(false);
const handlepostsubmitbtn=(event)=>{
    
      // Show popup and hide it after 5 seconds
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 5000); // 5 seconds
    event.preventDefault();
    
    const Posttile=Usertitle.current.value;
    const Postdescription=Userdescription.current.value;
    const Postreaction=UserReaction.current.value;
    const Postusername=Username.current.value;
    const Posthashtags=Userhashtags.current.value.split(" ").map(tag => tag.startsWith('#') ? tag : `#${tag}`);
    
    Usertitle.current.value="";
    Userdescription.current.value="";
    UserReaction.current.value="";
    Username.current.value="";
    Userhashtags.current.value="";
    addpost(Posttile,Postdescription,Postreaction,Postusername,Posthashtags);
   
    
}
  return (
    <>
      <div className="form-container" >
        {/* <div className="mb-3">
          <label htmlFor="userid" className="form-label">
            UserId
          </label>
          <input
          ref={UserId}
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Example UserId here...."
          />
        </div> */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
          ref={Usertitle}
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter Post tile here...."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <textarea
          ref={Userdescription}
            type="text"
            rows="4"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter Post Description here...."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Reactions:
          </label>
          <input
          ref={UserReaction}
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter Post Description here...."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
          ref={Username}
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter Post Description here...."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="hashtags" className="form-label">
            Hashtags:
          </label>
          <input
          ref={Userhashtags}
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter Post Description here...."
          />
        </div>
        <button onClick={handlepostsubmitbtn} type="submit" className="btn btn-primary">Post</button>
      </div>
      
        {/* Popup Notification */}
        {Popup && (
        <div className="popup-notification">
          Post Created Successfully!
        </div>
      )}
    </>
  );
};

export default Form;
