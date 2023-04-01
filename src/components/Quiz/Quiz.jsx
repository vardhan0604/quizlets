import React from 'react'
import Ques from '../Ques/Ques'
import './Quiz.css'
import Confetti from 'react-confetti'

const Quiz = (props) => {
    const {questions,restart,home}=props
    const [resultTime, SetResultTime]=React.useState(false)
    const[score,setScore]=React.useState(0)
   
    // const[score, setScore]=React.useState(0)


    const els=questions.map((el)=> 
        <Ques question={el.question} answer={el.correct_answer} options={el.incorrect_answers} output={resultTime} score={setScore}/>
    )
   
    function checkResult(){
      SetResultTime(prev=>!prev)
      console.log(resultTime)
     
      if(resultTime){
        restart(prev=>!prev)
        home(prev=>!prev)
      }else{

      }
    }

    
    
  return (
    <div className='Quiz'>

      {score===5 && <Confetti />}
      {els}
     
     
     
      
      <div className='Answer'>
        {resultTime && <p className='result'>Your score {score} is /5</p>}
      <button onClick={checkResult}>{resultTime?"New Game": "Check answer"}</button>
      </div>
    </div>
  )
}

export default Quiz
