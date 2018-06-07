
const initialState = {
    count : 0
}

export default function CountReducer(state=initialState,action){
    switch(action.type){
        case "ADD" : return ({...state,count:state.count+action.count})
        default :return state
    }
}