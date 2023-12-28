import './Main.css'
import { myContext } from '../App'
import { useContext } from 'react'

export const Main = () => {

    const {setGameState} = useContext(myContext)
  return (
    <div className = 'Main'>
        <h2>Welcome</h2>
        <button className='MainMenuButton'onClick ={()=>{setGameState('Quiz')}}>Begin Quiz</button>
      
    </div>
  )
}


