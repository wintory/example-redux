export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const ADD_TEXT = 'ADD_TEXT'

export const addTodo = (data)=>{
    return {type:ADD_TODO,data:data,id:data+parseInt(Math.random()*100000)}
}

export const addText = (text)=>{
    return {type:ADD_TEXT,text:text}
}

export const completeTodo = (id)=>{
    return {type:COMPLETE_TODO,id:id}
}