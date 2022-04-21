import React,{createContext} from 'react'
import Child2 from './Child2'

export const Style = createContext()
export const Text = createContext()
export const Text2 = createContext()
const Child1 = () => {
  return (
    <div>
        <Text.Provider value={"Context"}>
        <Text2.Provider value={"API"}>
        <Child2/>
        </Text2.Provider>
        </Text.Provider>
    </div>
  )
}

export default Child1