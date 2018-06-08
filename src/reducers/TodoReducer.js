import {ADD_TEXT,ADD_TODO,COMPLETE_TODO} from '../actions/ManageTodo'


const initialState = {
    text:'',
    data:[]
}

export default function TodoReducer(state=initialState,action){

    switch(action.type){
        case ADD_TEXT : return ({...state,text:action.text})
        case ADD_TODO : return ({...state,data:[...state.data,{id:action.id,data:action.data,status:false}],text:''})
        case COMPLETE_TODO : return ({...state,data:state.data.map((data)=>{
            if(data.id===action.id){
                return {id:data.id,data:data.data,status:true}
            }else{
                if(data.status===true){
                    return {id:data.id,data:data.data,status:true}
                }else{
                    return {id:data.id,data:data.data,status:false}
                }
            }
        })})
        
        default :return state
    }
}