import React, { useContext } from 'react'
import Cards from './Cards'
import {Postlist as postlistitems} from "../Store/Postlistsprovider"
const Postlist = () => {
    const {postlist}=useContext(postlistitems)
    console.log(postlist);
    
  return (
    <>
    <div className='postlists'>
        {postlist.map((items)=><Cards key={items.id} postlistitems={items}>    
        </Cards>)}
        {/* <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards> */}
    </div>
    </>
  )
}

export default Postlist