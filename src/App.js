import { Main } from "./Components/Main"
import {useState} from 'react'
import { Quiz } from "./Components/Quiz"
import './App.css'
import { createContext } from "react"
import { EndScreen } from "./Components/EndScreen"


export const myContext = createContext()
const App = () => {

  const [GameState, setGameState] = useState('Main')
  const [totalScore,setTotalScore] = useState(0)
  return (
    <div className='App'>
      <h1 className='Header'>Quiz App</h1>
    

      <div>
        <myContext.Provider value={{setGameState, setTotalScore,totalScore}}>
        {GameState==='Main'&&<Main/>}
        {GameState==='Quiz'&&<Quiz/>}
        {GameState==='End'&&<EndScreen/>}

</myContext.Provider>
      </div> 
     
      
    </div>
  )
}

export default App
