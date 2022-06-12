import './App.css';
import Button from './Button';
import { useSelector, useDispatch } from "react-redux";
import {display,clear,add,evaluate,subtract,multiply,divide,cancel} from './calculatorSlice';


let Calculator = () => {
    const result = useSelector(state => state.calculator.result);
    const dispatch = useDispatch();


    return (
        <div className="calculator-box">
            <input className='result' value={result} />

            <div className='container'>
                <Button id='spl-button-top' value='AC' color='#c2c2a3' textColor='black' click={()=> dispatch(clear())} />
                <Button value='C' color='#c2c2a3' textColor='black' click={()=>dispatch(cancel())} />
                <Button value='÷' color='#ff751a' click={()=>dispatch(divide())} />

                <Button value='7' click={() => dispatch(display('7'))} />
                <Button value='8' click={() => dispatch(display('8'))} />
                <Button value='9' click={() => dispatch(display('9'))} />
                <Button value='×' color='#ff751a' click={()=>dispatch(multiply())} />



                <Button value='4' click={() => dispatch(display('4'))} />
                <Button value='5' click={() => dispatch(display('5'))} />
                <Button value='6' click={() => dispatch(display('6'))} />
                <Button value='-' color='#ff751a' click={()=>dispatch(subtract())} />

                <Button value='1' click={() => dispatch(display('1'))} />
                <Button value='2' click={() => dispatch(display('2'))} />
                <Button value='3' click={() => dispatch(display('3'))} />
                <Button value='+' color='#ff751a'  click={()=>dispatch(add())} />

                <Button value='0' id='spl-button-bottom' click={() => dispatch(display('0'))} />
                <Button value='.' click={() => dispatch(display('.'))} />
                <Button value='=' color='#ff751a' click={()=>{dispatch(evaluate())}} />
            </div>

        </div>
    )
}

export default Calculator;