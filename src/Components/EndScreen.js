
import { useContext } from "react"
import { myContext } from "../App"
import { Questions } from "./Questions"

export const EndScreen = () => {

    const {totalScore,setGameState,setTotalScore}= useContext(myContext)

  return (
    <div>
        <h1>End of the Quiz</h1>

        <div>
            <h2>Your Score: {totalScore}/{Questions.length}</h2>
        </div>
        <button onClick={()=>{setGameState('Main'); setTotalScore(0)}}>Restart</button>
      
    </div>
  )
}


