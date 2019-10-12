import React, {useState} from 'react'

function page() {
  const param = 0
  const [count, setCount] = useState(param)
    return (
        <div style={{background: 'gray'}}>
        <p>We are going to use Hooks with params</p>
        <button onClick={()=> setCount(count+1)}>Incremet</button>
        <button onClick={()=> setCount(count-1)}>Decremet</button>
        <button onClick={()=> setCount(param)}>Reset</button>
            <span>Result: {count}</span>
        </div>
    )
}

export default page
