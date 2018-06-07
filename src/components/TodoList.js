import React from 'react'

const TodoList = (props)=>{
    return (
        <div>
            <input type='text' onChange={(e)=>{props.addText(e.target.value)}}/>
            <button onClick={()=>{props.addTodo(props.text)}}>add todo</button>
            {props.data.map((data,i)=>{return(<div key={i} style={{backgroundColor:'yellow',width:'20%',marginLeft:'40%',height:30}}><p>{data.data}</p></div>)})}
            <p onClick={props.completeTodo(props.id)}>x</p>
            </div>
    )
}

export default TodoList