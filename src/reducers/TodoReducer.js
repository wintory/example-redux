import {ADD_TEXT,ADD_TODO,COMPLETE_TODO} from '../actions/ManageTodo'


const initialState = {
    text:'',
    data:[]
}

export default function TodoReducer(state=initialState,action){
    
    switch(action.type){
        case ADD_TEXT : return ({...state,text:action.text})
        case ADD_TODO : return ({...state,data:[...state.data,{id:action.id,data:action.data}]})
        default :return state
    }
}