import React, { Component } from 'react';


const Att =(props)=>{
    return<div><button onClick={()=>props.addCount(1)}>add</button>
            <button onClick={()=>props.deleteCount(1)}>add</button>
            <p className="App-intro">
            count : {props.count}
            </p></div>}


export default Att