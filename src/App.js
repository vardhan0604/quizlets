import React from 'react'
import Start from './components/Start/Start'
import Quiz from './components/Quiz/Quiz'


const App = () => {

  const [start, setStart]=React.useState(false)
  const [ques,setQues]=React.useState([])
  const [restart,setRestart]=React.useState(false)
  React.useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=5&category=31&difficulty=easy&type=multiple")
  .then(res=> res.json())
  .then(data=>setQues(data.results))
  
  },[restart])

  // React.useEffect(()=>{
  //   setStart(prev=> !prev)

  // },[ques])
  
  function trigger(){
    
    setStart(prev=> !prev)
  }


  return (
    <div>
      {!start ? <Start click={trigger}/> : <Quiz questions={ques} restart={setRestart} home={setStart}/>}
     
    </div>
  )
}

export default App
