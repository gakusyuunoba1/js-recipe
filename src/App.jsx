import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default App