import React from 'react'
import { useState } from 'react'
import './cal.css'

function Cal() {
    const [display,setDisplay]= useState(' ');

    const handleInput =(num)=>{
        setDisplay((prevDisplay) => prevDisplay + num)
        
    }
    const clearInput =()=>{
        setDisplay(0)
    }
     const calculateResult =()=>{
        let result;
        try{
            result= eval(display);
        }
        catch (error){
           return alert("Invalid Input")    
        }
        setDisplay(result)
     }

    return (
        <>
        <div className="calculate">
           <input type="text" 
           value={display}
           readOnly/>  
             <div className="buttons">
        <button onClick={() => handleInput('1')}>1</button>
        <button onClick={() => handleInput('2')}>2</button>
        <button onClick={() => handleInput('3')}>3</button>
        <button onClick={() => handleInput('+')}>+</button>
        <button onClick={() => handleInput('4')}>4</button>
        <button onClick={() => handleInput('5')}>5</button>
        <button onClick={() => handleInput('6')}>6</button>
        <button onClick={() => handleInput('-')}>-</button>
        <button onClick={() => handleInput('7')}>7</button>
        <button onClick={() => handleInput('8')}>8</button>
        <button onClick={() => handleInput('9')}>9</button>
        <button onClick={() => handleInput('*')}>*</button>
        <button onClick={() => handleInput('0')}>0</button>
        <button onClick={() => handleInput('.')}>.</button>
        <button onClick={clearInput}>C</button>
        <button onClick={() => handleInput('/')}>/</button>
        <button onClick={calculateResult}>=</button>
      </div>
        </div>
        </>
    )
}

export default Cal
