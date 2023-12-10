import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Calculator from './Calculator';

function Counter(){
    const [count, setCount] = useState(0);

    const handleButtonClick = () => {
      setCount(newCount=>newCount+1);
    }
    return(
      <>
      <Calculator />
      <div>
      <button onClick={handleButtonClick}>Count is {count}</button>
      </div>
      </>
    )


}


function App() {

  return (
    <>
    <Counter />
      
        
    </>
  )
}

export default App
