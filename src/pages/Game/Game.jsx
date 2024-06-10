import "./Game.scss"
import React from 'react';
import Quiz from "../../Components/Quiz/Quiz.jsx"

import Header from "../../Components/Header/Header.jsx"

const Game = () => {
  return (
    <div className='game'>
      <Header/>
      <div className="game__title">Test your knowledge</div>
      <div className="game__component">
      <Quiz/>
      </div>
    </div>
  )
}

export default Game
