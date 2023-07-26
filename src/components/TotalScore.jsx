import styled from 'styled-components';

const ScoreContainer = styled.div`
display: flex;
flex-direction:column;
align-items:center;
justify-content: center;
height: fit-content;
width: fit-content;
padding: 1px;
border: 1px solid rgb(130, 130, 130);

h1{
    font-size: calc(4vw + 3rem);
    font-weight: 600;
    line-height: calc(4vw + 2rem);
}

p{
    font-size: calc(0.5vw + 1rem);
    font-weight: 500;
}
`

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore
