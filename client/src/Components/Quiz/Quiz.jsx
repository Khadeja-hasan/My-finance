import "./Quiz.scss";

import React, { useEffect, useState } from 'react';

import quiz from "../../data/quiz.json";

export default function Quiz () {

    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(quiz[index]);
    const [selection, setSelection] = useState(null);
    const [correctResponse, setCorrectResponse] = useState("")
    const [outcome, setOutcome] = useState("")
    

    const displayQuestion = quiz.map((item) => item)
   

    const displayRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * quiz.length)
    const generateQuestion = displayQuestion[randomIndex]
    return(generateQuestion)
    }

    const randomQuestion = displayRandomQuestion()
   
    useEffect(() => {
        setQuestion(randomQuestion)
    }, [])
   
    console.log(question)   

    const correctIndex = question.answer;

    const handleSelection = (e) => {
        e.preventDefault()
        setSelection(e.target.id)
        setCorrectResponse(correctIndex)
        console.log(e.target.id)

        setOutcome(e.target.id == correctIndex? "quiz__correct" : "quiz__incorrect")
    }

    return (
    <div className="quiz">
        <div className="quiz__body">
            <div className="quiz__question">
                <h3 className="quiz__ask">{question.question}</h3>
                <div className="quiz__answers">
                <ul className="quiz__options">
                    <li className={`quiz__option ${selection == 1? `${outcome}` : ""}`} id="1" onClick={(e)=>handleSelection(e)}>{question.choices[0]}</li>
                    <li className={`quiz__option ${selection == 2? `${outcome}` : ""}`} id="2" onClick={(e)=>handleSelection(e)}>{question.choices[1]}</li>
                    <li className={`quiz__option ${selection == 3? `${outcome}` : ""}`} id="3" onClick={(e)=>handleSelection(e)}>{question.choices[2]}</li>
                    <li className={`quiz__option ${selection == 4? `${outcome}` : ""}`} id="4" onClick={(e)=>handleSelection(e)}>{question.choices[3]}</li>
                </ul>
                </div>
            </div>
            <div className="quiz__button">
            <button className="quiz__reload" onClick={(e)=> {window.location.reload()}}>Shuffle</button>
            </div>
        </div>
      
    </div>
  )
}