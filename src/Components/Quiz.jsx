import React, { useState } from 'react'
import quizdata from '../Data/Quizdata';
const Quiz = () => {
    const [CurrrentQuestion,SetCurrentQuestion]=useState(0);
    const [SelectedAnswer,SetSelectedAnswer]=useState('');
    const [Score,SetScore]=useState(0);
    const [Result,ShowResult]=useState(false);

    const HandleNext=()=>{
        if(
            SelectedAnswer===question[CurrrentQuestion].answer
        ){
            SetScore(Score + 1);
        }
        
    }
  return (
    <div>
      <h2>{question[CurrrentQuestion].question}</h2>
      {question[CurrrentQuestion].option s.map((option,index)=>{
        <button key={index}
        onClick={()=>SetSelectedAnswer(option)}
        >{option}</button>
      })}
    </div>
  )
}

export default Quiz
