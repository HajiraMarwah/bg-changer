import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./index.css"
// import './App.css'

function App() {
   const [color, setColor] = useState("olive")
 const colors = [
    { name: "Olive", value: "olive", textColor: "white" },
    { name: "Gray", value: "gray", textColor: "white" },
    { name: "Yellow", value: "yellow", textColor: "black" },
    { name: "Pink", value: "pink", textColor: "white" },
    { name: "Purple", value: "purple", textColor: "white" },
    { name: "Lavender", value: "lavender", textColor: "black" },
    { name: "White", value: "white", textColor: "black" },
    { name: "Black", value: "black", textColor: "white" },
  ]
  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
     <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3  shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button className='outline-none px-4 py-1 rounded-full shadow-xl text-white' style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
        <button className='outline-none px-4 py-1 rounded-full shadow-xl text-white' style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
        <button className='outline-none px-4 py-1 rounded-full shadow-xl text-white' style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
        <button className='outline-none px-4 py-1 rounded-full shadow-xl text-white' style={{backgroundColor:"olive"}} onClick={()=>setColor("olive")}>Olive</button>
        <button className='outline-none px-4 py-1 rounded-full shadow-xl text-white' style={{backgroundColor:"gray"}} onClick={()=>setColor("gray")}>Gray</button>

        <button className='outline-none px-4 py-1 rounded-full shadow-xl text-black' style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
        <button className='outline-none px-4 py-1 rounded-full shadow-xl text-black' style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>pink</button>
        <button className='outline-none px-4 py-1 rounded-full shadow-xl text-white' style={{backgroundColor:"purple"}} onClick={()=>setColor("purple")}>purple</button>
        <button className='outline-none px-4 py-1 rounded-full shadow-xl text-black' style={{backgroundColor:"lavender"}} onClick={()=>setColor("lavender")}>lavender</button>
        <button className='outline-none px-4 py-1 rounded-full shadow-xl text-black' style={{backgroundColor:"white"}} onClick={()=>setColor("white")}>white</button>
        <button className='outline-none px-4 py-1 rounded-full shadow-xl text-white' style={{backgroundColor:"black"}} onClick={()=>setColor("black")}>Black</button>



      </div>
     </div>
    </div>

    </>
  )
}

export default App


