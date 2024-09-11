import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Timer() {
  const [count, setCount] = useState(10)

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
  }, []);

  return (
  <main>
    Time Remaining : {count}
  </main>
  )
}

function App() {
  const [showTimer, setShowTimer] = useState(false);
  const toggleTimer = () => setShowTimer(!showTimer);

  return(
    <main>
      <h1>React Timer App</h1>
      {showTimer && <Timer/>}
      <button onClick={toggleTimer}>
        {showTimer ? "Hide Timer" : "Show Timer"}
      </button>
    </main>
  )
}

export default App
