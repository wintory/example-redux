import React from 'react'

const TodoList = (props)=>{
    console.log(props);
    
    return (
        <div>
            <input type='text' value={props.text} onChange={(e)=>{props.addText(e.target.value)}}/>
            <button onClick={()=>{props.addTodo(props.text)}}>add todo</button>
            {props.data.map((data,i)=>{return(<div key={i} style={{color:'black',backgroundColor:data.status===false?'yellow':'green',width:'20%',marginLeft:'40%',height:40}}><p onClick={()=>props.completeTodo(data.id)}>{data.data} x</p></div>)})}
            </div>
    )
}

export default TodoList