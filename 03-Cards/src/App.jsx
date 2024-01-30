import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CardOne } from './Card'
import './App.css'

function App() {
 

  return (
    <>
    <h1>hello</h1>
    <br />
    <div className=' grid gap-4 grid-cols-3 grid-rows-3'>
     <CardOne />
     <CardOne />
     <CardOne />
     <CardOne />
     <CardOne />
     <CardOne />
    </div>
     </> 
  )
}

export default App
