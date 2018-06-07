import React from 'react';

const Att =(props)=>{
    return<div>
            <p className="App-intro">
            count : {props.count}
            </p>
            <button onClick={()=>props.addCount(1)}>add</button>
            <button onClick={()=>props.deleteCount(1)}>delete</button>
            </div>}


export default Att