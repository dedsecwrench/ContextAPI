import React from 'react'
import { Text,Text2 } from './Child1'

const Child3 = () => {
  return (
    <div>
        <Text.Consumer>
            {(Text)=>{
                return(
                //  { <h1>{Text}</h1>}
                  <Text2.Consumer>
                  {(Text2)=>{
                      return(
                        <h1>{Text} {Text2}</h1>
                      )
                  }}
              </Text2.Consumer>
                )
            }}
        </Text.Consumer>
    </div>
  )
}

export default Child3