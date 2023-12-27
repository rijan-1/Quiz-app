import { Quiz } from "./Components/Quiz";
import { EndScreen } from "./Components/EndScreen";
import { Main } from "./Components/Main";
import { useState} from "react";
import './App.css'
import { QuizContext } from "./Components/Context";



function App() {
  const [currentScreen,setCurrentScreen] = useState("Main");
  const [score, setScore] = useState(0)

  return (
    <div className="App">
      <h1>Quiz app</h1>
      <QuizContext.Provider value = {{currentScreen, setCurrentScreen, score, setScore}}>
        {currentScreen === 'Main' && <Main/>}

   
      {currentScreen === "Quiz" && <Quiz />}
      {currentScreen === "End" && <EndScreen />}
    </QuizContext.Provider>
    </div>
  );
}

export default App;
