import './App.css';
import blahajLogo from './images/logoblahaj.png'
import Button from './components/Button';
import ClearButton from './components/ClearButton';
import Screen from './components/Screen';
import { useState } from 'react';
import { evaluate } from 'mathjs'

function App() {

  const [input, setInput] = useState('');

  const addInput = value => {
    setInput(input + value);
  }

  const calculate = () => {
    if(input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para calcular su resultado");
    }
  }


  return (
    <div className="App">
      <div className='blahaj-logo-container'>
        <img
          className='blahaj-logo'
          src={blahajLogo}
          alt='Logo de Blahaj'
        />
      </div>
      <div className='calculator-container'>
        <Screen input={input}/>
        <div className='row'>
            <Button handleClick={addInput}>7</Button>
            <Button handleClick={addInput}>8</Button>
            <Button handleClick={addInput}>9</Button>
            <Button handleClick={addInput}>-</Button>
        </div>
        <div className='row'>
            <Button handleClick={addInput}>4</Button>
            <Button handleClick={addInput}>5</Button>
            <Button handleClick={addInput}>6</Button>
            <Button handleClick={addInput}>+</Button>
        </div >
        <div className='row'>
            <Button handleClick={addInput}>1</Button>
            <Button handleClick={addInput}>2</Button>
            <Button handleClick={addInput}>3</Button>
            <Button handleClick={addInput}>*</Button>
        </div>
        <div className='row'>
            <Button handleClick={addInput}>0</Button>
            <Button handleClick={addInput}>.</Button>
            <Button handleClick={calculate}>=</Button>
            <Button handleClick={addInput}>/</Button>
        </div>
        <div className='row'>
            <ClearButton handleClear={() => setInput('')}>
              Clear
            </ClearButton>
        </div>

      </div>
    </div>
  );
}

export default App;
