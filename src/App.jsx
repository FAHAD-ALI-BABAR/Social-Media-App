import { useState } from 'react'

import './App.css'
import Header from './Componenets/Header'
import Footer from './Componenets/Footer'
import Sidebar from './Componenets/Sidebar'
import Form from './Componenets/Form'
import Postlist from './Componenets/Postlist'
import Postlistsprovider from './Store/Postlistsprovider'

function App() {
  const [count, setCount] = useState(0)
  const [selectedtab,setselectedtab]=useState("Home")

  return (
    <>
    <Postlistsprovider>
    <div className='containerss'>
    <Sidebar seletedbtn={selectedtab} setseletedtab={setselectedtab}></Sidebar>
    <div className='content'>
    <Header></Header>
    {selectedtab ==="Home" ?<Postlist></Postlist>:<Form></Form>}
      <Footer></Footer>
      </div>
      </div>
      </Postlistsprovider>
    </>
  )
}

export default App
