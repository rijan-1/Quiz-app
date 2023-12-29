import { Questions } from "./Questions";
import { useState } from "react";
import { useContext } from "react";
import { myContext } from "../App";

import "./Quiz.css";

export const Quiz = () => {
  const { setTotalScore, totalScore,setGameState  } = useContext(myContext);

  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState("");

  const nextQuestion = () => {
    if (selectedQuestion === Questions[questionNumber].asnwer) {
      setTotalScore(totalScore + 1);
    }

    selectedQuestion ===''? alert('You have to slect an option'):
    setQuestionNumber(questionNumber + 1);
  };

  const finalQuestion =()=>{
    if (selectedQuestion === Questions[questionNumber].asnwer) {
        setTotalScore(totalScore + 1);
      }
      setGameState('End')

  }

  return (
    <div className="backgroundQuiz">
      <div className="questions">
        {Questions[questionNumber].prompt}
        <button
          onClick={() => {
            setSelectedQuestion("A");
          }}
        >
          A: {Questions[questionNumber].optionA}
        </button>
        <button
          onClick={() => {
            setSelectedQuestion("B");
          }}
        >
          B: {Questions[questionNumber].optionB}
        </button>
        <button
          onClick={() => {
            setSelectedQuestion("C");
          }}
        >
          C: {Questions[questionNumber].optionC}
        </button>
        <button
          onClick={() => {
            setSelectedQuestion("D");
          }}
        >
          D: {Questions[questionNumber].optionD}
        </button>


        {questionNumber ===Questions.length-1 ? <button onClick = {finalQuestion}>Finish Quiz</button>:
        <button onClick={nextQuestion}>Next Question</button>

}
      </div>
      {totalScore}
    </div>
  );
};
