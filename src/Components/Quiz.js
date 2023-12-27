import { useState } from "react"
import { Questions } from "./Questions"
import { QuizContext } from "./Context"
import { useContext } from "react"
import '../App.css'
export const Quiz = () => {
    const {setScore,score,setCurrentScreen}= useContext(QuizContext)


    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState('')

    const nextQuestion = ()=>{
        if (Questions[currentQuestion].asnwer=== optionChosen){
            setScore(score+1)
        }
        setCurrentQuestion(currentQuestion+1)
    }

    const finishQuiz=()=>{
        if (Questions[currentQuestion].asnwer=== optionChosen){
            setScore(score+1)
        }
        setCurrentScreen('End')
    }
  return (
    <div className='Quiz'>
    <h2>Quiz</h2> 

    <h3>{Questions[currentQuestion].prompt}</h3>
    <div className="Options">
    A:<button onClick={()=>{setOptionChosen('A')}}> {Questions[currentQuestion].optionA}</button>
    B: <button onClick={()=>{setOptionChosen('B')}}>{Questions[currentQuestion].optionB}</button>
    C: <button onClick={()=>{setOptionChosen('C')}}>{Questions[currentQuestion].optionC}</button>
   D:<button onClick={()=>{setOptionChosen('D')}}>{Questions[currentQuestion].optionD}</button>
   

   </div>
   {currentQuestion === Questions.length -1?
   <button onClick = {finishQuiz}>Finish Quiz</button>: 
      <button onClick ={nextQuestion}>Next Question</button>
   }
      {score}
    </div>
  )
}

