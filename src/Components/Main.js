import { useContext } from "react"
import { QuizContext } from "./Context"
import  '../App.css'

export const Main = () => {

    const {setCurrentScreen} = useContext(QuizContext)
  return (
    <div>
  
        <button onClick={()=>setCurrentScreen('Quiz')}>Start quiz</button>
      
    </div>
  )
}


