import styled from 'styled-components';

const NumberSelector = ({setError, error, selectedNumber, setSelectedNumber}) => {

    const arr = [1,2,3,4,5,6];

    const selectedNumberHandler = (value) => {
      setSelectedNumber(value);
      setError("");
    }

  return (
    <>
      <div className="GamePlay-top">
      <p style={{
        fontSize:'calc(0.6vw + 0.5rem)',
        fontWeight:500,
        color: "red"
      }}>{error}</p>
      <div className='number-box'>
      {
        arr.map((value, i) => (
            <Box 
            key = {i}
             onClick = {() => selectedNumberHandler(value)}
             isSelected = {value === selectedNumber} >{value}</Box>
        ))
      }
    </div>
      <p style={{
        fontSize:'calc(0.6vw + 0.5rem)',
        fontWeight:500,
      }}>Select a Number</p>
      </div>
    </>
  )
}

export default NumberSelector

const Box = styled.div`
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    width: fit-content;
    padding: 8px 12px;
    border: 2px solid black;
    font-size: calc(1vw + 1rem);
    font-weight: 600;
    cursor: pointer;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (props.isSelected ? "white" : "black")};
`