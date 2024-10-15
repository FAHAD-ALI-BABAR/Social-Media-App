import React, { useContext, useReducer } from 'react'
import { createContext } from 'react'
export const postlistreducer=(currpostlist,action)=>{
    return currpostlist
}
 export const Postlist=createContext({
    postlist:[],
    addpost:()=>{},
    delpost:()=>{}
});
const Postlistsprovider = ({children}) => {
    const [postlist,dispatchpostlist]=useReducer(postlistreducer,Default_post_list)
    const addpost=()=>{}
    const delpost=()=>{}
  return (
    <>
    <Postlist.Provider value={{postlist ,addpost,delpost}}>{children}</Postlist.Provider>
    </>
  )
}
const Default_post_list=[
    {
        id:1,
        title:"Going on vacations",
        description:"Hello friend I am going on a vacation to lahore",
        reactions:20,
        username:"Fahad",
        hashtags:["#vacations","#chill","#happy","#freedom"]
    },
    {
        
            id:2,
            title:"Graduated",
            description:"Hello friend I am finally graduated .Its hard to beleive",
            reactions:10,
            username:"Ali",
            hashtags:["#graduated","#2k20","#chill","#happy","#freedom"]
        
    }
]

export default Postlistsprovider