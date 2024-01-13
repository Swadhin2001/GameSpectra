import React, { useState } from 'react'

export interface props{
    image : string,
    name: string,
    rating: string
}


const Card:React.FC<props>= ({image, name, rating})=> {
    const [opacity, setOpacity] = useState('')

    const entermouse=()=>{
        setOpacity('opacity-70')
    }
    const leavemouse=()=>{
        setOpacity('')
    }
    setTimeout (()=>{},3000)
    
  return (
    <> 
        <div className='h-full  w-full border border-cyan-950 bg-gradient-to-r from-cyan-500 to-blue-500 ' onMouseEnter={entermouse} onMouseLeave={leavemouse}>
            <div className={`h-5/6 ${opacity}`} style = {{background: `url(${image})`, backgroundPosition:"center", backgroundSize:"cover"}}>
            </div>
            <h2 className='text-center game-heading pt-2 px-2'>{name}</h2>
            <h3 className='text-center game-heading'>Rating : {rating}</h3>
        </div>
    </>
  )
}

export default Card