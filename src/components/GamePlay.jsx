import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import DiceRoll from './DiceRoll'
import { useState } from 'react';

const GamePlay = () => {

  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setDice] = useState(1);
  const[error, setError] = useState();

  const generateRandomNumber = (min, max) => {
    return Math.floor((Math.random() * (max-min)) + min )
    }

    const rollDice = () => {
      if(!selectedNumber){
        setError("You have to select a number first");
        return;
      }

    const randomnumber = generateRandomNumber(1,7);
    setDice(randomnumber);

    if(selectedNumber === randomnumber)
    {
      setScore((prev) => prev + randomnumber)
    }
    else{
      setScore((prev) => prev - 2)
    }

    setSelectedNumber(undefined)
    }

  return (
    <>
        <div className="score-and-selector">
        <TotalScore score={score}/>
        <NumberSelector setError={setError} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
        </div>
        <DiceRoll setScore={setScore} currentDice={currentDice} rollDice={rollDice}/>
    </>
  )
}

export default GamePlay
