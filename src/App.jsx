import { useEffect, useState } from 'react'
import './App.css'

function Timer() {
  const [count, setCount] = useState(3)

  useEffect(() => {
    const timerId = setInterval(() => {
      if (count > 0) {
        console.log(count);
        setCount((prevCount) => prevCount - 1);
      } else {
        clearInterval(timerId);
        console.log('Countdown complete!');
      }
    }, 1000);
  
    return () => clearInterval(timerId); // Cleanup on unmount
  }, [count]); 

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
