import React from 'react'

const TodoList = (props)=>{
    return (
        <div>
            <input type='text' onChange={(e)=>{props.addText(e.target.value)}}/>
            <button onClick={()=>{props.addTodo(props.text)}}>add todo</button>
            </div>
    )
}

export default TodoList