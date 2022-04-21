import React,{useContext} from 'react'
import {Text,Text2} from './Child1'

const Child4 = () => {
    const T = useContext(Text);
    const T2 = useContext(Text2);
  return (
    <div>
        <h1>{T} {T2}</h1>
    </div>
  )
}

export default Child4