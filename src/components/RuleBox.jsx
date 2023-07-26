import styled from 'styled-components';

const RulesContainer = styled.div`
    background-color: #8D22A7;
    padding: 20px;
    border-radius: 5px;
    color: white;
    margin-top: 30px;

    h1{
        font-size: calc(1vw + 1rem);
    }

    ul{
        margin: 10px 0;
    }

    ul li{
        // list-style:none;
        font-size: calc(0.8vw + 0.5rem);
        margin-left: 10px;
    }
`

const RuleBox = () => {
  return (
    <RulesContainer>
      <h1>How to play the game</h1>
      <ul>
        <li>Select any number.</li>
        <li>Click on dice.</li>
        <li>After clicking on dice if selected number is equal to dice number you will get same point as on the dice. </li>
        <li>If you get wrong guess then 2 point will be deducted from the score.</li>
      </ul>
    </RulesContainer>
  )
}

export default RuleBox
