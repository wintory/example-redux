
const initialState = {
    count : 0,
    data:[]
}

export default function TodoReducer(state=initialState,action){
    switch(action.type){
        case "ADD" : return ({...state,count:state.count++,data:state.data.push(action.data)})
        default :return state
    }
}