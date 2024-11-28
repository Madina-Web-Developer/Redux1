import React, { useState } from 'react'
import Commonbutton from './Commonbutton'

const Maincomp = () => {

    const [count , setCount] = useState(0);

    const add = ()=>{
        setCount (count+1)
    }

    const remove = ()=>{

        setCount(count-1)
    }

    const reset = ()=>{

        setCount(0)
    }



  return (
    <>

   <div className="div w-[400px] h-[300px] border-[2px] border-black bg-white flex flex-col justify-center items-center">
   <div className='text-[45px] font-sans font-bold' >{count}</div>

   <div className="buttons flex gap-6 mt-6"> 

   <Commonbutton funNumber={add} hoverEffect={'hover:bg-green-600'} Content={'+'} />
   <Commonbutton funNumber={remove} hoverEffect={'hover:bg-blue-400'} Content={'-'}/>

   </div>

  <div className="resrt mt-5">
  <Commonbutton funNumber={reset} bg={'bg-red-500'} hoverEffect={'hover:bg-red-800'} Content={'Reset'}/>
  </div>
   

   </div>
    
    </>
  )
}

export default Maincomp