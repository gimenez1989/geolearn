import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import './question.css';

const Question = ({ question, options, flag, handleOption, solution, createQuestion }) => {

  const [correctOption, setCorrectOption] = useState(null);
  const [gameContinues, setgameContinues] = useState(true);

  const handleAnswer = (option) => {
    if (correctOption) return;
    setCorrectOption(solution);
    if (option == solution) {
      handleOption(true);
    }
    setgameContinues(false);
  }

  const handleContinue = () => {
    handleOption(false);
    setCorrectOption(null);
    setgameContinues(true);
    createQuestion();
  }

  let answered = correctOption ? "incorrect" : "no-asnwer";

  return (
    <div className='question'>
      <h2>{question}</h2>
      <img src={flag} alt="Country Flag" />
      <div className='gameOptions'>
        <button
          className={correctOption == "A" ? "correct" : answered}
          onClick={() => handleAnswer("A")}
        >{options.A}</button>

        <button
          className={correctOption && correctOption == "B" ? "correct" : answered}
          onClick={() => handleAnswer("B")}
        >{options.B}</button>

        <button
          className={correctOption && correctOption == "C" ? "correct" : answered}
          onClick={() => handleAnswer("C")}
        >{options.C}</button>

        <button
          className={correctOption && correctOption == "D" ? "correct" : answered}
          onClick={() => handleAnswer("D")}
        >{options.D}</button>
      </div>
      {gameContinues && <ProgressBar handleAnswer={handleAnswer} />}
      {!gameContinues && <button className='continueButton' onClick={() => handleContinue()}>Continuar</button>}
    </div>
  )
}

export default Question