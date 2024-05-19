import React from 'react'

const One = (props) => {
  // let text = "hello how are you"
  // console.log(text)
  // let ans = text.includes('are')

  let arr = ["one", "two", "three"]
  let ans = arr.includes("three")
  console.log(ans)
  console.log(ans)
  return (
    <div>
      one page
      {props.data}
    </div>
  )
}

export default One
