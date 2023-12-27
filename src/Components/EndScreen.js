import { useContext } from "react"
import { QuizContext } from "./Context"

export const EndScreen = () => {
    const {setCurrentScreen, setScore,score} = useContext(QuizContext)
  return (
    <div>
        <h2>Your total score is : {score} marks</h2>


        <button onClick ={()=>{setCurrentScreen('Main'); setScore(0)}}>Retsart</button>


      
    </div>
  )
}

