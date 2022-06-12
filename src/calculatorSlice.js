import {createSlice} from '@reduxjs/toolkit'; 

const initialState ={
    result:'',
    resultDone:false,
}

export const calculatorSlice = createSlice({
    name:'calculator',
    initialState,
    reducers:{
        display(state,action){
            if(state.resultDone){
                state.result = '';
                state.resultDone=false;
            }
            state.result = state.result==='Error' ? state.result= '': state.result + action.payload;
        },
        clear(state){
            state.result = initialState.result;
        },
        add(state){
            state.resultDone = false;
            state.result = state.result === 'Error' ? state.result = '' : state.result+'+';
        },
        subtract(state){
          state.resultDone = false;
            state.result = state.result === 'Error' ? state.result = '' : state.result+'-';
        },
        multiply(state){
          state.resultDone = false;
            state.result = state.result === 'Error' ? state.result = '': state.result+'x';
        },
        divide(state){
            state.resultDone = false;
            state.result = state.result === 'Error' ? state.result = '': state.result +'÷';
        },
        cancel(state){
            state.resultDone = false;
            state.result = state.result==='Error'? state.result= '' :state.result.slice(0,state.result.length-1);
        },
        evaluate(state){
            try{
            state.result = state.result ==='Error' ? state.result ='':state.result;
            state.result = state.result.replace(/x/gi,'*');
            state.result = state.result.replace(/÷/gi,'/');
            let eval_result = Function('return '+state.result)();
            state.result = eval_result.toString();
            state.resultDone = true;
            }catch(e){
                state.result = 'Error';
            }
        }
    }
})

export const {display,clear,add,evaluate,subtract,multiply,divide,cancel} = calculatorSlice.actions;
export default calculatorSlice.reducer;