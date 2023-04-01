import React, { useEffect } from 'react'
import './Ques.css'

const Ques = (props) => {

  

  function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}
function htmlEncode(input) {
  const textArea = document.createElement("textarea");
  textArea.innerText = input;
  return textArea.innerHTML.split("<br>").join("\n");
}
    const {question , answer , options, output, score}= props; 
    const [optionsList,setOptionsList]=React.useState([]) ;

  let x=0;
  console.log(answer)
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    // options.push(answer)
    React.useEffect(()=>{

       const ar=[...options,answer]
       shuffleArray(ar);
      setOptionsList(ar);
    })
    const as= optionsList;
   

   
    const[selected,setSelected]=React.useState("")


    function answerTouch(event){
      const select=event.target.textContent
      htmlEncode(select)
      
      
      setSelected(select)
      
    }
    


    function className(a){
      if(output){
        if(selected===a){
          if(a===answer){
           
        
            x++;
            return "answer"
          }else{
            return "wrong"
          }
        }else{
          if(a===answer){
          return "answer"
        }
      }
        
      }else{
        if(selected===a){
          return "selected"
        }
      }
  
    }
console.log(answer)
    

    const answers= as.map(a=> <button  key={a} onClick={answerTouch} className= {className(a)}>{decodeHtml(a)}</button>)


   
    useEffect(()=>{
         if(x===1){
          score(prev=>prev+1)
         }     
      
  },[x]) 
      
   

  return (
    <div>
        <div className='ques'>
            <h3>{decodeHtml(question)}</h3>
            <div className='options'>
                
                {answers}
            </div> 
            <hr/>
        </div>
    </div>
  )
}

export default Ques
