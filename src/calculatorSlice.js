// Redux part
import {createSlice} from '@reduxjs/toolkit'; 

const initialState ={
    result:'',
    resultDone:false, // to reset on new calculations
}

// Reducer
export const calculatorSlice = createSlice({
    name:'calculator',
    initialState,
    reducers:{
        display(state,action){
            if(state.resultDone){
                state.result = '';
                state.resultDone=false;
            }
            state.result = (state.result==='Error' || state.result==='Infinity')?'': state.result + action.payload; // displays following operators and operand
        },
        clear(state){
            state.result = initialState.result;
        },
        add(state){
            state.resultDone = false;
            state.result = (state.result === 'Error' || state.result === 'Infinity') ? '' : state.result+'+';
        },
        subtract(state){
          state.resultDone = false;
            state.result = (state.result === 'Error' || state.result === 'Infinity') ? '' : state.result+'-';
        },
        multiply(state){
          state.resultDone = false;
            state.result = (state.result === 'Error' || state.result === 'Infinity') ? '': state.result+'x';
        },
        divide(state){
            state.resultDone = false;
            state.result = (state.result === 'Error' || state.result === 'Infinity') ? '': state.result +'÷';
        },
        cancel(state){
            state.resultDone = false;
            state.result = (state.result === 'Error' || state.result === 'Infinity') ? '' :state.result.slice(0,state.result.length-1);
        },
        evaluate(state){
            try{
            state.result = (state.result === 'Error' || state.result === 'Infinity') ? state.result ='':state.result;
            state.result = state.result.replace(/x/gi,'*'); // regExp to replace 'x' with '*'
            state.result = state.result.replace(/÷/gi, '/');  // regExp to replace '÷' with '/'
             // eslint-disable-next-line
            let eval_result = Function('return '+state.result)(); // similar to eval but more secure and faster   
            state.result =  state.result==='NaN'?'Error':eval_result.toString();
            state.resultDone = true;
            }catch(e){
                state.result = 'Error'; // inCase of any error (usually Syntax Error)
            }
        }
    }
})

export const {display,clear,add,evaluate,subtract,multiply,divide,cancel} = calculatorSlice.actions; // exporting actions
export default calculatorSlice.reducer;