import styled from 'styled-components';
import RuleBox from './RuleBox';
import { useState } from 'react';

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify content: center;
    padding: calc(3vw + 3rem);
    width: 100%;

    .dice img{
        width:100%;
    }

    p{
        font-size: calc(1vw + 0.7rem);
        font-weight: 600;
    }

    .Reset-btn{
        font-size: calc(0.9vw + 0.7rem);
        font-weight: 600;
        padding: 8px 20px;
        border: none;
        margin: 5px;
        transition: all ease 0.9s;
    }

    .Reset-btn:hover{
        box-shadow: -5px 5px 10px rgb(90, 90, 90);
        cursor: pointer;
    }

    .Rules-btn{
        font-size: calc(.9vw + 0.7rem);
        font-weight: 600;
        padding: 8px 20px;
        margin: 5px;
        cursor: pointer;
        color: white;
        background-color: black;
    }
`

const DiceRoll = ({setScore, currentDice, rollDice}) => {

    const resetScore = () => {
        setScore(0);
    }

    const [showRules, setShowRules] = useState(false);

  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
      <img src={`/images/dice_${currentDice}.png`} alt="dice"/>
      </div>
      <p>Click the Dice to Roll</p>
      <button className='Reset-btn' onClick={resetScore}>Reset Score</button>
      <button className='Rules-btn' onClick={() => {
        setShowRules((prev) => !prev)
      }}>{(showRules ? "Hide" : "Show")} Rules</button>
      {showRules && <RuleBox/>}
    </DiceContainer>    
  )
}

export default DiceRoll
