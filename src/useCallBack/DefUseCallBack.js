import React, { useCallback, useEffect, useState } from 'react'
import './DefUseCallBack.css'
const DefUseCallBack = () => {
    const [userInput,setUserinput]=useState('')
    const[num1]=useState(4)
    const[num2]=useState(5)
    const sum =useCallback(()=> num1+num2,[num1,num2])
    
    useEffect(()=>{
        console.log(`num is ${sum()}`)
    },[sum])

  return (  
    <div className='useCallBack'>
        <input className='input'  type='text' placeholder='Input' value={userInput} onChange={(e)=>setUserinput(e.target.value)}  />
        <h3>OutPut: {userInput || "--"}</h3>
        <h3>OutPutOfUseCallBack: {sum()}  <span style={{color:'red'}}> =={'>'} just modify when num1 or num 2 change</span>  </h3>
    </div>
  )
}

export default DefUseCallBack
