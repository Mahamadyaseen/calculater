
import './App.css';
import React,{useState} from 'react'


function App() {
  const [numbers, setNumbers] = useState("");
  const handalChange=(e)=>
  { 
    console.log(setNumbers(numbers.concat(e.target.name)))
    console.log(e.target.name)
    console.log(numbers)
  }
  const clearNumbers=()=>
  {
    setNumbers('')
  }
  const cancelNumber=()=>
  {
    setNumbers(numbers.slice(0,-1))
  }
  const calculate=()=>
  {
    try{
      setNumbers(eval(numbers).toString())
    }catch
    {
       alert("invalid unput")
    }
  }
  const changehandler=()=>{}
  return (
  <div>
    <div className="main">
      <div className="input">
        <input type="text" value={numbers} onChange={changehandler} placeholder='000'/>
      </div>
      <div className="buttons">
        <button id='clear' onClick={clearNumbers}>Clear</button>
        <button name="c" className='button'  onClick={cancelNumber} >C</button>
        <button className='button' name='/' onClick={handalChange}>&divide;</button>
        <button className='numbers' name="7" onClick={handalChange}>7</button>
        <button className='numbers' name="8" onClick={handalChange}>8</button>
        <button className='numbers'name='9' onClick={handalChange}>9</button>
        <button className='button' name='*' onClick={handalChange}>&times;</button>
        <button className='numbers' name='4' onClick={handalChange}>4</button>
        <button className='numbers' name='5' onClick={handalChange}>5</button>
        <button className='numbers' name='6' onClick={handalChange}>6</button>
        <button className='button' name='-' onClick={handalChange}>&ndash;</button>
        <button className='numbers' name='1' onClick={handalChange}>1</button>
        <button className='numbers' name='2' onClick={handalChange}>2</button>
        <button className='numbers' name='3' onClick={handalChange}>3</button>
        <button className='button' name='+' onClick={handalChange}>+</button>
        <button className='numbers' name='0' onClick={handalChange}>0</button>
        <button className='numbers' name='.' onClick={handalChange}>.</button>
        <button id='equal' onClick={calculate}>=</button>

      </div>
    </div>
  </div>
  );
}

export default App;
