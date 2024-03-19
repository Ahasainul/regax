import { split } from 'postcss/lib/list';
import React from 'react'

const Hadding = ({className,text}) => {
  
// console.log(text.split('#'));
text.split(" ").map(itms=>{
  if (itms.includes("#")){
    let arr = itms.split("")
    arr.shift()
    arr.pop()
    console.log(arr.join(""));
  }
})


  return (
   <h1 className={`${className}`}>{text}</h1>
  )
}

export default Hadding
  