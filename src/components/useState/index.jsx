import React, {useState} from 'react'

function page() {
  const [count, setCount] = useState(0)
    return (
        <div>
        <p>Aqui usamos el useState</p>
            <button onClick={()=> setCount(count+1)}>{count}</button>
            <span>Contador de clicks</span>
        </div>
    )
}

export default page
