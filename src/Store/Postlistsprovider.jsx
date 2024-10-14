import React, { useContext } from 'react'
import { createContext } from 'react'

const Postlist=createContext({});
const Postlistsprovider = ({children}) => {
  return (
    <>
    <Postlist.provider value={[]}>{children}</Postlist.provider>
    </>
  )
}

export default Postlistsprovider