import React from 'react'

const Commonbutton = ({Content, funNumber, bg  ,hoverEffect}) => {
  return (
    <button onClick={funNumber} className={`text-[16px]  font-serif ${hoverEffect} ${bg} font-semibold text-white bg-black py-2 px-6`}>{Content} </button>
  )
}

export default Commonbutton