import React from "react";
import './Calculator.css';
import { useState } from "react";

export default function Calculator() {
    const [num, setNum] = useState(0);
    const [firstNum, setFirstNum] = useState();
    const [operator, setOperator] = useState();
    const [opacity, setOpacity] = useState(0);
    const [ifCalculate, setIfCalculate] = useState(false);

    function inputNum(e) {
        if (num === 0 && !ifCalculate) {
            setNum(e.target.value)
        } else if (!ifCalculate) {
            setNum(num + e.target.value)
        } else if (ifCalculate) {
            setNum(e.target.value);
            setIfCalculate(false);
        }
    }

    function clear() {
        setNum(0)
        setFirstNum(0)
        setOperator('')
        setOpacity(0)
    }

    function del() {
        if (calculate) {
            setNum(0)
        }
        if (num.length === 1) {
            setNum(0)
        } else if (num.length > 1) {
            setNum(num.slice(0, -1))
        }
    }

    function percentage() {
        setNum(num / 100);
    }

    function changeSing() {
        if (num > 0) {
            setNum(-num)
        } else {
            setNum(Math.abs(num));
        }
    }

    function operation(e) {
        if (operator === '') {
            setOperator(e.target.value)
            setFirstNum(num)
            setNum(0)
            setOpacity(0.3)
        } else {
            calculate()
        }
    }

    function calculate() {
        setIfCalculate(true)
        if (operator === '/') {
            setNum(firstNum / num);
        } else if (operator === 'x') {
            setNum(firstNum * num)
        } else if (operator === '-') {
            setNum(firstNum - num)
        } else if (operator === '+') {
            setNum(parseFloat(firstNum) + parseFloat(num))
        } else if (operator === '') {
            setIfCalculate(false)
        }
        setFirstNum(0);
        setOperator('');
        setOpacity(0);
    }

    return (
        <div className="container">
            <div className="background">
                <div className="calculator-content">
                    <h2 className="first-number" style={{ opacity: opacity }}>{firstNum + ' ' + operator}</h2>
                    <h1 className="result">{num}</h1>
                    <button className="light-gray" onClick={clear}>C</button>
                    <button className="light-gray" onClick={changeSing}>+/-</button>
                    <button className="light-gray" onClick={percentage}>%</button>
                    <button className="blue" onClick={operation} value={'/'}>/</button>
                    <button className="gray" onClick={inputNum} value={7}>7</button>
                    <button className="gray" onClick={inputNum} value={8}>8</button>
                    <button className="gray" onClick={inputNum} value={9}>9</button>
                    <button className="blue" onClick={operation} value={'x'}>x</button>
                    <button className="gray" onClick={inputNum} value={4}>4</button>
                    <button className="gray" onClick={inputNum} value={5}>5</button>
                    <button className="gray" onClick={inputNum} value={6}>6</button>
                    <button className="blue" onClick={operation} value={'-'}>-</button>
                    <button className="gray" onClick={inputNum} value={1}>1</button>
                    <button className="gray" onClick={inputNum} value={2}>2</button>
                    <button className="gray" onClick={inputNum} value={3}>3</button>
                    <button className="blue" onClick={operation} value={'+'}>+</button>
                    <button className="gray" onClick={inputNum} value={'.'}>.</button>
                    <button className="gray" onClick={inputNum} value={0}>0</button>
                    <button className="gray" onClick={del}>del</button>
                    <button className="blue" onClick={calculate}>=</button>
                </div>
            </div>
        </div >
    )

}