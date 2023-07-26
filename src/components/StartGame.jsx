import { styled } from 'styled-components'


var Button= styled.button`
  font-family: 'Poppins';
  cursor:pointer;
  padding: 10px 20px;
  font-weight: 500;
  border:none;
  background:black ;
  color: white;
  border-radius: 5px;  
  transition: all ease 0.7s;
`

const StartGame = ({ toggle }) => {
  return (
    <>
      <div className="main-page-div">
      <img src="/images/dice.png" id="dice-image"  alt="" />
     <div className="main-div">
      <h1>
        DICE GAME
      </h1>
     <Button className='main-btn' onClick={toggle}>
      Click To Start
     </Button>
     </div>
      </div>
    </>
  )
}

export default StartGame
