import React from 'react'
import './Start.css'
const Start = (props) => {
  const{click}=props
  
  return (
    <div className='container'>
        <div className='start'>
        <h1>Quizlet</h1>
      <p>Fun trivia quiz </p>
      <button onClick={click}>Start Quiz</button>
        </div>
      
    </div>
  )
}

export default Start
